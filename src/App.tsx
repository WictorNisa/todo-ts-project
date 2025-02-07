import "./App.css";
import TodoContainer from "./components/TodoContainer/TodoContainer";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <TodoContainer />
      </div>
    </ThemeProvider>
  );
}

export default App;
