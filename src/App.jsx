import Taskform from "./Components/Taskform"
import Tasklist from "./Components/Tasklist"
import Progresstracker from "./Components/Progresstracker"
import { useEffect, useState } from "react"
import "./Style.css";
export default function App() {
  const [tasks, setTasks] = useState([]);  // handles mutiple tasks
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  });

  const addTask = (task) => {
    setTasks([...tasks,task]);
  }

  const updateTask = (updatedTask, index) => {
    const newtask = [...tasks];
    newtask[index] = updatedTask;
    setTasks(newtask);
  }

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i != index));
  }

  const clearTasks = () => {
    setTasks([]);
  }
  
  return (
    <div className="App">
      <header>
      <h1 className="title">TaskMate</h1>
      <p className="tagline">My friendly Task Manager</p>
      </header>
      <Taskform addTask = {addTask}/>
      <Tasklist tasks = {tasks} 
      updateTask = {updateTask} deleteTask = {deleteTask} />
      <Progresstracker tasks = {tasks}/>

      {/* When we want clearAllTasks button to appear only when atleast one task added */}
      {tasks.length > 0 && 
      (<button onClick={clearTasks} className="clear-btn">Clear All Tasks</button>)}
      
    </div>
  )
}