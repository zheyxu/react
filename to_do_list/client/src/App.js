import { PopupLayout } from "./layout/PopupLayout";
import { TodosLayout } from "./layout/TodosLayout";
import { useTodoHooks } from "./hooks/useTodoHooks";

function App() {
  const {
    todos,
    completeTodo,
    deleteTodo,
    popupActive,
    setPopupActive,
    setNewTodo,
    newTodo,
    addTodo,
  } = useTodoHooks({API_BASE: "http://localhost:3003"});

  return (
    <div className="App">
      <h1>Welcome, Zeo </h1>
      <h4>Your Tasks</h4>
      <TodosLayout
        todos={todos}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
      />
      <PopupLayout
        popupActive={popupActive}
        setPopupActive={setPopupActive}
        setNewTodo={setNewTodo}
        newTodo={newTodo}
        addTodo={addTodo}
      />
    </div>
  );
}

export default App;
