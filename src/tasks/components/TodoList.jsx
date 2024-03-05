import CreateTaskInput from "./CreateTaskInput";
import TasksCounter from "./TasksCounter";
import TasksFilter from "./TasksFilter";
import TasksList from "./TasksList";

const TodoList = () => {
  return (
    <>
      <h1 className="title">Todo List</h1>
      <TasksCounter />
      <TasksFilter />
      <main className="todo-list">
        <CreateTaskInput />
        <TasksList />
      </main>
    </>
  );
};

export default TodoList;
