import { writeFile } from 'node:fs';

const data = process.argv[2] + '\n';

writeFile('note.txt', data, 'utf8', err => {
  if (err) {
    console.error(err);
  }
});
