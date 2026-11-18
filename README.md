# Pocket CEO

An AI co-founder workspace for solo founders. You describe your startup once, then chat with three AI executives, each focused on one part of the business. Every reply also updates that executive's dashboard with recommendations, risks and next actions.

| Persona | Role | Focus |
|---|---|---|
| Otis | CSO | Strategy |
| Ava | CMO | Marketing |
| Blaze | CFO | Finance |

## How it works

1. You create a startup profile (name, problem, target customer, industry), which is saved in MongoDB.
2. You send a message to one of the executives.
3. The backend loads your startup profile and that executive's system prompt, plus the last 10 messages of your conversation.
4. The model (Llama 3.3 70B through the Groq API) is asked to return structured JSON.
5. The backend splits the JSON into a chat reply and dashboard insights, and stores the message, the reply and the insights in MongoDB.
6. The frontend shows the reply and refreshes the executive's dashboard.

### Prompt design

Each executive has its own system prompt (`server/src/prompts/`). The prompts:

- feed in the startup's profile, so advice is specific to that company
- keep each executive inside its own area
- separate assumptions from facts
- ask the user to clarify vague input instead of guessing
- require a fixed JSON shape, so replies can drive the dashboards

## Tech stack

| Layer | Tech |
|---|---|
| Frontend | React 19, TypeScript, Vite, Tailwind CSS, React Router, Recharts |
| Backend | Node.js, Express 5, Mongoose, Helmet |
| AI | Groq API, `llama-3.3-70b-versatile` |
| Database | MongoDB |

## API

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/startups` | Create a startup profile |
| GET | `/api/startups/:id` | Get a startup profile |
| PATCH | `/api/startups/:id` | Update a startup profile |
| POST | `/api/chat` | Send a message: `{ startupId, agentRole, message }`, where `agentRole` is `cso`, `cmo` or `cfo` |
| GET | `/api/conversations/:startupId/:agentRole` | Get the conversation with one executive |
| GET | `/api/dashboard/:startupId/:agentRole` | Get one executive's dashboard insights |

## Getting started

You need Node.js, a MongoDB database and a Groq API key.

```bash
git clone https://github.com/anushka1307/PocketCEO.git
cd PocketCEO

# Backend
cd server
npm install
```

Create `server/.env`:

```
MONGO_URI=your-mongodb-connection-string
GROQ_API_KEY=your-groq-api-key
PORT=5001
CLIENT_URL=http://localhost:5173
```

`GROQ_MODEL` is optional and defaults to `llama-3.3-70b-versatile`. The frontend calls the API at `http://localhost:5001` (`client/src/api/http.ts`), so set `PORT=5001`.

```bash
npm run dev        # starts the API on port 5001

# Frontend, in a second terminal
cd client
npm install
npm run dev        # opens on http://localhost:5173
```

Create a startup with `POST /api/startups`, then put its ID in `STARTUP_ID` at the top of the three dashboard components (`client/src/components/*Dashboard.tsx`).

## Current status

- Working: startup profiles, chat with all three executives, conversation history, structured insights and dashboards.
- Login is a placeholder screen for the demo. There is no real authentication yet.
- The startup ID is set in the frontend code instead of coming from the logged-in user.

## Project structure

```
client/           React + TypeScript frontend
  src/api/        API calls
  src/components/ Pages, persona selector and the three dashboards
  src/hooks/      useAgentDashboard
server/           Express backend
  src/prompts/    System prompts for the CSO, CMO and CFO
  src/services/   Groq calls and the chat workflow
  src/models/     Startup, Conversation, Message, AgentInsight
  src/routes/     API routes
```
