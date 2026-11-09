# Plan: AGENTS.md slides

[Spec](./spec.md)

Insert seven teaching slides into `src/spec-driven-development/index.md`, immediately before `## Code review`, covering what AGENTS.md is, a short generic example, nested precedence, listed commands, living documentation, and the two open-format sources.

## Technical context

- Marp deck: `src/spec-driven-development/index.md`. Frontmatter stays `marp: true`, `theme: default`, `paginate: true`.
- The only fragment style block is the unscoped `<style>` near the top (`[data-marpit-fragment]` hidden unless current). Leave it as the single style block of that kind.
- Content slides use `##` headings, `-` bullets, and `---` separators. Dense fenced Markdown uses a scoped block, as on `## Example spec`:

```html
<style scoped>
  section {
    font-size: 18px;
  }
</style>
```

- Context engineering runs from `# Context engineering` through the rules-vs-skills image, then `## Code review`. Insert after `![bg contain](./assets/rules_vs_skills.png)` and before `## Code review`.
- Leave these slides unchanged: `## Always-on vs on-demand`, `rules_vs_skills.png`, `## Code review` (it already tells students to review AGENTS.md in the source repo), `## Architectural documentation`.

## Target structure

- Change: `src/spec-driven-development/index.md` (insert only).
- Add or delete: none. No new assets.

## Slides

Seven slides, in this order. No fragments, images, vendor names, security notes, or comparison with Cursor rules or skills.

### 1. `## A README for agents`

- AGENTS.md is instructions and context for coding agents.
- Keep it separate from the human README.
- Many coding agents, including Cursor, read it.

### 2. `## No required schema`

- Any Markdown headings are valid.
- Record code style and project conventions.
- Do not list the agents.md “popular sections” (no project overview, security, commit messages, or similar checklist).

### 3. `## Example AGENTS.md`

Scoped `font-size: 18px`, then one fenced `markdown` block. Generic library, not this course’s app or repo:

````markdown
# AGENTS.md

## Setup

- Install dependencies: `npm install`
- Run tests: `npm test`

## Code style

- TypeScript with strict mode
- Prefer named exports

## Testing

- Add or update a test when behavior changes
- Run `npm test` and fix failures before finishing
````

### 4. `## Nested files`

- A directory may contain its own AGENTS.md.
- The file closest to the file being edited wins.
- An explicit user chat prompt overrides AGENTS.md.

### 5. `## Listed commands`

- If AGENTS.md lists commands, such as tests, the agent may run them.

### 6. `## Living documentation`

- When an SDD cycle decides a standard, record it in AGENTS.md.

### 7. `## Sources`

Body is only these links:

- [agents.md](https://agents.md/)
- [agentsmd/agents.md](https://github.com/agentsmd/agents.md)

## Implementation order

1. Insert the seven slides, separated by `---`, immediately before `## Code review`.
2. Leave frontmatter, the fragment style block, and every other slide unchanged.
3. Read the inserted region and confirm the acceptance checks in `task.md`.

## Out of scope

- Editing any file other than `src/spec-driven-development/index.md`.
- Changing `## Code review`, the rules-vs-skills slides, or `## Architectural documentation`.
- Generating HTML or copying assets.
- Codex discovery (`~/.codex`, `AGENTS.override.md`, byte limits, fallback filenames) and https://learn.chatgpt.com/docs/agent-configuration/agents-md.
- Comparing AGENTS.md with Cursor rules or skills.
- A security slide, other “do not” boundaries, or the agents.md vendor catalog.
