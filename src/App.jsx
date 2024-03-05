import { Provider } from "react-redux";
import TodoList from "./tasks/components/TodoList";
import { store } from "./tasks/store/store";

function App() {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
}

export default App;
