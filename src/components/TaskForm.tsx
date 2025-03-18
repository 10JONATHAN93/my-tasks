import { useState } from "react";
import { ButtonAddTask } from "./ButtonAddTask"
import { InputTask } from "./InputTask"
import { useTask } from "../context/useTask";
import "../styles/TaskForm.css";

const TaskForm = () => {
    const { tasks, addTask } = useTask();
    const [text, setText] = useState<string>('');

    const handleTask = () => {
        addTask(text);
        // imprimendo para validar si funciona
        // console.log('tarea agregada: ', text);
        setText('');
    }
    
    const completedTasks = () => {
        const completed = tasks.filter(task => task.completed).length;
        return completed;
    }

    return (
        <>
            <h1>LISTA DE TAREAS</h1>
            <p>tienes {completedTasks()} completadas de {tasks.length}</p>
            <div className="taskForm-container">
                <InputTask value={text} onChange={(event) => setText(event.target.value)}/>
                <ButtonAddTask handleTask={handleTask} />
            </div>
        </>
    )
}

export { TaskForm };