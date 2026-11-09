## Goal

Add slides to the spec-driven development presentation that explain what an AGENTS.md file is, what belongs in it, and how nested files and listed commands behave, using the open AGENTS.md format, immediately before the existing code-review activity.

## Requirements

- Update only `src/spec-driven-development/index.md`.
- Insert the new slides in Context engineering, immediately before the "Code review" slide. Leave that activity slide in place.
- Leave the Rules vs skills slides and the Architectural documentation slide in place. Do not compare AGENTS.md with Cursor rules or skills.
- Base the teaching content on the open format at https://agents.md/. Do not teach or link the ChatGPT/Codex AGENTS.md docs.
- State that many coding agents, including Cursor, read AGENTS.md. Do not list the vendor catalog from agents.md.
- Use this slide order:
  - AGENTS.md is a README for agents: instructions and context for coding agents, kept separate from the human README. Many coding agents, including Cursor, read it.
  - There is no required schema. Any Markdown headings are valid. It should record code style and project conventions.
  - One short generic example (not this course’s app) in a fenced Markdown block, showing setup or test commands, code style, and testing instructions.
  - Nested files and precedence: a directory may contain its own AGENTS.md; the file closest to the file being edited wins; an explicit user chat prompt overrides AGENTS.md.
  - Listed commands: if AGENTS.md lists commands such as tests, the agent may run them.
  - Living documentation: when an SDD cycle decides a standard, record it in AGENTS.md.
  - Sources, linking only:
    - https://agents.md/
    - https://github.com/agentsmd/agents.md
- Do not add a security slide or a checklist of every section the agents.md site calls popular.
- Keep the existing Marp frontmatter and the single fragment style block. Use the deck’s current patterns: headings, bullets, a smaller scoped font size on dense slides, and fenced code.

## Acceptance Criteria

- The new slides sit immediately before "Code review", and that slide still asks students to review AGENTS.md in the source repo.
- From the new slides, a student can see what AGENTS.md is, that any Markdown headings are valid, that code style and project conventions belong in it, and that it should be updated with standards from an SDD cycle.
- One slide shows a generic AGENTS.md example containing commands, code style, and testing instructions.
- One slide teaches that a nearer AGENTS.md wins and that an explicit user prompt overrides the file.
- One slide teaches that commands listed in AGENTS.md are commands the agent may run.
- One slide links https://agents.md/ and https://github.com/agentsmd/agents.md, and does not link the ChatGPT/Codex docs.
- No slide describes Codex discovery (`~/.codex`, `AGENTS.override.md`, byte limits, fallback filenames), security boundaries, or a comparison between AGENTS.md and rules or skills.
- The Rules vs skills slides and the Architectural documentation slide are still present.

## Out of Scope

- Codex-only configuration and discovery, including a global Codex home, `AGENTS.override.md`, byte limits, fallback filenames, and Codex code-review rules.
- Linking or teaching from https://learn.chatgpt.com/docs/agent-configuration/agents-md.
- Comparing AGENTS.md to Cursor rules or skills.
- Security guidance and other “do not” boundaries.
