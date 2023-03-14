import add from './add.js';
import subtract from './subtract.js';
import multiply from './multiply.js';
import divide from './divide.js';

const firstNum = parseInt(process.argv[2]);
const secondNum = parseInt(process.argv[4]);

if (process.argv[3] === 'plus') {
  add(firstNum, secondNum);
} else if (process.argv[3] === 'minus') {
  subtract(firstNum, secondNum);
} else if (process.argv[3] === 'times') {
  multiply(firstNum, secondNum);
} else if (process.argv[3] === 'over') {
  divide(firstNum, secondNum);
} else {
  console.log('Invalid Operation');
}
