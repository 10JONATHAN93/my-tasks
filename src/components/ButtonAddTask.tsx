import "../styles/ButtonAddTask.css";



type ButtonAddTaskProps = {
    handleTask: () => void;
}



const ButtonAddTask = ({ handleTask } : ButtonAddTaskProps) => {
       return (
       <button 
            className="buttonAddTask"
            onClick={handleTask}
       >Agregar Tarea</button>)
}

export { ButtonAddTask };