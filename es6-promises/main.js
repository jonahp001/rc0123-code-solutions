import takeAChance from './take-a-chance.js';

const promiseName = takeAChance('jonah');

promiseName
  .then(onFulfilled => {
    console.log(onFulfilled);
  })
  .catch(err => {
    console.error(err.message);
  });
