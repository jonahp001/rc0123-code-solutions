export default function includes(list, value) {
  while (list !== null) {
    if (list.data === value || list.next === value) {
      return true;
    }
    if (list.next === null) {
      return false;
    }
    list = list.next;
  }
}
