import { writeFile } from 'node:fs/promises';
import { readFileSync } from 'node:fs';

const data = JSON.parse(readFileSync('./data.json'));
const dataNotes = data.notes
let dataObjKeyList = Object.keys(dataNotes)
let entryId = data.nextId

const readJSON = async () => {
  try {
    for (let i = 0; i < dataObjKeyList.length; i++) {
      let id = dataObjKeyList[i];
      console.log(`${id}: ${dataNotes[id]}`)
    }

  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}
if (process.argv[2] === 'read') {
  readJSON();
}

const createJSON = async() => {
  try {
    const newNote = process.argv[3]
    dataNotes[entryId] = newNote;

    data.nextId++;

    const promise = writeFile('./data.json', JSON.stringify(data, null, 2), 'utf-8')
    await promise;

  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}
if (process.argv[2] === 'create') {
  createJSON();
}


const deleteJSON = async() => {
  try {
    for (let i = 0; i < dataObjKeyList.length; i++) {
      let id = dataObjKeyList[i];
      if (id === process.argv[3]) {
        delete dataNotes[id]
      }
    }
    const promise = writeFile('./data.json', JSON.stringify(data, null, 2), 'utf-8')
    await promise;

  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}
if (process.argv[2] === 'delete') {
  deleteJSON();
}

const updateJSON = async() => {
  try {
    for (let i = 0; i < dataObjKeyList.length; i++) {
      let id = dataObjKeyList[i];
      if (id === process.argv[3]) {
        dataNotes[id] = process.argv[4]
      }
    }

    const promise = writeFile('./data.json', JSON.stringify(data, null, 2), 'utf-8')
    await promise;

  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}
if (process.argv[2] === 'update') {
  updateJSON();
}
