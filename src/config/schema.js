import { pgTable, serial, varchar, boolean, timestamp } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

export const User = pgTable('user', {
    id: serial('id').primaryKey(),
    name: varchar('name', {length: 30}).notNull(),
    email: varchar('email').notNull().unique(),
    imageUrl: varchar('imageUrl'),
    subscription: boolean('subscription').notNull().default(false),
    createdAt: timestamp('createdAt').notNull().default(sql`CURRENT_TIMESTAMP`),
    updatedAt: timestamp('updatedAt').notNull().default(sql`CURRENT_TIMESTAMP`),
});
