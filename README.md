# Web Development 2 presentations

Marp slide decks for Web Development 2. Each deck is Markdown in `src/`; built HTML lives in `presentations/`.

## Layout

```text
src/<deck-name>/
  index.md
  assets/
presentations/<deck-name>/
  index.html
  assets/
```

One Marp file per deck folder. Image paths stay relative to `index.md`, for example `./assets/diagram.png`.

## Build

From the repo root, after installing the generator once:

```bash
npm install --prefix .agents/skills/generate-presentations
node .agents/skills/generate-presentations/scripts/generate.mjs src
```

Pass a single deck folder instead of `src` to rebuild one deck. Add `--pdf` to also write `index.pdf`.

Open `presentations/<deck-name>/index.html` in a browser to present.
