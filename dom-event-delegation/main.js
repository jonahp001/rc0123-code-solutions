var $taskList = document.querySelector('.task-list');
$taskList.addEventListener('click', eventTargetFunction);

function eventTargetFunction(event) {
  console.log('event.target: ', event.target);
  console.log('event.target.tagName: ', event.target.tagName);
  if (event.target && event.target.tagName === 'BUTTON') {
    var $closestTaskListItem = event.target.closest('.task-list-item');
    console.log('closest .task-list-item', $closestTaskListItem);
    $closestTaskListItem.remove();
  }
}
