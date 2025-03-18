import { useState } from "react"

const useOpenModal = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [newText, setNewText] = useState<string>('');

    // abriendo modal de edición
    const openModal = () => {
        setIsModalOpen(true);
    }

    // cerrando modal de edición
    const closeModal = () => {
        setIsModalOpen(false);

        if(!newText.trim()) {
            setIsModalOpen(true);
        }

        setNewText(newText);
    }

    // lanzando alerta de texto vacio en modal
    const handleSubmit = () => {
        if(!newText.trim()) {
            alert("El texto no puede estar vacío.");
            return;
        }
    }

    return {
        isModalOpen,
        openModal,
        closeModal,
        handleSubmit,
        newText,
        setNewText,
    }
}

export { useOpenModal };