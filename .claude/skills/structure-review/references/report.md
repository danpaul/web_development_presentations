# Structure review report format

Use this schema for each finding. Describe the structural problem. Do not rewrite the lesson.

## Finding template

### [S001] Slide [number] — [short descriptive title]

- **Type:** repetition | missing transition | unclear role | broken sequence | orphan | weak open or close | overloaded slide
- **Slides:** The slides involved, by number and heading.
- **What repeats or breaks:** The point that appears twice, the jump, the missing role, or the promise the open or close does not meet. Quote headings or first lines only as locators.
- **Why the sequence suffers:** What the audience can no longer follow. Do not judge whether the material is correct, complete, or well explained.
- **Severity:** High | Medium | Low
- **Move:** Reorder | Merge | Cut | Add a bridge | Retitle
- **Where:** Which slide moves, which two slides merge, what is cut, where a bridge goes, or which heading changes. One sentence. No replacement lesson text.

## Severity guide

- **High:** The audience loses the thread. A missing open or close, a section that never connects, or a jump that hides the next topic.
- **Medium:** The audience has to guess the shift. A weak bridge, an unclear role, or a slide that does two jobs.
- **Low:** A small duplicate or a soft bridge. The sequence still holds.

Severity is about the sequence, not about how important the topic is.

## Roles

Use one role per slide in the deck map:

- **open** — title, goal, or roadmap
- **setup** — places a term, problem, or constraint the later slides use
- **teach** — carries one step of the lesson
- **example** — a case of a point already placed
- **bridge** — names the shift between topics or sections
- **recap** — restates earlier points in order to land the deck
- **aside** — a slide that does not serve the through-line

A preview, a second example, a callback, or a recap keeps its role when it does a different job from the first occurrence. Mark it as a finding only when the second occurrence adds no new role.

## Suggested top-level report

# Presentation Structure Review

- **Deck:** [path to the Marp markdown file]
- **Review date:** YYYY-MM-DD
- **Coverage:** [slides inspected] / [total slides]

## Scope

[Path, what was read, and any slides skipped.]

## Deck map

**Through-line:** [One sentence: the journey the deck takes.]

| Slide | Heading | Role |
|---|---|---|
| 1 | [heading] | open |

## Findings

[Ordered by severity, then slide number, using the finding template. If the structure holds, say so and leave this section empty of invented issues.]

## Suggested moves

[The same moves, in deck order. One line each, with the finding ID. Short enough to apply later.]
