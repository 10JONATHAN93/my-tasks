import { useState } from "react";
import { ButtonAddTask } from "./ButtonAddTask"
import { InputTask } from "./InputTask"
import { useTask } from "../context/useTask";
import "../styles/TaskForm.css";

const TaskForm = () => {
    const { addTask } = useTask();
    const [text, setText] = useState<string>('');

    const handleTask = () => {
        addTask(text);
        // imprimendo para validar si funciona
        console.log('tarea agregada: ', text);
        setText('');
    }    

    return (
        <>
            <h1>LISTA DE TAREAS</h1>
            <div className="taskForm-container">
                <InputTask value={text} onChange={(event) => setText(event.target.value)}/>
                <ButtonAddTask handleTask={handleTask} />
            </div>
        </>
    )
}

export { TaskForm };