---
name: template-presentation
description: Scaffolds a new Marp presentation directory with the course frontmatter, fragment styles, and example slides. Use when the user asks to template, scaffold, or start a new Marp presentation or deck.
---

# Template presentation

Copy the starter deck in this skill. Do not rebuild HTML. Building stays with `generate-presentations`.

## Create

Copy `template/` to `<destination>/<deck-name>/`:

```text
<deck-name>/
  index.md
  assets/
```

The deck file is `index.md`. Image paths stay relative to that file, for example `./assets/example.png`.

- Use the path the user gives. If they only give a title, ask where the folder should go.
- One Marp file per folder. Do not add a second markdown file with `marp: true`.
- Create `assets/` even when it is empty. Put images there and keep paths relative to `index.md`.
- Skip names that start with `_`.

Do not write `src/presentations/<name>.md`. Do not add the new folder under the current flat `src/presentations/` series. That parent still contains sibling Marp files, so the generator cannot build it as a series. A new folder can still be built on its own by passing that folder as the source.

## What to keep

Replace the placeholder title and bullets with the user's topic. Leave these in place:

- YAML frontmatter (`marp`, `theme`, `paginate`)
- The fragment `<style scoped>` block and its `<!-- only include once in document -->` comment. Include that block once, immediately after the frontmatter.
- `<!-- class: invert -->` on the title slide and `<!-- class: lead -->` on the following slide
- The background-image slide (`![bg contain right:50%](./assets/...)`)
- The progressive-disclosure slide (`<div data-marpit-fragment>`)

## Build

When the user wants HTML, from the repo root:

```bash
node .claude/skills/generate-presentations/scripts/generate.mjs <deck-folder>
```
