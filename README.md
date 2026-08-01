# YuktiHire

**Gen AI-Powered Interview Preparation Platform**

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)

> Connects candidate resumes with targeted job descriptions to surface skill gaps, generate tailored interview questions, and produce ATS-friendly resume variants — helping candidates prepare smarter for specific roles.

Built with a modular Node.js/Express backend and a planned React frontend, YuktiHire combines resume parsing, AI-driven analysis, and report generation into a single streamlined workflow for interview readiness.

## What It Does

→ **Secure Authentication** — JWT-based sessions with secure logout via token blacklisting

→ **Resume Processing** — Upload and parse resumes directly from PDF

→ **AI Interview Reports** — Generated from the candidate's resume against a target job description

→ **Skill Gap Analysis** — Job-fit scoring and identification of missing skills

→ **Question Suggestions** — Technical and behavioral questions tailored to the role

→ **Preparation Plans** — Personalized study plans built around identified gaps

→ **Resume Generation** — Targeted, ATS-friendly resume variants with PDF export

→ **Report History** — Track and revisit past interview reports

## Built With

`Node.js`  `Express.js`  `MongoDB`  `Mongoose`  ·  `React.js` *(planned)*  `Vite`  `SCSS`  `React Router`  `Axios`

## Getting Started

**Prerequisites**
- Node.js 18+
- MongoDB Atlas or a local MongoDB instance

**Installation**

```bash
git clone https://github.com/your-username/yuktihire.git
cd yuktihire
npm install
```

**Environment Variables**

Create a `.env` file in the project root:

```dotenv
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=7d
FRONTEND_URL=http://localhost:5173
```

**Run the Server**

```bash
node server.js
```

## Project Structure

The backend follows a modular, layered architecture:

```
yuktihire/
├── routes/        # API endpoint definitions
├── controllers/    # Request handling and response logic
├── models/         # Mongoose schemas
├── services/       # AI integration and business logic
└── server.js        # App entry point
```

The frontend (planned) will follow a four-layer architecture — UI, Hooks, State, and API layers — to keep concerns cleanly separated.


