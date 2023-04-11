export default function countValues(stack) {
  const array = [];
  while (stack.peek() !== undefined) {
    array.push(stack.pop());
  }
  return array.length;
}
