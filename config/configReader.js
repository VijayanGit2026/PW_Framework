import dotenv from "dotenv";

const envFile = process.env.ENV || "qa"; //default: qa

dotenv.config({
    path: `./config/.env.${envFile}`
});

export const config = {
    baseUrl: process.env.BASE_URL,
};

// ENV=dev  → .env.dev
// ENV=qa   → .env.qa
// ENV not provided → .env.qa

// npx playwright test                            | .env.qa
// set ENV=qa && npx playwright test ...          | .env.qa
// set ENV=dev && npx playwright test ...         | .env.dev