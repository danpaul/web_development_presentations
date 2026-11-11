# Source quality and evidence rules

## Source selection by claim type

| Claim type | Preferred evidence | Cautions |
|---|---|---|
| Programming language, framework, API, CLI | Official docs, release notes, repository, specification | Pin version; docs may describe latest release rather than the version shown in the deck |
| Security behavior or recommendation | Vendor security advisory, CVE/NVD, CERT, OWASP, official security docs, peer-reviewed research | Verify affected versions and dates; do not generalize one vulnerability to an entire product |
| Standards and protocols | Standards body, official specification, RFC, standards registry | Identify version/status; distinguish draft, proposed, and final standards |
| Law or regulation | Official legislation, regulator, court or government guidance | Identify jurisdiction, effective date, and whether text is binding or interpretive |
| Research or scientific claim | Original peer-reviewed paper, systematic review, recognized research body, underlying dataset | Check methods, sample, limitations, replication, and whether the slide overstates causality |
| Industry demand or adoption | Transparent surveys, labor-market data, government statistics, reputable industry reports | Record sample, geography, date, definitions, sponsor, and methodology |
| Pricing, licensing, free tier | Current official pricing page, license text, terms, release notes | Pricing and terms change; separate open source from source-available and free-of-charge |
| Product comparison | Comparable primary specifications plus independent testing where available | Align test conditions, versions, workload, and date; vendor claims alone are insufficient |
| Historical event | Primary records, contemporary reporting, scholarly history | Avoid using current summaries as sole evidence for disputed history |
| Quote or attribution | Original publication, recording, transcript, or authoritative archive | Check exact wording, context, speaker, and date |
| Numerical claim | Original dataset/report and methodology | Check units, denominator, time period, rounding, and whether values are comparable |

## Practical source hierarchy

Use judgement; this is a preference order, not an automatic truth ranking.

1. Primary evidence that directly establishes the claim.
2. Authoritative independent sources with transparent methods.
3. Reputable secondary reporting or expert analysis.
4. Community posts and informal sources, used mainly to identify issues or illustrate experience.

A primary source can still be incomplete, biased, outdated, or irrelevant. For example, a vendor is authoritative about its published API contract, but not necessarily about whether its product is objectively “the best”.

## Minimum evidence record

For each source, capture:
- Source ID (`S001`, `S002`, …)
- Exact URL
- Page/document title
- Publisher or author
- Publication/update date, if available
- Access date
- Relevant section, page, or concise quotation
- Which claim(s) it supports or contradicts
- Why it is suitable evidence
- Known limitations

Keep quotations short and necessary. Prefer paraphrase plus a precise section link when possible.

## Conflicting or missing evidence

- Search for the precise disagreement, not just the original claim.
- Check version, date, jurisdiction, terminology, and scope before treating sources as contradictory.
- Distinguish “no evidence found” from “evidence of absence”.
- Distinguish “not documented” from “does not exist”.
- If sources disagree credibly, state what each source establishes and what remains unresolved.
- If the primary source is inaccessible, mark that limitation; do not pretend a snippet or secondary paraphrase is direct inspection.
- A dead URL should not be counted as current verification. Look for an official replacement or archived version where appropriate and disclose that choice.
