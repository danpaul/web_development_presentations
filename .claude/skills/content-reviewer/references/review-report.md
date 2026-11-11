# Content review report format

Use this schema for each finding. Cite the slide and the topic it belongs to.

## Finding template

### [R001] Slide [number] — [short descriptive title]

- **Topic:** Name from the inventory.
- **Location:** Slide number and heading. Include every slide the finding covers.
- **Kind:** Currency | Missing | Cut or shrink | Other quality
- **Severity:** High | Medium | Low
- **What the deck does now:** The current focus, in a sentence or two. For a missing topic, say where the lesson passes the gap.
- **What current practice supports:** What the opened sources establish about the topic, and what they do not establish.
- **Sources:**
  - [S001] Title — Publisher, date/version. URL. Relevant section. Accessed YYYY-MM-DD.
- **Recommended action:** Keep | Refocus | Add | Shrink | Move | Remove
- **Suggested change:** A short markdown sketch for a small slide change, or a one-paragraph description when the change is larger than a sketch. If a new factual claim in the sketch was not verified, say it needs a fact-check before use.

## Severity guide

- **High:** A learner would leave with the wrong current practice, or a central topic of this lesson is absent or obsolete.
- **Medium:** The lesson is usable, but emphasis, order, or coverage should change.
- **Low:** A local trim, a minor gap, or a small mismatch that does not change the lesson.

Severity is about the effect on the lesson, not about how confident the source list is.

## Executive summary counts

Compute totals from the inventory and the findings. Include:

- Total slides and slides inspected
- Topics identified, and how many were researched online
- Count by kind (currency, missing, cut or shrink, other quality)
- Count by severity
- Number of sources opened and inspected

A finding has one kind. Do not count it in two kinds. State clearly if the deck was only partially inspected or if online research was not performed.

## Suggested top-level report

# Presentation Content Review

- **Deck:** [path to the Marp markdown file]
- **Review date:** YYYY-MM-DD
- **Coverage:** [slides inspected] / [total slides]
- **Research method:** [tools used and source types opened]
- **Not a fact-check:** This review judges topics, currency, and relevance. It does not verify every assertion. Claim-level checks belong to `fact-checker`.
- **Limitations:** [if any]

## Lesson intent

[Inferred audience, scope, and what the deck claims to teach.]

## Topic inventory

| Topic | Role | Slides | Share |
|---|---|---|---|
| [name] | Core / Supporting / Example / Aside | [numbers] | [rough share] |

## Findings

[Currency, then missing, then cut or shrink, then other quality. Use the finding template.]

## Suggested revision order

[The smallest set of changes that would bring the lesson up to date, in the order to make them.]

## Coverage

[Slides accounted for, topics not researched, and sentences that need `fact-checker`.]

## Sources

[Deduplicated source list: ID, title, publisher, URL, date or version.]

## Series addendum

When several decks are reviewed together, add this after the per-deck sections:

## Across the series

- **Overlap:** Topics taught more than once, and whether the repetition is useful.
- **Gaps:** Topics none of the decks cover that the series scope implies.
- **Order:** Prerequisite taught after it is used, or a later deck that assumes material the earlier decks never introduce.
