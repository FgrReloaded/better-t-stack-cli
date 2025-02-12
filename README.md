# Create Better-T-Stack

A CLI tool to scaffold Better-T Stack projects with best practices and modern tooling.

## Features

- 🚀 Quick project setup with one command
- 📦 TypeScript/JavaScript support
- 🗄️ Database options (libSQL/PostgreSQL)
- 🔒 Optional authentication setup
- 🐳 Docker configuration
- 🔄 GitHub Actions workflows
- 🎯 SEO optimization

## Quick Start

```bash
# Using npm
npx create-better-t my-app

# Using bun
bunx create-better-t my-app
```

Just follow the interactive prompts!

## Options

```bash
Usage: create-better-t [project-directory] [options]

Options:
  --typescript     Use TypeScript (default)
  --javascript    Use JavaScript
  --git           Initialize git repository (default)
  --no-git        Skip git initialization
  -h, --help      Display help
```

## Project Structure

The generated project follows the Better-T Stack architecture:
- Built with Bun
- Type-safe database with DrizzleORM
- Simple authentication system
- Modern development practices

## Development

To contribute to this CLI:

```bash
# Clone the repository
git clone https://github.com/your-username/better-t-stack-cli.git

# Install dependencies
bun install

# Start development
bun dev

# Build
bun run build
```

## License

MIT

## Credits



Developed by Nitish Singh & Aman Varshney – Built on top of the Better-T Stack by [Aman Varshney](https://github.com/AmanVarshney01/Better-T-Stack)
