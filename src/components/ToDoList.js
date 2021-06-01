import React from 'react';
import Todo from './ToDo';


const ToDoList = ({ tasks, match, onToggleCompleted }) => {
  let filteredTasks;

  switch (match.params.filter) {
    case 'completed':
      filteredTasks = tasks.filter(task => task.completed);
      break;
    default:
      filteredTasks = tasks;
  }
  if (filteredTasks.length === 0) {
    return (
      <React.Fragment>
        <h1 className="m-3">My to-do-list app</h1>
        <li className="list-group-item">No task to display here</li>
      </React.Fragment >
    )
  } else {
    return (
      <React.Fragment>
        <h1 className="m-3">My to-do-list app</h1>
        <ul className="list-group m-3">
          {
            filteredTasks.map((task) => <Todo task={task} key={task.id} onToggleCompleted={onToggleCompleted} />)
          }
        </ul>
      </React.Fragment>
    )
  }
}

export default ToDoList;