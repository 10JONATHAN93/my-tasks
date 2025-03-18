import { useTask } from "../context/useTask";
import { CompletedTask } from "./CompletedTask"
import { DeleteTask } from "./DeleteTasks";
import { EditTask } from "./EditTask";
import "../styles/ListTasks.css"

const ListTasks = () => {
    const { tasks, toggleCompleted, editTask, deleteTask,  } = useTask();
    // console.log("Renderizando ListTasks con tareas:", tasks);

    return (
        <ul className="listTasks-container">
            { tasks.length > 0 ?
            tasks.map((task) => (
                <li key={task.id}>
                    <CompletedTask 
                        completed={task.completed} 
                        onCompleted={() => toggleCompleted(task.id)}
                    />
                    <span className={task.completed ? "text completed" : "text"}>{task.text}</span>
                    <EditTask 
                        onEdit={(newText) => editTask(task.id, newText)}
                        currentText={task.text}
                    />
                    <DeleteTask onDelete={() => deleteTask(task.id)}/>
                </li>
            )) :
            <p>no hay tareas guardadas</p>
            }   
        </ul>
    )
}

export { ListTasks };