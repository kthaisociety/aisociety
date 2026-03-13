# Contributing to AI Society

Thank you for your interest in contributing! This project is a unified platform for AI societies across Swedish universities, and we welcome contributions of all kinds.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Development Workflow](#development-workflow)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)

## Code of Conduct

Please be respectful and constructive in all interactions. We are committed to providing a welcoming environment for everyone.

## Getting Started

1. **Fork** the repository on GitHub.
2. **Clone** your fork locally:
   ```bash
   git clone https://github.com/<your-username>/aisociety.git
   cd aisociety
   ```
3. **Install dependencies:**
   ```bash
   bun install
   ```
4. **Start the development server:**
   ```bash
   bun dev
   ```

## How to Contribute

- **Bug reports** — Open an issue describing the bug, steps to reproduce, and expected behavior.
- **Feature requests** — Open an issue with a clear description of the feature and why it would be valuable.
- **Code contributions** — Follow the development workflow below.
- **Documentation** — Improvements to the README or other docs are always appreciated.

## Development Workflow

1. Create a branch from `main` for your change:
   ```bash
   git checkout -b feature/my-feature
   # or
   git checkout -b fix/my-bug-fix
   ```
2. Make your changes and ensure the project builds without errors:
   ```bash
   bun run build
   ```
3. Run the linter and fix any issues:
   ```bash
   bun run lint
   ```
4. Commit your changes (see [Commit Guidelines](#commit-guidelines)).
5. Push your branch and open a Pull Request.

## Commit Guidelines

Use clear, concise commit messages in the imperative mood:

- `Add event listing component for KTH AI Society`
- `Fix navigation bar responsiveness on mobile`
- `Update README with Docker instructions`

Avoid vague messages like `fix stuff` or `WIP`.

## Pull Request Process

1. Ensure your branch is up to date with `main` before opening a PR.
2. Provide a short description of what your PR changes and why.
3. Reference any related issues (e.g. `Closes #42`).
4. A maintainer will review your PR. Please be responsive to feedback.
5. Once approved, your PR will be merged.

## License

By contributing, you agree that your contributions will be licensed under the [MIT License](LICENSE).
