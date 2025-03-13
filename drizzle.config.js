import { defineConfig } from "drizzle-kit";
export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.jsx",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_AN7yHnEYhoC1@ep-misty-field-a8t9d1yo-pooler.eastus2.azure.neon.tech/neondb?sslmode=require",
  },

});
