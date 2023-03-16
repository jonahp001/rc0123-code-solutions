import { readFile } from 'node:fs/promises';

try {
  const filePath = new URL('dijkstra.txt', import.meta.url);
  const contents = await readFile('dijkstra.txt', { encoding: 'utf8' });
  console.log(contents);
} catch (err) {
  console.error(err.message);
}
