/* eslint-disable no-unused-vars -- REMOVE ME */
import 'dotenv/config';
import pg from 'pg';
import argon2 from 'argon2';
import express from 'express';
import { ClientError, errorMiddleware } from './lib/index.js';

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();
app.use(express.json());

app.post('/api/auth/sign-up', async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      throw new ClientError(400, 'username and password are required fields');
    }
    /* TODO:
     * Hash the user's password with `argon2.hash()`
     * Insert the user's "username" and "hashedPassword" into the "users" table.
     * Respond to the client with a 201 status code and the new user's "userId", "username", and "createdAt" timestamp.
     * Catch any errors.
     *
     * Hint: Insert statements can include a `returning` clause to retrieve the insterted row(s).
     */
    const hash = await argon2.hash("hashedPassword")
    const sql = `
    insert into "users" ("username", "hashedPassword")
      values ($1, $2)
      returning "username", "hashedPassword", "userId", "createdAt"
    `
    const params = [username, hash]
    const result = await db.query(sql, params)
    const [userInfo] = result.rows
    res.status(201).json(userInfo)
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`express server listening on port ${process.env.PORT}`);
});
