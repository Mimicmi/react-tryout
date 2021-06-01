import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ToDoList from "./ToDoList";
import NavBar from "./NavBar";
import AddTask from "./AddTask";
import data from "../data";
import uniqid from 'uniqid';

class App extends React.Component {
  state = {
    tasks: localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : data
  }
  onAddTask = (newTaskName) => {
    let newTask = {
      id: uniqid.process(),
      name: newTaskName,
      completed: false
    }
    this.setState(prevState => ({
      tasks: [...prevState.tasks, newTask]

    }))
    setTimeout(() => {
      localStorage.setItem('data', JSON.stringify(this.state.tasks))
    }, 500)
  }
  onToggleCompleted = (taskId) => {
    let taskToUpdate = this.state.tasks.find(task => task.id === taskId)
    taskToUpdate.completed = !taskToUpdate.completed
    this.setState(prevState => (
      prevState.tasks.map(task => {
        return task.id === taskId ? taskToUpdate : task
      })
    ))
    localStorage.setItem('data', JSON.stringify(this.state.tasks));
  }
  onDeleteCompleted = () => {
    this.setState(prevState => {
      let newState = prevState.tasks.filter(task => !task.completed)
      return {
        tasks: newState
      }
    })
    setTimeout(() => {
      localStorage.setItem('data', JSON.stringify(this.state.tasks))
    }, 500)
  }

  componentDidMount = () => {
    console.log('ComponentDidMount')
    return true
  }

  shouldComponentUpdate = () => {
    console.log('shouldComponentUpdate')
    return true
  }

  componentDidUpdate = () => {
    console.log('componentDidUpdate')
    return true
  }

  componentWillUnmount = () => {
    console.log('componentWillUnmount')
    return true
  }


  render() {
    return (
      <section>
        <BrowserRouter>
          <Switch>
            <Route path="/add-task" render={(props) => <AddTask {...props} onAddTask={this.onAddTask} />} />
            <Route path="/:filter?" render={(props) => <ToDoList {...props} tasks={this.state.tasks} onToggleCompleted={this.onToggleCompleted} />} />
            <Route path="/" component={ToDoList} />
          </Switch>
          <NavBar onDeleteCompleted={this.onDeleteCompleted} />
        </BrowserRouter>
      </section>
    );
  }
}

export default App;