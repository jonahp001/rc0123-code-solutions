import express from 'express';

const app = express();

app.use((req, res) => {
  console.log(req.method);
  res.send('hello, hello, i am here!');
});

app.listen(8080, () => {
  console.log('Server listening on port 8080!');
});
