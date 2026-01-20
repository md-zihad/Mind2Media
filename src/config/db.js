import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

const dbUrl = process.env.DATABASE_URL;
console.log(dbUrl)
if (!dbUrl) {
    throw new Error('DATABASE_URL environment variable is required');
}
const sql = neon(dbUrl);
export const db = drizzle({ client: sql });
