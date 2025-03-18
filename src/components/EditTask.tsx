import { useState } from "react"
import "../styles/EditTask.css"

type EditTaskProps = {
    onEdit: (newText: string) => void;
}

const EditTask = ({ onEdit }: EditTaskProps) => {
    const [newText] = useState('');

    const handleEdit = () => {
        let userInput = '';

        while (!userInput) { // Se ejecuta hasta que haya un texto válido
            userInput = window.prompt("Editar tarea:", newText)?.trim() || ""; // Evita null y quita espacios
            if (userInput === "") {
                alert("El texto no puede estar vacío. Intenta de nuevo.");
            }
        }
    
        onEdit(userInput); // Guarda el texto válido
    }

    return(
        <>
            <span className="editTask" onClick={handleEdit}> ✏️ </span>
        </>





    )
}

export { EditTask };