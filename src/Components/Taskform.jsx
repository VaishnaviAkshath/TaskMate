export default function Taskform() {
    return (
        <div>
            {/* <h1>TaskForm Component</h1> */}
            <form>
                <div>
                    <input type="text" placeholder="Enter the task"/>
                    <button type="submit">Add Task</button>
                </div>
                <div>
                    <select>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>

                    <select>
                        <option value="General">General</option>
                        <option value="Work">Work</option>
                        <option value="Personal">Personal</option>
                    </select>
                </div>
            </form>
        </div>
    )
}