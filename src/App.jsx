import Taskform from "./Components/Taskform"
import Tasklist from "./Components/Tasklist"
import Progresstracker from "./Components/Progresstracker"
export default function App() {
  return (
    <div>
      <h1>TaskMate</h1>
      <p>My friendly Task Manager</p>
      <Taskform />
      <Tasklist />
      <Progresstracker />
      <button>Clear All Tasks</button>
    </div>
  )
}