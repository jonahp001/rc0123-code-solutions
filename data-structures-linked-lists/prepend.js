/* eslint-disable no-unused-vars -- Remove me */
import LinkedList from './lib/linked-list';

export default function prepend(list, value) {
  const newObj = new LinkedList(value);
  newObj.next = list;

  return newObj;
}
