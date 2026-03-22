# Vue To-Do List

A simple and elegant To-Do List application built with Vue 3 and TypeScript.

## Features

- ✅ Add new tasks
- ✅ Mark tasks as completed
- ✅ Delete tasks
- ✅ Clear all completed tasks
- ✅ Track remaining tasks
- ✅ Beautiful gradient UI

## Tech Stack

- Vue 3 (Composition API with `<script setup>`)
- TypeScript
- Vite
- CSS3
- Sentry (Error monitoring and session replay)

## Environment Setup

This project uses environment variables for configuration. Create a `.env` file in the root directory:

```bash
# Copy the example file
cp .env.example .env

# Edit .env and add your Sentry DSN
VITE_SENTRY_DSN=your-sentry-dsn-here
```

**Note:** The `.env` file is git-ignored to keep sensitive data secure.

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

This project is configured to deploy to GitHub Pages automatically via GitHub Actions.

### Setup GitHub Pages

1. Push this code to a GitHub repository
2. Go to repository Settings → Pages
3. Under "Build and deployment", select "GitHub Actions" as the source
4. **Add environment variables to GitHub Actions**:
   - Go to Settings → Secrets and variables → Actions
   - Add a new repository secret: `VITE_SENTRY_DSN` with your Sentry DSN value
5. Push to the `main` branch to trigger deployment

The app will be available at: `https://<username>.github.io/sentry-test/`

## License

MIT
