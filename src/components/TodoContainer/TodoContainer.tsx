import { useState, useEffect } from "react";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";
import styles from "./TodoContainer.module.css";
import { v4 as uuidv4 } from "uuid";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

export interface Task {
  id: string;
  text: string;
  completed: boolean;
}

const TodoContainer = () => {
  // Define state for the task input and task list
  const [task, setTask] = useState<string>("");
  const [taskList, setTaskList] = useState<Task[]>([]);

  function setItem<T>(key: string, value: T) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function getItem<T>(key: string): T | null {
    const item = localStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : null;
  }

  useEffect(() => {
    const tasks = getItem<Task[]>("tasks");
    if (tasks && tasks.length > 0) {
      setTaskList(tasks);
    } else {
      setTaskList([]);
    }
    console.log(tasks);
  }, []);

  // Function to add a task
  const addTask = (text: string) => {
    //Create a new task with ID, text and completed status
    const newTask: Task = {
      id: uuidv4(), //Generate a unique ID
      text,
      completed: false, //New task is initially not completed
    };
    const updatedTaskList = [...taskList, newTask];
    setTaskList(updatedTaskList);
    setItem("tasks", updatedTaskList);
  };

  //Function to delete a task
  const removeTask = (id: string) => {
    const updatedTasks = taskList.filter((task) => task.id !== id);
    setTaskList(updatedTasks);
    setItem("tasks", updatedTasks);
  };

  //Function to check completed on a task
  const checkCompletedTask = (id: string) => {
    // Map through the taskList and update the `completed` status for the matched task
    const updatedTaskList = taskList.map((task) => {
      if (task.id === id) {
        //Return a new object with the updated 'completed' value (toggle it)
        return { ...task, completed: !task.completed };
      }
      //Return the task unchanged if it does not match the id
      return task;
    });
    setTaskList(updatedTaskList);
    setItem("tasks", updatedTaskList);
  };

  return (
    <section className={styles.todoContainer}>
      <header>
        <h1>Todo app</h1>
        <div className={styles.themeSwitchContainer}>
          <ThemeToggle />
        </div>
      </header>
      <TodoForm addTask={addTask} setTask={setTask} task={task} />
      <TodoList
        taskList={taskList}
        removeTask={removeTask}
        checkCompletedTask={checkCompletedTask}
      />
    </section>
  );
};

export default TodoContainer;
