# 🚀 Pocket CEO

> Your AI-powered startup co-founder for Gen Z solopreneurs.

![Made with React](https://img.shields.io/badge/Frontend-React-blue?style=flat-square)
![Node.js](https://img.shields.io/badge/Backend-Node.js-green?style=flat-square)
![OpenAI](https://img.shields.io/badge/AI-OpenAI-lightgrey?style=flat-square)
![Firebase](https://img.shields.io/badge/Auth-Firebase-orange?style=flat-square)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

---

## ✨ Overview

**Pocket CEO** is your virtual co-founder—an AI companion that helps Gen Z solopreneurs plan, validate, and execute their startup ideas.

Built with a blend of:
- 💬 GPT-powered chat (like a co-founder who never sleeps)
- 🧭 Smart task planner
- 🧍 Customizable AI personas
- 📊 Progress tracking (with dopamine-inducing charts)

---

## 🧠 Features

- 🧑‍💻 **AI Chat:** Talk to your co-founder, get validation, and plan your week.
- 🎭 **Persona Selector:** Choose the vibe of your co-founder (Ava, Blaze, Otis...)
- 📆 **Smart Planner:** AI-generated task lists based on your startup goals.
- 🔐 **User Auth:** Secure login via Firebase Authentication.
- ☁️ **Cloud-Based:** User data stored with Firestore for persistence.

---

## 🛠 Tech Stack

| Layer        | Tech                        |
|--------------|-----------------------------|
| Frontend     | React, Tailwind CSS         |
| Backend      | Node.js, Express            |
| AI           | OpenAI GPT-4 API            |
| Auth         | Firebase Authentication     |
| DB           | Firebase Firestore / MongoDB (planned) |
| Hosting      | Vercel (frontend), Render (backend)  |

---

## 🚧 Current Status

- ✅ Folder structure initialized
- ✅ GitHub setup + Gitignore best practices
- ⏳ GPT integration in progress
- ⏳ Firebase Auth setup
- ⏳ MVP UI components: Persona Picker, Chat Box, Task Board

---

## 🧪 Getting Started

```bash
# Clone the repo
git clone https://github.com/anushka1307/PocketCEO.git

# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install

# Create your .env files
# /client/.env
REACT_APP_OPENAI_KEY=your-key-here

# /server/.env
OPENAI_API_KEY=your-key-here

```

# Pocket CEO Backend README

## Overview

This is the backend for Pocket CEO, an AI-powered startup co-founder platform.

The current backend is focused on the MVP foundation:
- saving a startup profile
- connecting to MongoDB
- chatting with the first AI role: CSO
- storing conversations
- storing dashboard-style AI insights

Right now, the backend supports:
- Startup profile creation and updates
- CSO chat through Groq
- Structured AI responses
- Conversation storage
- Dashboard insight storage

This is the first working version of the AI founding team backend.

---

## What We Have Built So Far

### Completed backend features
- Express server setup
- MongoDB connection with Mongoose
- Environment variable setup with dotenv
- Startup profile API
- CSO AI chat endpoint
- Groq integration
- Conversation model and message storage
- Agent insight storage for dashboard data

### Current MVP backend flow
1. User creates a startup profile
2. Startup data is saved in MongoDB
3. User sends a message to the CSO
4. Backend loads startup context
5. Backend sends the prompt + user message to Groq
6. Groq returns structured JSON
7. Backend stores:
   - user message
   - assistant response
   - dashboard insight
8. Backend sends the result back to the frontend

---

## Current Folder Structure

```text
server/
  src/
    config/
      db.js
    controllers/
      startup.controller.js
      chat.controller.js
    models/
      Startup.js
      Conversation.js
      Message.js
      AgentInsight.js
    prompts/
      cso.prompt.js
      cmo.prompt.js
      cfo.prompt.js
    routes/
      startup.routes.js
      chat.routes.js
    services/
      groq.service.js
      agent.service.js
    utils/
      parseJson.js
    app.js
    server.js
  .env
  .gitignore
  package.json
  README.md