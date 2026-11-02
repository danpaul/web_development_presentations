# Verification report format

Use this schema for each claim. Keep the original wording exact where possible.

## Finding template

### [F001] Slide [number] — [short descriptive title]

- **Claim ID:** C001
- **Claim as shown:** “Exact markdown wording, or a faithful description of a factual image.”
- **Location:** Heading, bullet, paragraph, table cell, code fence, image alt, speaker note, or link. Include the slide number.
- **Verdict:** Verified | Partially supported | Contradicted | Outdated | Unverified | Opinion / not fact-checkable
- **Confidence:** High | Medium | Low
- **Severity:** Critical | High | Medium | Low
- **Why it matters:** Brief explanation of the accuracy issue and its likely effect on the audience.
- **Evidence:** Summarize what the source establishes and what it does not establish.
- **Sources:**
  - [S001] Title — Publisher, date/version. URL. Relevant section or short passage. Accessed YYYY-MM-DD.
- **Recommended action:** Keep | Qualify | Correct | Remove | Attribute | Expert review
- **Suggested replacement:** Drop-in markdown for the same construct, or “No safe replacement can be recommended from the available evidence.”
- **Limitations:** Any material ambiguity, access issue, conflict, or scope constraint.

## Severity guide

- **Critical:** Could cause substantial harm or lead to a dangerous, legally consequential, or materially damaging decision if relied upon.
- **High:** Central claim is materially wrong or misleading; likely to teach a significant misconception or affect an important decision.
- **Medium:** Meaningful qualification, context, or correction is needed, but the core lesson remains usable.
- **Low:** Minor imprecision, missing attribution, wording issue, or low-impact outdated detail.

Severity is about impact, not confidence. A low-confidence claim can still be high priority for further review.

## Executive summary counts

Compute totals directly from the ledger. Include:
- Total slides and slides inspected
- Total factual claims identified
- Number of claims with a final disposition
- Count by each verdict
- Count by severity
- Number of sources opened and inspected
- Number of claims with unresolved evidence or access issues

A claim can have one primary verdict only. Do not double-count it across verdict categories. State clearly if the deck was only partially inspected.

## Suggested top-level report

# Presentation Fact-Check Report

- **Deck:** [path to the Marp markdown file]
- **Review date:** YYYY-MM-DD
- **Coverage:** [slides inspected] / [total slides]
- **Research method:** [brief description of actual tools and source types]
- **Limitations:** [if any]

## Executive summary
[Main findings, highest-priority issues, counts.]

## Findings
[Ordered by severity and slide number, using the finding template.]

## Coverage and unresolved items
[Skipped slides/elements, unverified claims, follow-up needs.]

## Sources
[Deduplicated source list, IDs, titles, publishers, URLs, dates.]

## Claim ledger (optional appendix)
| Claim ID | Slide | Claim (short) | Verdict | Confidence | Finding ID |
|---|---:|---|---|---|---|
