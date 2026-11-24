# StudyForge AI — Experiment 15
Khushi Jain Daga | 23bcon1665 | JECRC University | Web Development Using AI | 2026–27

Full-stack academic planner with Express, MongoDB, bcrypt, JWT and Gemini. Register, add tasks, complete them and generate/save study blueprints. Data queries are scoped to the authenticated user. Tokens expire after two hours and are stored in sessionStorage for this local demo.

## Run
`npm install`, copy `.env.example` to `.env`, supply Atlas URI, a random JWT secret of at least 32 characters and Gemini API key, then `npm start`. Open `http://localhost:8013/`. Database name: studyforgelab. Run `npm test` for validation tests. No credentials belong in Git.

## Architecture
Browser → Express REST API → JWT authentication → Mongoose/MongoDB; plan generation also calls Gemini server-side. Actual generation needs a supported model and quota. No simulated AI output.

## Testing checklist
Register and sign in; reject duplicate email; add/complete/delete tasks; generate a plan; refresh and verify saved data; sign in with a second user and verify isolation; verify invalid credentials fail. Live integration and browser checks must be performed with local credentials. Basic security controls are not a production security certification. Keep this demo local; public deployment would require additional review, account controls and secure token/session design.

## API
GET /api/health; POST /api/register; POST /api/login; authenticated GET /api/workspace; POST /api/tasks; PATCH /api/tasks/:id; DELETE /api/tasks/:id; POST /api/plans; DELETE /api/plans/:id.
