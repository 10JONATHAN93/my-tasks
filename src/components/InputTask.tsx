import "../styles/InputTask.css";

type InputTaskProps = {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

// pendiente realizar hook para manipular el estado del input
const InputTask = ({ value, onChange }: InputTaskProps) => {

    return(
        <input 
            className="inputTask"
            type="text"
            value={value}
            onChange={onChange}
            placeholder="Ingresa una tarea."
        />
    )
}

export { InputTask };