import { writeFile } from 'node:fs/promises';

try {
  const data = Math.random() + '\n';
  const promise = writeFile('random.txt', data, 'utf8');
  await promise
} catch (err) {
  console.error(err.message);
}
