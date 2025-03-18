import React, { createContext, useEffect, useState } from "react";


type Task = {
    id: number,
    text: string,
    completed: boolean
}

type TaskContexType = {
    tasks: Task[];
    addTask: (text: string) => void;
    toggleCompleted: (taskId: number) => void;
    editTask: (taskId: number, newText: string) => void;
    deleteTask: (taskId: number) => void;
}

//creando contexto 
const TaskContext = createContext<TaskContexType | undefined>(undefined);

// creando estado global
const TaskProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    // cargando tareas desde localStorage o usar un array vacio si no llega haber datos
    const loadTaskFromLocalStorage = () => {
        const savedTask = localStorage.getItem('tasks'); // buscando la key de localStorage 'tasks'
        return savedTask ? JSON.parse(savedTask) : [];
    };

    // creando estado local
    const [tasks, setTasks] = useState<Task[]>(loadTaskFromLocalStorage); // el estado inicial es el valor del localStorage

    // guardando tareas en el localStorage cada vez que el estado cambie 
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks)) // actualizamos con set item
    }, [tasks]);

     // agregando tareas
     const addTask = (taskText: string) => {
        if(!taskText.trim()) {
            alert('No has ingresado una tarea.')
            return;
        }
        const newTask: Task = {
            id: Date.now(),
            text: taskText,
            completed: false,
        }
        setTasks([...tasks, newTask]);
        console.log("Tareas actuales:", tasks);
    }

    // marcando tareas completadas
    const toggleCompleted = (taskId: number) => {
        setTasks(tasks.map(task => 
            task.id === taskId ? { ...task, completed: !task.completed }: task
        ));
    };

    // editando tareas
    const editTask = (taskId: number, newText: string) => {
        setTasks(tasks.map(task => 
            task.id === taskId ? { ...task, text: newText }: task
        ));
    };

    // eliminando tareas
    const deleteTask = (taskId: number) => {
        setTasks(tasks.filter(task => task.id !== taskId ));
    };

    return (
        <TaskContext.Provider value={{ tasks, addTask, toggleCompleted, editTask, deleteTask }}>
            {children}
        </TaskContext.Provider>
    );
};

export { TaskContext, TaskProvider };
