---
name: strict-implementation-planner
description: Core workflow skill for every new implementation in the project. It forces the agent to consult the user on every detail before writing code, show how and why it will be implemented, suggest improvements, ensure accessibility, and maintain atomic components. Trigger this automatically for any new feature, component, or architectural change request.
---

# Strict Implementation Planner

This skill establishes a mandatory, strict workflow for all new implementations in this project. **You must follow these instructions exactly as written before making any code changes.**

## 1. The "No Assumptions" Rule
- **Never assume any part of the implementation.** If a requirement, design detail, data structure, or specific behavior is not explicitly stated by the user, you **must** ask for clarification.
- Ask for more context if it can lead to a better quality outcome.
- **Suggest Improvements:** Actively propose enhancements to the user's original request based on modern web development standards.

## 2. The Implementation Proposal (How & Why)
Before executing any code modification, you must present a detailed implementation plan that includes:
- **HOW you will implement it:** Break down the technical approach step-by-step. Detail the file structure, the components you will create or modify, and the state management or logic involved.
- **WHY you are implementing it this way:** Justify your technical decisions. Explain the benefits of your chosen approach regarding performance, maintainability, or alignment with project architecture.

## 3. Core Architectural Requirements
Every implementation plan must explicitly address the following criteria:
- **Accessibility (A11y):** You must detail how accessibility will be handled in every component (e.g., ARIA attributes, keyboard navigation, contrast, semantic HTML). Consult the `accessibility` skill.
- **Atomic Components:** Ensure all UI elements are built as small, atomic, highly reusable components following composition over configuration. Monolithic components are strictly prohibited. Consult the `vercel-composition-patterns` skill.

## 4. Mandatory Skill Integration
You must actively seek out and utilize other relevant skills in the repository for best practices. Always consider invoking:
- `astro` for Astro-specific patterns.
- `tailwind-css-patterns` for styling.
- `typescript-advanced-types` for robust typings.
- `frontend-design` for UI/UX quality.
- `vercel-react-best-practices` if using React.

## Execution Flow
1. Receive user request.
2. Analyze and ask clarifying questions + suggest improvements.
3. Present the "How and Why" proposal including A11y and Atomic Component strategies.
4. **STOP and wait** for the user to explicitly approve the plan.
5. Only after approval, begin the implementation using the established best practices.
