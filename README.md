# quiz-generator

Төсөл одоо 2 хэсэгтэй:

- `frontend/`: Next.js UI
- `backend/`: OpenAI quiz generation API + fallback generator

## Setup

Frontend env:

```bash
cp frontend/.env.example frontend/.env.local
```

Backend env:

```bash
cp backend/.env.example backend/.env
```

`backend/.env` дотор:

```env
OPENAI_API_KEY=sk-your-openai-key
PORT=4000
```

## Run

Frontend:

```bash
npm run dev:frontend
```

Backend:

```bash
npm run dev:backend
```

Frontend нь default-аар `http://localhost:4000` backend руу холбогдоно. Хэрэв өөр URL хэрэгтэй бол `frontend/.env.local` дээр `NEXT_PUBLIC_API_BASE_URL`-г солино.

## Scripts

```bash
npm run dev:frontend
npm run dev:backend
npm run build
npm run start
npm run lint
```
# quiz-app
# quiz-app
# quiz-app
# quiz-app
# quiz-app
# quiz-app
# quiz-app
