import styles from "./TodoItem.module.css";
import { Task } from "../TodoContainer/TodoContainer";
import completedImg from "../../assets/img/completedImg.png";
import notCompletedImg from "../../assets/img/notCompletedImg.png";

interface TodoItemProps {
  task: Task;
  removeTask: (id: string) => void;
  checkCompletedTask: (id:string) => void
}

const TodoItem: React.FC<TodoItemProps> = ({ task, removeTask, checkCompletedTask }) => {

  return (
    <div className={styles.cardContainer}>
      <div>
        {task.completed ? (
          <img src={completedImg} onClick={() => checkCompletedTask(task.id)}/>
        ) : (
          <img src={notCompletedImg} onClick={() => checkCompletedTask(task.id)}/>
        )}
      </div>
      <h1>{task.text}</h1>
      <button onClick={() => removeTask(task.id)}>
        <span className="material-symbols-outlined">close</span>
      </button>
    </div>
  );
};

export default TodoItem;
