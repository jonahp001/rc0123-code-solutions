import { writeFile } from 'node:fs';

const data = Math.random() + '\n';

writeFile('random.txt', data, 'utf8', err => {
  if (err) {
    console.error(err);
  }
});
