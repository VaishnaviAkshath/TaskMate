import { useState } from "react"

export default function Taskform({addTask}) {
    const[task, setTask] = useState('');
    const[priority, setPriority] = useState('Medium');
    const[category, setCategory] = useState('General');

    const handlesubmit = (e) => {
        e.preventDefault(); // does not refresh the page upon submit
        addTask({text: task, priority, category, completed: false});

        //reset
        setTask('');
        setPriority('medium');
        setCategory('general');
    }
    return (
        <div>
            {/* <h1>TaskForm Component</h1> */}
            <form onSubmit={handlesubmit}>
                <div>
                    <input type="text" placeholder="Enter the task" value={task}
                    onChange={(e) => setTask(e.target.value)}/>
                    <button type="submit">Add Task</button>
                    <h1>{task} {priority} {category}</h1>
                </div>
                <div>
                    <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>

                    <select value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="General">General</option>
                        <option value="Work">Work</option>
                        <option value="Personal">Personal</option>
                    </select>
                </div>
            </form>
        </div>
    )
}