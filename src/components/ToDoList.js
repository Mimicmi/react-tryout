import React from 'react';
import { FaCheck } from "react-icons/fa";
import Todo from './ToDo';


const ToDoList = ({ tasks }) => {
  console.log(tasks);
  return (
    <React.Fragment>
      <h1 className="m-3">My to-do-list app</h1>
      <ul className="list-group m-3">
        {
          tasks.map((task) => <Todo task={task} key={task.id} />)
        }
      </ul>
    </React.Fragment>
  )
}

export default ToDoList;