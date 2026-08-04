# YuktiHire

**Gen AI-Powered Interview Preparation Platform**

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)

> YuktiHire analyzes a candidate's resume and a job description to generate interview reports, targeted questions, skill gap insights, and ATS-friendly resume support.

## Project Overview

This repository contains two separate applications:

- `Backend/` — Node.js + Express API server with MongoDB, authentication, resume parsing, and AI report generation.
- `Frontend/` — Vite-powered React application with authentication, interview flow, report viewing, and PDF resume download.

## Features

- JWT authentication with token blacklisting
- Resume upload and parsing
- AI-powered interview report generation
- Technical and behavioral question suggestions
- Personalized preparation roadmap
- Resume PDF export
- Recent report history and report detail views

## Tech Stack

- Backend: Node.js, Express, MongoDB, Mongoose, bcryptjs, jsonwebtoken, dotenv, multer, pdf-parse, Puppeteer, Google GenAI
- Frontend: React, Vite, React Router, Axios, SCSS, @vitejs/plugin-react

## Prerequisites

- Node.js 18+
- MongoDB Atlas or local MongoDB instance

## Installation

### Backend

```bash
cd Backend
npm install
```

### Frontend

```bash
cd Frontend
npm install
```

## Environment Variables

Create a `.env` file inside `Backend/` with:

```dotenv
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=7d
GOOGLE_GENAI_API_KEY=your_google_genai_api_key
FRONTEND_URL=http://localhost:5173
```

## Running the Project

Open two terminals.

### Start backend

```bash
cd Backend
npm start
```

The backend runs on `http://localhost:3000`.

### Start frontend

```bash
cd Frontend
npm run dev
```

The frontend runs on `http://localhost:5173` (or the next available port if 5173 is in use).

## Directory Structure

### Backend

```
Backend/
├── src/
│   ├── app.js
│   ├── config/
│   │   └── database.js
│   ├── controller/
│   │   ├── auth.controller.js
│   │   └── interview.controller.js
│   ├── middlewares/
│   │   ├── auth.middleware.js
│   │   └── file.middleware.js
│   ├── models/
│   │   ├── blacklist.model.js
│   │   ├── interviewReport.model.js
│   │   └── user.models.js
│   ├── routes/
│   │   ├── auth.routes.js
│   │   └── interview.routes.js
│   └── services/
│       └── ai.service.js
├── server.js
└── .env
```

### Frontend

```
Frontend/
├── public/
├── src/
│   ├── app.jsx
│   ├── app.routes.jsx
│   ├── main.jsx
│   ├── style.css
│   ├── features/
│   │   ├── auth/
│   │   └── interview/
│   └── assets/
├── vite.config.js
├── package.json
└── package-lock.json
```

## Notes

- The backend and frontend are run separately in different folders.
- If `vite` opens on a different port, use the port printed in the terminal.
- Make sure the MongoDB connection string and API key are valid in `Backend/.env`.

## Useful Commands

From `Backend/`:

```bash
npm start
```

From `Frontend/`:

```bash
npm run dev
```

## License

ISC


