import { useContext } from "react";
import { TaskContext } from "./TasksContext";

export const useTask = () => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error("useTask debe usarse dentro de un TaskProvider");
    }
    return context;
};