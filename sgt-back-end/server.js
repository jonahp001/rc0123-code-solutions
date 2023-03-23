import express from 'express';

import pg from 'pg';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

const app = express();
app.use(express.json());

app.get('/api/grades/:gradeId', async (req, res) => {
  try {
    const gradeId = Number(req.params.gradeId);
    if (!Number.isInteger(gradeId) || gradeId <= 0) {
      res.status(400).json({ error: '"gradeId" must be a positive integer' });
      return;
    }
    const sql = `
      select *
        from "grades"
      where "gradeId" = $1
    `;

    const params = [gradeId];

    const result = await db.query(sql, params)

    const grade = result.rows[0];
    if (grade) {
      res.json(grade);
    } else {
      res.status(404).json({ error: `Cannot find grade with "gradeId" ${gradeId}` });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

app.get('/api/grades', async (req, res) => {
  try {
    const sql = `
      select *
        from "grades"
    `;
    const result = await db.query(sql)
    const grades = result.rows;
    res.status(200).send(grades);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

app.post('/api/grades', async (req, res) => {
  try {
    const reqBody = req.body
    if (!reqBody.hasOwnProperty('name')) {
      res.status(400).json({ error: 'Must include the "name" property' });
      return;
    } else if (!reqBody.hasOwnProperty('course')) {
      res.status(400).json({ error: 'Must include the "course" property' });
      return;
    } else if (!reqBody.hasOwnProperty('score')) {
      res.status(400).json({ error: 'Must include the "score" property' });
      return;
    } else if (reqBody.hasOwnProperty('score') && !Number.isInteger(reqBody.score) || reqBody.score < 0 || reqBody.score > 100) {
      res.status(400).json({ error: '"score" must be an integer between 0 and 100' });
      return;
    }

    const sql = `
      insert into "grades" ("course", "name", "score")
      values ($1, $2, $3)
      returning *
    `;

    const params = [reqBody.course, reqBody.name, reqBody.score];
    const result = await db.query(sql, params)
    const grade = result.rows[0];

    res.status(201).json(grade);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

app.put('/api/grades/:gradeId', async (req, res) => {
  try {
    const gradeId = Number(req.params.gradeId);
    const reqBody = req.body
    if (!reqBody.hasOwnProperty('name')) {
      res.status(400).json({ error: 'Must include the "name" property' });
      return;
    } else if (!reqBody.hasOwnProperty('course')) {
      res.status(400).json({ error: 'Must include the "course" property' });
      return;
    } else if (!reqBody.hasOwnProperty('score')) {
      res.status(400).json({ error: 'Must include the "score" property' });
      return;
    } else if (!reqBody.hasOwnProperty('score') && !Number.isInteger(reqBody.score) || reqBody.score < 0 || reqBody.score > 100) {
      res.status(400).json({ error: '"score" must be an integer between 0 and 100' });
      return;
    }

    const sql = `
      update "grades"
        set "course" = $1,
            "name" = $2,
            "score" = $3
      where "gradeId" = $4
      returning *
    `;

    const params = [reqBody.course, reqBody.name, reqBody.score, gradeId];
    const result = await db.query(sql, params)
    const grade = result.rows[0];

    if (grade) {
      res.status(200).json(grade);
    } else {
      res.status(404).json({ error: `Cannot find grade with "gradeId" ${gradeId}` });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

app.delete('/api/grades/:gradeId', async (req, res) => {
  try {
    const gradeId = Number(req.params.gradeId);
    const reqBody = req.body
    const sql = `
      delete
        from "grades"
        where "gradeId" = $1
      returning *
      `

    const params = [gradeId];
    const result = await db.query(sql, params)
    const grade = result.rows[0];

    if (grade) {
      res.status(204).json(grade);
    } else {
      res.status(404).json({ error: `Cannot find grade with "gradeId" ${gradeId}` });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

app.listen(8080, () => {
  console.log('Listening on port 8080!');
});
