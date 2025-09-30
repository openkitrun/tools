# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a monorepo for OpenKit tools, managed with pnpm workspaces and Turborepo. The primary package is `@openkit/language-codes`, a TypeScript utility library for language code management.

## Requirements

- **Node.js**: >=22
- **pnpm**: >=10 (use `corepack enable` to activate)

## Repository Structure

```
packages/
├── @tools-language-codes/   # Main package: language codes utility
├── @config/                  # Shared Biome configuration
└── tsconfig/                 # Shared TypeScript configurations
```

## Common Commands

All commands should be run from the repository root:

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build

# Generate code from data sources (for language-codes package)
pnpm language:generate    # Runs generate + lint:fix + format in one command

# Lint (Biome)
pnpm lint
pnpm lint:fix

# Format (Biome)
pnpm format

# Version management (Changesets)
pnpm changeset            # Create a changeset
pnpm version              # Bump versions
pnpm release              # Publish packages

# Canary releases
pnpm canary:enter         # Enter canary pre-release mode
pnpm canary:exit          # Exit canary pre-release mode

# Changelog management
pnpm changelog:gen        # Generate changelog
pnpm changelog:write      # Write changelog
pnpm changelog:commit     # Commit and push changelog
```

### Package-specific Commands

For `@tools-language-codes` (run from `packages/@tools-language-codes/`):

```bash
# Generate TypeScript code from data
pnpm generate

# Run tests (Vitest)
pnpm test

# Run tests with coverage
pnpm test:coverage

# Build package
pnpm build

# Lint and format
pnpm lint
pnpm lint:fix
pnpm format

# Clean generated files
pnpm clean
```

## Architecture

### Code Generation System (@tools-language-codes)

The language-codes package uses a **code generation architecture**:

1. **Source of Truth**: `_data/language-codes.json` contains all language code definitions
2. **Generation Scripts** (`scripts/`):
   - `generate.ts` - Main entry point that orchestrates generation
   - `templates.ts` - Defines output templates for TypeScript files
   - `transforms.ts` - Transforms JSON data into TypeScript code structures
3. **Generated Files** (in `src/`):
   - `src/types.ts` - TypeScript type definitions (enums, types, interfaces)
   - `src/language-codes.ts` - Runtime language code object with typed data
4. **Build Output**: Built with `zshy` to dual format (CJS + ESM) with TypeScript declarations in `dist/` directory

**Workflow**: When modifying language codes, edit `_data/language-codes.json` → run `pnpm language:generate` (or `pnpm generate` from package dir)

### Build Configuration

- **zshy**: Builds library with TypeScript declarations
- **Output formats**: Both CommonJS (`.cjs`) and ESM (`.mjs`)
- **Build target**: `esnext`, no minification
- **Output location**: `dist/` directory

### Tooling

- **Biome**: All linting and formatting (replaces Prettier and ESLint)
  - Configuration in `@openkit/config` package
  - Root and package-level `biome.jsonc` files
  - Strict rules for TypeScript, React, and Next.js
- **Vitest**: Test runner for unit tests
  - Tests run with `pnpm test`
  - Coverage available with `pnpm test:coverage`
- **Turborepo**: Task orchestration and caching
  - Configured in `turbo.json`
  - Manages build dependencies between packages
- **Changesets**: Version and release management
  - Create changesets with `pnpm changeset`
  - Supports canary releases via `pnpm canary:enter` and `pnpm canary:exit`
- **Husky**: Git hooks (configured via `prepare` script)

### CI/CD

GitHub Actions workflow (`.github/workflows/release.yml`) on push to `main`:
1. Installs dependencies
2. Runs code generation
3. Runs tests
4. Runs build
5. Runs linting and formatting checks
6. Publishes packages via Changesets

**Note**: The CI workflow may reference some commands not present in current package.json scripts (legacy configuration).

## Package Architecture

### @openkit/language-codes

A TypeScript utility providing strongly-typed language codes with:
- Culture codes (e.g., `es-MX`)
- Language codes (IANA format)
- Display names
- Suggested folder names for locale storage

**Usage Pattern**:
```typescript
import languageCodes from '@openkit/language-codes';

languageCodes.ES_MX.culture      // 'es-MX'
languageCodes.ES_MX.displayName  // 'Spanish (Mexico)'
languageCodes.ES_MX.folderName   // 'es_mx'
```

### @openkit/config

Shared Biome configuration extending to all packages. Import via:
```json
{
  "extends": ["@openkit/config/biome"]
}
```

## Development Notes

- **Generated files**: Never manually edit `src/types.ts` or `src/language-codes.ts` in the language-codes package - they are generated from `_data/language-codes.json`
- **Adding new languages**: Add entries to `_data/language-codes.json` and run `pnpm language:generate` from root (or `pnpm generate` from package directory)
- **Build order**: Turborepo handles package build dependencies automatically via `dependsOn: ["^build"]`
- **Testing**: Tests are located in `packages/@tools-language-codes/src/` with `.test.ts` suffix and use Vitest

## Important Instructions

Do what has been asked; nothing more, nothing less.
NEVER create files unless they're absolutely necessary for achieving your goal.
ALWAYS prefer editing an existing file to creating a new one.
NEVER proactively create documentation files (*.md) or README files. Only create documentation files if explicitly requested by the User.
