import styles from "./TodoForm.module.css";
import { FC } from "react";

//Define the props that TodoForm will accept
interface TodoFormProps {
  addTask: (text: string) => void; //Function to add task
  setTask: (text: string) => void; //Function to set the task input
  task: string; //Current value of the input
}

const TodoForm: FC<TodoFormProps> = ({ addTask, setTask, task }) => {
  //Function to call on parent addTask function when form is submitted
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task); //Call the addTask function passed from parent
      setTask(""); //Clear the input field after adding a task
    }
  };
  return (
    <div className={styles.formWrapper}>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="text"
          id=""
          placeholder="Add new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Add task</button>
      </form>
    </div>
  );
};

export default TodoForm;
