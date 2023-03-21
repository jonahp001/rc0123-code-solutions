import express from 'express';
import { writeFile } from 'node:fs/promises';
import { readFileSync, existsSync } from 'node:fs';

const data = JSON.parse(readFileSync('./data.json'));
const dataNotes = data.notes;
const dataObjKeyList = Object.keys(dataNotes);

let entryId = data.nextId;

const app = express();

app.get('/api/notes', (req, res) => {
  const notesArray = [];
  for (const [, value] of Object.entries(dataNotes)) {
    notesArray.push(value);
  }
  res.json(notesArray);
});

app.get('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  const existingIdArray = dataObjKeyList.filter(idNum => idNum === req.params.id);
  if (id < 0 || Number.isInteger(id) === false) {
    res.status(400).send({ error: 'id must be a positive integer' });
  } else if (existingIdArray.length === 0) {
    res.status(404).send({ error: `cannot find note with id ${id}` });
  } else if (existingIdArray.length > 0) {
    res.status(200).send(dataNotes[req.params.id]);
  }
});

app.use(express.json());

app.post('/api/notes', async (req, res) => {
  if (Object.keys(req.body).length === 0) {
    res.status(400).send({ error: 'content is a required field' });
  } else if ('content' in req.body) {
      try {
        const newContentString = req.body.content;
        const newContentObj = {};
        newContentObj['id'] = entryId;
        newContentObj['content'] = newContentString
        dataNotes[entryId] = newContentObj;

        data.nextId++;

        const promise = writeFile('./data.json', JSON.stringify(data, null, 2), 'utf-8')
        await promise;
        res.status(201).send(dataNotes[entryId]);

      } catch (err) {
        console.error(err);
        res.status(500).send({ error: 'an unexpected error occured' });
        process.exit(1);
      }
  }
});

app.delete('/api/notes/:id', async (req, res) => {
  const id = Number(req.params.id);
  const idString = req.params.id;
  const existingIdArray = dataObjKeyList.filter(idNum => idNum === idString);
  if (id < 0 || Number.isInteger(id) === false) {
    res.status(400).send({ error: 'id must be a positive integer' });
  } else if (existingIdArray.length === 0) {
    res.status(404).send({ error: `cannot find note with id ${id}` });
  } else if (existingIdArray.length > 0) {
    try {
      for (let i = 0; i < dataObjKeyList.length; i++) {
        let contentId = dataObjKeyList[i];
        if (contentId === idString) {
          delete dataNotes[contentId];
          res.status(204).send(req.body);
        }
      }
      await writeFile('./data.json', JSON.stringify(data, null, 2), 'utf-8')
    }
    catch (err) {
      console.error(err);
      res.status(500).send({ error: 'an unexpected error occured' });
      process.exit(1);
    }
  }
});

app.put('/api/notes/:id', async (req, res) => {
  const id = Number(req.params.id);
  const idString = req.params.id;
  const existingIdArray = dataObjKeyList.filter(idNum => idNum === idString);
  if (id < 0 || Number.isInteger(id) === false) {
    res.status(400).send({ error: 'id must be a positive integer' });
  } else if ('content' in req.body === false) {
    res.status(400).send({ error: 'content is a required field' });
  } else if (existingIdArray.length > 0 && idString in dataNotes === false) {
    res.status(404).send({ error: `cannot find note with id ${id}` });
  } else if (existingIdArray.length > 0 && idString in dataNotes) {
    try {
      const newContentString = req.body.content;
      const newContentObj = {};
      newContentObj['id'] = id;
      newContentObj['content'] = newContentString
      dataNotes[id] = newContentObj;

      await writeFile('./data.json', JSON.stringify(data, null, 2), 'utf-8')
      res.status(200).send(dataNotes[idString]);
    }
    catch (err) {
      console.error(err);
      res.status(500).send({ error: 'an unexpected error occured' });
      process.exit(1);
    }
  }
});

app.listen(8080, () => {
  console.log('Listening on port 8080!');
});
