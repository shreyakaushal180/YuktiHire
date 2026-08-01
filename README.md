# YuktiHire — Full Stack Gen AI Interview System

## Project Overview

**YuktiHire** is a full-stack interview preparation platform that connects candidate resumes with targeted job descriptions using generative AI. The system is designed to analyze resumes, identify skill gaps, generate interview questions, and create ATS-friendly resume variants for specific roles.

## Key Features

- User registration and authentication with JWT sessions
- Secure logout with token blacklisting
- Resume upload via PDF and text extraction
- AI-driven interview report generation
- Score, skill gap analysis, technical/behavioral question suggestions, and preparation plans
- Targeted resume generation and PDF export
- Report history tracking and retrieval

## Architecture

### Backend
- Node.js + Express.js
- MongoDB + Mongoose
- Modular folders for routes, controllers, models, and services
- AI integration via a dedicated service layer
- Resume processing with PDF upload and parsing

### Frontend (planned)
- React.js + Vite
- SCSS styling
- React Router for navigation
- Axios for API calls
- Four-layer architecture:
  1. UI Layer
  2. Hooks Layer
  3. State Layer
  4. API Layer

## Getting Started

### Prerequisites
- Node.js 18+ installed
- MongoDB Atlas or local MongoDB URI

### Install dependencies

```bash
npm install
```

### Environment Variables

Create a `.env` file in the project root with values like:

```dotenv
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=7d
FRONTEND_URL=http://localhost:5173
```

### Run the server

```bash
node server.js
```

## Recommended Branch / Commit Strategy

- `main` for production-ready code
- `feature/auth` for authentication work
- `feature/interview-reports` for report generation and persistence
- `feature/resume-pdf` for targeted resume generation
- `feature/frontend` for the React app scaffold

## Notes

- Keep sensitive data out of version control by using `.env`
- Use small, focused commits for each feature or architecture change
- The AI integration is currently planned as a replaceable service module so Gemini can be swapped in later

## Next Steps

1. Implement backend auth and JWT middleware
2. Build report storage and resume upload endpoints
3. Create AI service adapter and PDF generation pipeline
4. Scaffold the frontend app and protected routes
5. Add validation, loading states, and UX polish
