import dotenv from "dotenv";

const envFile = process.env.ENV || "qa"; //default: qa

dotenv.config({
  path: `./config/.env.${envFile}`,
});

export const config = {
  baseUrl: process.env.BASE_URL,
};

// ENV=dev  → .env.dev
// ENV=qa   → .env.qa
// ENV not provided → .env.qa

// for default .env.qa
// npx playwright test

// explicitly use .env.qa
// $env:ENV="qa"; npx playwright test

// use .env.dev
// $env:ENV="dev"; npx playwright test tests/test03.spec.js --headed
