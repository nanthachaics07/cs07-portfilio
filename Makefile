.PHONY: help install ci dev build preview typecheck test test-watch check clean

NPM := npm

help:
	@echo "Portfolio (React + Vite) — available targets:"
	@echo "  make install      Install dependencies (npm install)"
	@echo "  make ci           Clean install from lockfile (npm ci)"
	@echo "  make dev          Start dev server (http://localhost:5173/cs07-portfilio/)"
	@echo "  make build        Typecheck + production build → dist/"
	@echo "  make preview      Serve production build locally"
	@echo "  make typecheck    Run TypeScript (tsc -b)"
	@echo "  make test         Run unit tests once (vitest run)"
	@echo "  make test-watch   Run tests in watch mode"
	@echo "  make check        typecheck + test + build (CI-style)"
	@echo "  make clean        Remove dist/"
	@echo ""
	@echo "macOS: if make prints the Xcode license, use instead:"
	@echo "  npm run check     (recommended)"
	@echo "  ./scripts/check.sh"
	@echo "  sudo xcodebuild -license   (one-time, then make works again)"

install:
	$(NPM) install

ci:
	$(NPM) ci

dev:
	$(NPM) run dev

build:
	$(NPM) run build

preview:
	$(NPM) run preview

typecheck:
	$(NPM) run typecheck

test:
	$(NPM) run test

test-watch:
	$(NPM) run test:watch

check: typecheck test build

clean:
	rm -rf dist
