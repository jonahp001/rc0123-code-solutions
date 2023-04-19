import { evenNumbers, toDollars, divideBy, multiplyBy } from './numbers';

test('Returns a new array that contains only the even numbers in the given array.', () => {
  const array = [1, 2, 6, 8];
  expect(evenNumbers(array)).toStrictEqual([2, 6, 8]);
  expect(evenNumbers(array)).not.toStrictEqual([1, 2, 6, 8]);
});

test('Returns a number formatted in dollars and cents.', () => {
  const number = 1;
  const negative = -1341;
  const word = 'pen';
  expect(toDollars(number)).toStrictEqual('$1.00');
  expect(toDollars(word)).toBeUndefined();
  expect(toDollars(negative)).toBeUndefined();
});

test('Returns a new array of numbers where every entry has been divided by the given divisor. Does not modify the original array.', () => {
  const array = [6, 42, 22, 10, 16];
  const divisor = 2;
  const badArray1 = [4, 5, 'asd', 4];
  const badArray2 = [4, 5, true, 4];
  expect(divideBy(array, divisor)).toStrictEqual([3, 21, 11, 5, 8]);
  expect(array).toStrictEqual([6, 42, 22, 10, 16]);
  expect(divideBy(badArray1)).toBeUndefined();
  expect(divideBy(badArray2)).toBeUndefined();
});

test('Modifies an object by multiplying the value of each key, but only if that value is a number.Key names are arbitrary.', () => {
  const obj = {
    asf: 2,
    fax: 5,
    iuo: 3,
    faf: 'asfa'
  };
  const multiplier = 3;
  expect(multiplyBy(obj, multiplier)).toStrictEqual({ asf: 6, fax: 15, iuo: 9, faf: 'asfa' });
  expect(multiplyBy({}, 1)).toStrictEqual({});
  expect(isNaN(multiplier)).toBe(false);
});
