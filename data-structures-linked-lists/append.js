/* eslint-disable no-unused-vars */
import LinkedList from './lib/linked-list.js';

export default function append(list, value) {
  const newObj = new LinkedList(value);
  while (list !== null) {
    list = list.next;
    if (list.next === null) {
      break;
    }
  }

  list.next = newObj;

  return newObj;
}
