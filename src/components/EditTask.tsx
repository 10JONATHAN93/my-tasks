import "../styles/EditTask.css"
import { useOpenModal } from "../hooks/useOpenModal";
import React from "react";

type EditTaskProps = {
    onEdit: (newText: string) => void;
    currentText: string;
}

const EditTask = ({ onEdit, currentText }: EditTaskProps) => {
    const { isModalOpen,
        openModal,
        closeModal,
        handleSubmit,
        newText,
        setNewText } = useOpenModal();

    const handleEdit = () => {
        setNewText(currentText)
        openModal();
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewText(event.target.value)
    }

    return(
        <>

            <span className="editTask" onClick={handleEdit}> ✏️ </span>
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>EDITAR TAREA</h2>
                        <input 
                            className="textarea-edit"
                            type="text"
                            value={newText}
                            onChange={handleChange}
                            placeholder="Editar tarea..."
                        />

                        <div className="modal-actions">
                            <button className="saveButton"
                                onClick={() => {handleSubmit(); onEdit(newText); closeModal(); }}
                            >Guardar</button>

                            <button
                                className="cancelButton"
                                onClick={closeModal}
                            >Cancelar</button>
                        </div>
                    </div>

                </div>
            )}
        </>





    )
}

export { EditTask };