import { useState } from "react";

export default function ToDo() {
    const [tasks, setTasks] = useState([]);
    const [taskText, setTaskText] = useState("");

    function addTask(event) {
        event.preventDefault();
        const text = taskText.trim();
        if (text === "") return;
        const newTask = {
            id: crypto.randomUUID(),
            text: text
        }

        setTasks((prev) => [...prev, newTask]);
        setTaskText("");
        console.log("Uzduotis prideta")
    }

    function removeTask(taskId) {
        setTasks((prev) => prev.filter((task) => task.id !== taskId))
    }


    return (
        <section>
            <h2>Uzduociu sarasas</h2>
            <form onSubmit={addTask}>
                <label>Nauja uzduotis</label>
                <input 
                    id="task-text"
                    value={taskText}
                    onChange={(event) => setTaskText(event.target.value)}
                />
                <button type="submit">Prideti</button>
            </form>

            {tasks.length === 0 && <p>Uzduociu dar nera</p>}

            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        {task.text}
                        <button type="button" onClick={() => removeTask(task.id)}>Pasalinti</button>
                    </li>
                ))}
            </ul>

        </section>
    )

}