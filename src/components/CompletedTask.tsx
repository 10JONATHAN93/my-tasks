import "../styles/CompletedTask.css";
type CompletedTaskProps = {
    completed: boolean;
    onCompleted: () => void;
}

const CompletedTask = ({ completed, onCompleted }: CompletedTaskProps) => {
    return(
      <span 
        className="completedTask completedTask--check"
        onClick={onCompleted}
      >
        {completed ? "✅" : "✔️"}
      </span>  
    )
}

export { CompletedTask };