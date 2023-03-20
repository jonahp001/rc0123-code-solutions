import express from 'express';

const app = express();

let nextId = 1;
const grades = {};

app.use(express.json());

app.get('/api/grades', (req, res) => {
  res.json(grades);
});

app.post('/api/grades', (req, res) => {
  grades[nextId] = req.body;
  req.body.id = nextId;
  nextId++;
  res.status(201).send(req.body);
  // for jonah's reference, can also do res.status on one line and res.json on the next line and will produce the same results without the request hanging or not resolving
});

app.listen(8080, () => {
  console.log('Listening on port 8080!');
});
