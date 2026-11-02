---
name: generate-presentations
description: Builds Marp markdown presentations to HTML, one folder per deck with that deck's assets copied beside the HTML. Use when the user asks to generate, build, or export presentations, a presentation series, or a single Marp deck.
---

# Generate presentations

Build Marp decks with the skill script. Do not reimplement Marp.

## Source layout

Each presentation is a directory with one Marp markdown file and an `assets/` folder. Image paths stay relative to that file, for example `./assets/diagram.png`.

```text
slides/
  01_intro/
    index.md
    assets/
  02_js/
    02_js.md
    assets/
```

The deck file is `index.md`, or `<folder-name>.md`, or the only other top-level markdown file whose frontmatter contains `marp: true`. More than one Marp file in a folder is an error. Files and folders whose names start with `_` are skipped.

A directory of presentation folders is a series. A directory that itself contains the deck is a single presentation. A parent `README.md` without Marp frontmatter does not make the parent a deck. A flat directory of sibling `.md` files is invalid.

## Output

Default output is `<repo-root>/presentations/<deck-name>/`:

```text
presentations/
  01_intro/
    index.html
    assets/
```

The script replaces that deck's `index.html` and `assets/` only. Sibling decks are left in place. When the source directory and the output directory are the same, it writes `index.html` beside the markdown and does not delete the markdown or assets.

Pass `--pdf` to also write `index.pdf`. HTML is always written.

## Run

From the repo root:

```bash
node .agents/skills/generate-presentations/scripts/generate.mjs <source> [--out <dir>] [--pdf]
```

- `<source>` is one presentation directory or a directory of presentation directories.
- `--out` overrides the default `<git-root>/presentations`.
- `--pdf` also exports PDF.

If `@marp-team/marp-cli` cannot be loaded, run `npm install` in `.agents/skills/generate-presentations` and rerun the script.

## Theme

When `inholland-themer/theme/inholland.css` sits next to this skill, the script passes it with `--theme-set` on every export. Decks that use another theme, including `default`, stay on that theme. A deck that sets `theme: inholland` fails the build if that CSS file is missing.

## Example

`example/` is a sample deck. It sets `theme: inholland` and uses the slide classes from `inholland-themer`: `title`, `lead`, `quote`, `columns`, and `closing`.

From the repo root, after the skills are installed:

```bash
node .agents/skills/generate-presentations/scripts/generate.mjs .agents/skills/generate-presentations/example
```
