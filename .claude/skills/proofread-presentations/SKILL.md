---
name: proofread-presentations
description: Proofreads and fixes typos and poor wording in Marp presentation markdown. Use when the user asks to proofread, copyedit, or clean up presentation slides, a deck, or the presentation series.
---

# Proofread presentations

Edit Marp source in place. Do not rebuild HTML. Building stays with `generate-presentations`.

## What to edit

Fix spelling, grammar, and awkward or ambiguous wording. Keep the teaching voice, slide length, and meaning. Tighten a bullet. Do not rewrite the deck.

## What to leave unchanged

- YAML frontmatter (`marp`, `theme`, `paginate`, and any other keys)
- Slide breaks (`---`)
- HTML comments, class directives, and `<style>` blocks
- Code fences, inline code, commands, URLs, and image paths
- Technical names, including stylized ones (`Nextjs`, API identifiers)

## Source

Use the path the user names:

- One markdown file.
- One presentation directory (a deck file plus optional `assets/`).
- A directory of presentation directories.
- No path: every file under `src/presentations/` whose frontmatter contains `marp: true`. Flat sibling `.md` files in that folder are valid input here.

Skip files and folders whose names start with `_`. A `README.md` without Marp frontmatter is not a deck.

## Report

After editing, list each changed file with a one-line note of what changed. Omit files that were already clean.

## Examples

Typo:

```markdown
- Instal the tools from the previous slide
```

```markdown
- Install the tools from the previous slide
```

Wording:

```markdown
- This is the thing that we use in order to be able to store the data
```

```markdown
- Stores the data
```
