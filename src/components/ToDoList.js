import React from 'react';
import { FaCheck } from "react-icons/fa";


const ToDoList = () => (
  <React.Fragment>
    <h1 className="m-3">My to-do-list app</h1>
    <ul className="list-group m-3">
      <li className="list-group-item">Réveil
            <button className="btn btn-sm btn-outline-success float-end"><FaCheck /></button>
      </li>
      <li className="list-group-item">Douche
            <button className="btn btn-sm btn-outline-success float-end"><FaCheck /></button>
      </li>
      <li className="list-group-item">Café
            <button className="btn btn-sm btn-outline-success float-end"><FaCheck /></button>
      </li>
      <li className="list-group-item">Travail
            <button className="btn btn-sm btn-outline-success float-end"><FaCheck /></button>
      </li>
    </ul>
  </React.Fragment>
)

export default ToDoList;