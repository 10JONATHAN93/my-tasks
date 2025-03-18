import "../styles/DeletedTask.css";

type deleteTaskProps = {
    onDelete: () => void;
}

const DeleteTask = ({ onDelete }: deleteTaskProps) => {

    return(
        <span className="deletedTask" onClick={onDelete}>
            ❌
        </span>
    )
}

export { DeleteTask };