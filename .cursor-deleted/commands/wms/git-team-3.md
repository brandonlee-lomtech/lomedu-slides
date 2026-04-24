# Git Team-3: Branch + Commit (Single Author, No Co-author)

## Overview

Create a `feat/` branch from the current work, then commit changes using team author emails only. No Co-authored-by, no Cursor exposure. **Never read, display, or use the current machine's Git identity** (`git config user.name` / `user.email`)—only use the author strings defined below.

## Author Mapping

- **Frontend (FE) and Backend (BE) changes** → `nyisaymin <nyisaymin@lomtech.net>`

Use only this author. Do not add any `Co-authored-by` trailer. **Do not run or rely on `git config user.name` or `git config user.email`**—the current machine's Git login must never be read, logged, or used for the commit author.

## Steps

1. **Determine scope of changes**
   - Run `git status` and inspect `git diff` (and `git diff --cached` if anything is staged).
   - Classify changes as FE, BE, or both:
     - **FE:** under frontend app dirs (e.g. `onei-wms-fe/`, `frontend/`, `web/`, or any path that clearly indicates UI/frontend).
     - **BE:** under backend app dirs (e.g. `onei-wms-be/`, `backend/`, `api/`, or server-side code).
   - If a file could be shared (e.g. root config, monorepo tooling), assign to FE or BE based on which app the change primarily supports, or default to BE.

2. **Create branch name (feat/)**
   - Propose a short branch name that describes the work (e.g. `feat/kafka-consumer`, `feat/login-validation`).
   - Use only: lowercase letters, numbers, hyphens. Must start with `feat/`.
   - Create and checkout: `git checkout -b feat/<branch-suffix>`.

3. **Stage changes**
   - `git add -A` (or stage only the paths you will commit in step 4 if splitting FE/BE).

4. **Commit with correct author only (no Co-author)**
   - **All changes (FE, BE, or both):**  
     `git commit -m "<message>" --author="nyisaymin <nyisaymin@lomtech.net>"`
   - Commit message rules (same as project standard):
     - Single line, imperative, ≤72 chars.
     - Example: `feat(kafka): add consumer runner and handler registry`
     - No commit body, no `Co-authored-by`, no `Signed-off-by`, no other trailers.

## Rules

- **No Co-authored-by:** Never add Co-authored-by or any trailer that exposes tooling (e.g. Cursor).
- **Author only:** Use `--author="nyisaymin <nyisaymin@lomtech.net>"` for every commit so the commit shows only this team email.
- **Never expose local Git identity:** Do not run `git config --get user.email` or `user.name`; do not use, display, or log the current machine's Git login. Use only the `--author=` string from the Author Mapping above.
- **Branch:** Must start with `feat/`; name must reflect the change set.
- **Message:** One line, imperative, no period at the end.

## Summary

1. Classify changes (FE / BE / both).
2. Create and checkout `feat/<meaningful-name>`.
3. Stage and commit using only `--author="nyisaymin <nyisaymin@lomtech.net>"` for all changes.
4. No Co-authored-by, no Cursor attribution. Never read or use this machine's Git user/email—only the team author listed in this file.
