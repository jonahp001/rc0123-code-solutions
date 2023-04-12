export default function takeValueAtIndex(queue, index) {
  if (queue.peek() !== undefined) {
    while (index > 0) {
      const front = queue.dequeue();
      queue.enqueue(front);
      index--;
    }
    return queue.dequeue();
  }
}
