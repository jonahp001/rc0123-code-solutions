export default function maxValue(stack) {
  const array = [];
  if (stack.peek() === undefined) {
    return -Infinity;
  }
  while (stack.peek() !== undefined) {
    array.push(stack.pop());
  }
  let bigNum = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > bigNum) {
      bigNum = array[i];
    } else if (array[i] < bigNum) {
      continue;
    }
  }
  return bigNum;
}
