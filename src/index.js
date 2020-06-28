import React from 'react';
import {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// Comoponent 1: AddTaskForm
function AddTaskForm(props){
  const [task, setTask] = useState('');
  function handleChange(e){
    setTask(e.target.value);
    }
    function handleSubmit(e){
      props.handleSubmit(task);
      setTask('');
      e.preventDefault();
    }
  return <form onSubmit={handleSubmit}>
    <div class="form-group">
      <input type="text" class="form-control" placeholder="Ajouter une tâche" onChange={handleChange} value={task} autoFocus="true"/>
      <input class="btn-success form-control" type="submit" value="Ajouter"/>
    </div>
  </form>;
}

// Component 2: TaskList

function TaskList(props){
  const arr= props.data;
  const taskList = arr.map((val,index)=>
  <li key={index}>
     <div class="col-xs-2 col-sm-2 col-md-2">
        <button class="form-control btn-default">{arr.length -index}</button>
      </div>
      <div class="col-xs-10 col-sm-10 col-md-10">
        <button class="form-control btn-info">{val}</button>
      </div>
      <br/><br/>
  </li>
  );
return <ul>{taskList}</ul>;
}

// Component 0: TaskManager

function TaskManager(props){
  const [tasks, setTask] = useState(props.data);
  function addTask(newTask){
    setTask([newTask, ...tasks]);
  }
  return <p>
    <AddTaskForm handleSubmit ={addTask}/>
    <TaskList data={tasks}/>
  </p>;
}

const task0 = [];
const el = <TaskManager data ={task0}/>;
ReactDOM.render(
  el,
  document.getElementById('root')
);