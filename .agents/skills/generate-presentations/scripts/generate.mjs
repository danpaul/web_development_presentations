import { execFileSync } from "child_process";
import { access, cp, lstat, mkdir, readFile, readdir, realpath, rm } from "fs/promises";
import * as path from "path";
import { fileURLToPath } from "url";

const inhollandThemePath = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../../inholland-themer/theme/inholland.css",
);

function parseArgs(argv) {
  const args = { pdf: false, out: null, source: null };
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === "--pdf") {
      args.pdf = true;
    } else if (arg === "--out") {
      const value = argv[++i];
      if (!value) {
        throw new Error("--out requires a directory");
      }
      args.out = value;
    } else if (arg.startsWith("--")) {
      throw new Error(`Unknown option: ${arg}`);
    } else if (!args.source) {
      args.source = arg;
    } else {
      throw new Error(`Unexpected argument: ${arg}`);
    }
  }
  if (!args.source) {
    throw new Error(
      "Usage: node generate.mjs <source> [--out <dir>] [--pdf]",
    );
  }
  return args;
}

function repoRoot() {
  try {
    return execFileSync("git", ["rev-parse", "--show-toplevel"], {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
  } catch {
    return process.cwd();
  }
}

function samePath(left, right) {
  const normalize = (value) => {
    const resolved = path.normalize(path.resolve(value));
    return process.platform === "win32" ? resolved.toLowerCase() : resolved;
  };
  return normalize(left) === normalize(right);
}

async function existingPath(target) {
  try {
    return await realpath(target);
  } catch {
    return path.resolve(target);
  }
}

async function isSameDirectory(left, right) {
  const [realLeft, realRight] = await Promise.all([
    existingPath(left),
    existingPath(right),
  ]);
  return samePath(realLeft, realRight);
}

async function readFrontmatter(filePath) {
  const text = await readFile(filePath, "utf8");
  if (!text.startsWith("---")) {
    return "";
  }
  const end = text.indexOf("\n---", 3);
  return end === -1 ? text : text.slice(0, end);
}

function isMarpFrontmatter(frontmatter) {
  return /^marp:\s*true\s*$/m.test(frontmatter);
}

function usesInhollandTheme(frontmatter) {
  return /^theme:\s*inholland\s*$/m.test(frontmatter);
}

async function fileExists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function listEntries(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  return entries.filter(
    (entry) => !entry.name.startsWith("_") && entry.name !== "node_modules",
  );
}

async function marpFilesIn(dir) {
  const entries = await listEntries(dir);
  const files = [];
  for (const entry of entries) {
    if (!entry.isFile() || !entry.name.endsWith(".md")) {
      continue;
    }
    const filePath = path.join(dir, entry.name);
    const frontmatter = await readFrontmatter(filePath);
    if (isMarpFrontmatter(frontmatter)) {
      files.push(filePath);
    }
  }
  return files;
}

function deckFromMarpFiles(dir, marpFiles) {
  if (marpFiles.length === 0) {
    return null;
  }
  if (marpFiles.length > 1) {
    const names = marpFiles.map((file) => path.basename(file)).join(", ");
    throw new Error(
      `More than one Marp file in ${dir}: ${names}. Each presentation folder must contain one deck.`,
    );
  }
  return marpFiles[0];
}

async function presentationChildren(dir) {
  const entries = await listEntries(dir);
  const children = [];
  for (const entry of entries) {
    if (!entry.isDirectory() || entry.name === "assets") {
      continue;
    }
    const child = path.join(dir, entry.name);
    const markdown = deckFromMarpFiles(child, await marpFilesIn(child));
    if (!markdown) {
      continue;
    }
    children.push({ dir: child, name: entry.name, markdown });
  }
  return children;
}

async function resolveSource(source) {
  let stat;
  try {
    stat = await lstat(source);
  } catch {
    throw new Error(`Source directory not found: ${source}`);
  }
  if (!stat.isDirectory()) {
    throw new Error(
      `${source} is not a directory. Pass a presentation directory or a directory of presentation directories.`,
    );
  }

  const ownMarp = await marpFilesIn(source);
  const children = await presentationChildren(source);

  if (children.length > 0 && ownMarp.length > 0) {
    throw new Error(
      `${source} contains both a Marp deck and presentation folders. Pass either one presentation directory or a directory of presentation directories.`,
    );
  }
  if (children.length > 0) {
    return children;
  }
  if (ownMarp.length > 1) {
    const names = ownMarp.map((file) => path.basename(file)).join(", ");
    throw new Error(
      `Each presentation must be its own folder. Found ${ownMarp.length} Marp decks in ${source}: ${names}.`,
    );
  }
  const markdown = deckFromMarpFiles(source, ownMarp);
  if (markdown) {
    return [{ dir: source, name: path.basename(source), markdown }];
  }
  throw new Error(`No presentations found in ${source}.`);
}

async function copyAssets(sourceDir, outputDir) {
  const srcAssets = path.join(sourceDir, "assets");
  const destAssets = path.join(outputDir, "assets");
  let srcStat;
  try {
    srcStat = await lstat(srcAssets);
  } catch {
    console.warn(
      `Warning: no assets folder for ${path.basename(sourceDir)} (${srcAssets})`,
    );
    return;
  }
  if (!srcStat.isDirectory()) {
    console.warn(`Warning: assets path is not a directory: ${srcAssets}`);
    return;
  }
  if (await isSameDirectory(srcAssets, destAssets)) {
    return;
  }
  await rm(destAssets, { recursive: true, force: true });
  await cp(srcAssets, destAssets, { recursive: true });
}

async function exportDeck(marpCli, deck, outputDir, fileType, themeReady) {
  const outputPath = path.join(outputDir, `index.${fileType}`);
  const args = [
    deck.markdown,
    `--${fileType}`,
    "--allow-local-files",
    "-o",
    outputPath,
  ];
  if (themeReady) {
    args.push("--theme-set", inhollandThemePath);
  }
  const code = await marpCli(args);
  if (code) {
    throw new Error(
      `Marp ${fileType} export failed for ${deck.name} (exit ${code})`,
    );
  }
}

async function buildDeck(marpCli, deck, outRoot, pdf, themeReady) {
  const outputDir = path.join(outRoot, deck.name);
  await mkdir(outputDir, { recursive: true });
  await exportDeck(marpCli, deck, outputDir, "html", themeReady);
  if (pdf) {
    await exportDeck(marpCli, deck, outputDir, "pdf", themeReady);
  }
  await copyAssets(deck.dir, outputDir);
  console.log(`Built ${deck.name} -> ${outputDir}`);
}

async function main() {
  let marpCli;
  try {
    ({ marpCli } = await import("@marp-team/marp-cli"));
  } catch (err) {
    console.error(
      "Could not load @marp-team/marp-cli. Run npm install in .agents/skills/generate-presentations.",
    );
    console.error(err instanceof Error ? err.message : err);
    process.exitCode = 1;
    return;
  }

  const args = parseArgs(process.argv.slice(2));
  const source = path.resolve(args.source);
  const outRoot = path.resolve(args.out ?? path.join(repoRoot(), "presentations"));
  const decks = await resolveSource(source);
  const themeReady = await fileExists(inhollandThemePath);
  for (const deck of decks) {
    const frontmatter = await readFrontmatter(deck.markdown);
    if (usesInhollandTheme(frontmatter) && !themeReady) {
      throw new Error(
        `Theme inholland requires the inholland-themer skill, but ${inhollandThemePath} is missing.`,
      );
    }
  }
  for (const deck of decks) {
    await buildDeck(marpCli, deck, outRoot, args.pdf, themeReady);
  }
}

main().catch((err) => {
  console.error(err instanceof Error ? err.message : err);
  process.exitCode = 1;
});
