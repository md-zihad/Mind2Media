import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/config/schema.js",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
});
