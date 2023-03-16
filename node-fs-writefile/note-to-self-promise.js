import { writeFile } from 'node:fs/promises';

try {
  const data = process.argv[2] + '\n';
  const promise = writeFile('note.txt', data, 'utf8');
  await promise
} catch (err) {
  console.error(err.message);
}
