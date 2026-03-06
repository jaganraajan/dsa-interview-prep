# Deploy Guide

## Recommended: Render (supports Python runtime for playground)

This app executes user Python code in `/api/run-python` using `python3`. That requires a host where Python is available at runtime.

1. Push this repo to GitHub.
2. In Render, create a **New Web Service** from this repo.
3. Render will auto-detect `render.yaml` and use the `Dockerfile`.
4. Deploy.
5. Open your Render URL.

## Alternative: Railway

1. Push this repo to GitHub.
2. Create a new Railway project from the repo.
3. Railway will detect the `Dockerfile`.
4. Deploy and open the generated domain.

## Vercel note

Vercel is good for Next.js pages, but this project's Python executor (`spawn('python3', ...)`) is not a good fit for standard Vercel serverless runtime.

If you must use Vercel:
1. Deploy only the frontend to Vercel.
2. Move `/api/run-python` to a separate backend (Render/Railway/Fly.io) and call that endpoint from the playground page.
