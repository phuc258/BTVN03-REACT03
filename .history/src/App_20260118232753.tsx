import "./App.css";
import { TodoProvider } from "./context/TodoContext";
import MainRoute from "./routes/MainRoute";

function App() {
  return (
    <TodoProvider>
      <MainRoute />
    </TodoProvider>
  );
}

export default App;