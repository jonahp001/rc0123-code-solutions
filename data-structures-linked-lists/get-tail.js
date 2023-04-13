export default function getTail(list) {
  while (list !== null) {
    if (list.next === null) {
      break;
    }
    list = list.next;
  }
  return list.data;
}
