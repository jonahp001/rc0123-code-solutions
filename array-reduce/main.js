const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const initialValue0 = 0;
const sum = numbers.reduce((accumulater, currentValue) => accumulater + currentValue, initialValue0);
console.log(sum);

const initialValue1 = 1;
const product = numbers.reduce((accumulater, currentValue) => accumulater * currentValue, initialValue1);
console.log(product);

const totaBalance = (accumulater, currentValue) => {
  if (currentValue.type === 'deposit') {
    return accumulater + currentValue.amount;
  } else {
    return accumulater - currentValue.amount;
  }
};
const balance = account.reduce(totaBalance, initialValue0);
console.log(balance);

const composite = traits.reduce((accumulater, currentValue) => Object.assign(currentValue, accumulater));
console.log(composite);
