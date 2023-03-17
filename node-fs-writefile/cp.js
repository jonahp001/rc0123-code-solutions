import { readFile, writeFile } from 'node:fs/promises';

try {
  const data = await readFile(process.argv[2], { encoding: 'utf8' });
  const promise = writeFile(process.argv[3], data, 'utf8');
  await promise
} catch (err) {
  console.error(err.message);
}
