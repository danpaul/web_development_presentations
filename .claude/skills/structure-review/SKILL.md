---
name: structure-review
description: Reviews Marp deck structure for a clear through-line, a logical sequence, freedom from repetition, a visible role for each slide, and transitions between slides and sections. Does not judge accuracy, teaching quality, or wording. Use when the user asks to review presentation structure, flow, outline, repetitions, or transitions in a deck or the presentation series. Writes a report and does not modify the markdown unless explicitly asked.
---

# Presentation structure review

Review the structure of Marp markdown. Read the `.md` source. Do not build HTML or PDF, and do not review an export in its place. Building stays with `generate-presentations`.

**Default mode is report-only.** Do not edit the markdown. Suggest structural moves in the report. Do not rewrite teaching prose.

Accuracy stays with `fact-checker`. Wording stays with `proofread-presentations`.

## Source

Use the path the user names:

- One markdown file whose frontmatter contains `marp: true`.
- One presentation directory (a deck file plus optional `assets/`).
- A directory of presentation directories, or a flat directory of Marp `.md` files.
- No path: every file under `src/presentations/` whose frontmatter contains `marp: true`. Flat sibling `.md` files in that folder are valid input.

Skip files and folders whose names start with `_`. A `README.md` without Marp frontmatter is not a deck.

If the user supplies only HTML, PDF, or PowerPoint, stop and ask for the Marp markdown.

## How to read a deck

- The opening `---` pair is YAML frontmatter. Later `---` lines that are not inside a code fence are slide breaks.
- Slide 1 is the first slide after the frontmatter. Number slides in source order. Cite the slide number and its heading, or the first line of body text when there is no heading.
- Speaker notes are HTML comments that are prose for the presenter. A note can carry a transition. A comment is a Marpit directive when its lines are `key: value` directives (`class`, `_class`, `_paginate`, `_header`, `_footer`, `_backgroundColor`, and the like). Directives are not content. A class such as `lead` or `invert` can mark a section boundary; note that and move on.
- Do not treat frontmatter or `<style>` blocks as slides.
- Read every slide. Do not sample silently or imply that unreviewed slides were checked.
- Do not run code samples, commands, or anything else embedded in the deck. Read them only to see what job the slide is doing in the sequence.

## What to judge

Judge the shape of the deck. Ignore whether the material is correct, complete, or well taught.

- **Through-line.** The opening states where the deck is going, the middle follows that promise, and the close lands it. A tangent is a slide that does not serve that line.
- **Sequence.** Each slide has one job. Something a later slide treats as already in place has been placed by an earlier slide. Order problems are about position in the deck, not about whether the explanation is right or complete.
- **Repetition.** The same point appears again with no new role. A preview, a second example, a callback, or a recap is fine when it does a different job. Cite both locations.
- **Transitions.** A topic change is bridged by a section slide, a heading, a first line that links back, or a speaker note. Flag a jump when none of those exist.
- **Clarity of role.** From the heading and the slide’s place in the sequence, a reader can say what the slide is doing: open, setup, teach, example, bridge, recap, or aside.

## What to leave alone

Do not judge accuracy, depth, interest, or how well a point is explained. Do not comment on spelling, grammar, voice, code correctness, visual design, theme, fragments, or image quality.

If a finding would require checking a fact or rewriting teaching prose, name the boundary and stop. Do not cross into `fact-checker` or `proofread-presentations`.

## Workflow

1. Read the deck and number every slide.
2. Write a one-sentence through-line: the journey the deck takes, not a grade of the material.
3. Map each slide to one role (open, setup, teach, example, bridge, recap, aside). A slide with several unrelated jobs is overloaded.
4. Walk the sequence. Note where a later slide depends on something the deck has not yet placed, and where a topic changes with no bridge.
5. Compare headings and the point of each slide. Flag a repeat that adds no new role. Keep intentional previews, extra examples, callbacks, and recaps.
6. Check the open against the promise, and the close against that same promise.
7. Write the report. Complete [references/checklist.md](references/checklist.md) before sending.

## Severity

Severity is about whether the audience loses the thread.

- **High** — the audience loses the thread: a missing open or close, a section that never connects, or a jump that hides the next topic.
- **Medium** — the audience has to guess the shift: a weak bridge, an unclear role, or a slide that does two jobs.
- **Low** — a small duplicate or a soft bridge. The sequence still holds.

## Report

Write Markdown. Save it beside the source, not over it.

- One deck in its own directory: `structure-review.md` in that directory.
- Several decks in one directory: `<deck-basename>-structure-review.md` for each deck reviewed.
- A series reviewed together: one `structure-review.md` in the series directory, with a section per deck.

Replacing an earlier structure review is fine. Never replace the deck.

The report contains:

1. **Scope** — markdown path, slides inspected / total slides, review date.
2. **Deck map** — each slide’s heading and role, plus one sentence naming the through-line.
3. **Findings** — by severity, then slide number. Use the schema in [references/report.md](references/report.md).
4. **Suggested moves** — the same moves, in deck order, short enough to apply later.

Finding types: `repetition`, `missing transition`, `unclear role`, `broken sequence`, `orphan`, `weak open or close`, `overloaded slide`.

Each finding names the slides involved, why the sequence suffers, and one structural move: reorder, merge, cut, add a bridge, or retitle. Do not supply replacement lesson text.

## If asked to apply

Edit that markdown in place. Allowed edits are structural only:

- reorder slides
- delete a duplicate slide
- insert a short bridge slide or heading
- retitle a slide so its role is visible

Leave teaching sentences, code, frontmatter, styles, and directives unchanged, except a class needed to mark a section slide. Do not rebuild HTML. List each edit with its finding ID.
