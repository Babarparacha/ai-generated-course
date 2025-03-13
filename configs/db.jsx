import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
const sql=neon("postgresql://neondb_owner:npg_AN7yHnEYhoC1@ep-misty-field-a8t9d1yo-pooler.eastus2.azure.neon.tech/neondb?sslmode=require")
export const db = drizzle(sql);