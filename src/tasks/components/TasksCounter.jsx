import { useSelector } from "react-redux";

const TasksCounter = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const currentTasks = tasks.filter((task) => task.done === false);
  const completedTasks = tasks.filter((task) => task.done === true);

  return (
    <div className="counter_main">
      <h2 className="counter_main__current">Current: {currentTasks.length}</h2>
      <h2 className="counter_main__done">Completed: {completedTasks.length}</h2>
    </div>
  );
};
export default TasksCounter;
