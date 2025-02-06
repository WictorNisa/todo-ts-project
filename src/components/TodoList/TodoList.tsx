import TodoItem from "../TodoItem/TodoItem";
import styles from "./TodoList.module.css";
import { Task } from "../TodoContainer/TodoContainer";

//Define the props that TodoList will accept
interface TodoListProps {
  taskList: Task[];
  removeTask: (id: string) => void;
}
const TodoList: React.FC<TodoListProps> = ({ taskList, removeTask }) => {
  return (
    <div className={styles.todoDisplayContainer}>
      {taskList.map((task) => (
        <TodoItem key={task.id} removeTask={removeTask} task={task} />
      ))}
    </div>
  );
};

export default TodoList;
