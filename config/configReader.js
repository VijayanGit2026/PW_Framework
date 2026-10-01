import dotenv from "dotenv";

const envFile = process.env.ENV || "qa";

dotenv.config({
    path: `./config/.env.${envFile}`
});

export const config = {
    baseUrl: process.env.BASE_URL,
};

// ENV=dev  → .env.dev
// ENV=qa   → .env.qa
// ENV not provided → .env.qa