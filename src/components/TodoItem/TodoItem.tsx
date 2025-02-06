import styles from "./TodoItem.module.css";
import { Task } from "../TodoContainer/TodoContainer";

interface TodoItemProps {
  task: Task;
  removeTask: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ task, removeTask }) => {
  return (
    <div className={styles.cardContainer}>
      <p>{`Completed? ${task.completed}`}</p>
      <h1>{task.text}</h1>
      <button onClick={() => removeTask(task.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
