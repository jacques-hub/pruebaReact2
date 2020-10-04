import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from './components/Navigation';
import FormTasks from './components/FormTasks';
import { tasks } from './tasks.json';

class App extends Component {
  constructor()
  {
    super();
    this.state = {
      tasks: tasks
    };
    this.handleAddTask = this.handleAddTask.bind(this);
  }

  handleAddTask(task){
    this.setState({
      tasks:[...this.state.tasks, task]
    })
  }

  removeTask(index){
    if (window.confirm('Are you sure you want to delete it?')){
      this.setState({
        tasks: this.state.tasks.filter((e, i)=>{
          return i !== index
          //devuelve un arreglo con los elementos q cumplan la condicion

        })
      })
    }
  }

  render() {
    const tasks = this.state.tasks.map((task, i)=>{
      return (
        <div className="col-md-4">
          <div className="card mt-4">
            <div className="card-header">
              <h3>{task.title}</h3>
              <span className="badge badge-pill badge-danger ml-2">
              <p>{task.priority}</p>
              </span>
            </div>
            <div className="card-body">
              <p>{task.description}</p>
              <p>{task.responsible}</p>              
            </div>
            <div className="card-footer">
              <button className="btn btn-danger" onClick={this.removeTask.bind(this, i)}>
                Remove
              </button>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div className="App">
        <Navigation title="Titulo 1"/>
        <nav className="navbar navbar-dark bg-dark">
          <a href="" className="text-write">
            Tasks
            <span className="badge badge-pill badge-light ml-2">
              {this.state.tasks.length}
            </span>
          </a>
        </nav>

        <FormTasks onAddTask={this.handleAddTask}/>

        <div className="container">
          <div className="row mt-4">
            {tasks}
          </div>
        </div>

        <img src={logo} className="App-logo" alt="logo" />
        
      </div>
    );
    }
}
export default App;
