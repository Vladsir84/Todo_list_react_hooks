import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTaskAction, updateTaskAction } from "../store/tasksReducer";

const TasksList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const filteredTasks = useSelector((state) => state.visiblity);
  const [tasksList, setTasksList] = useState(tasks);

  useEffect(() => {
    if (filteredTasks === "current") {
      setTasksList(tasks.filter((task) => !task.done));
    } else if (filteredTasks === "completed") {
      setTasksList(tasks.filter((task) => task.done));
    } else {
      setTasksList(tasks);
    }
  }, [filteredTasks, tasks]);

  const removeTask = (task) => {
    dispatch(removeTaskAction(task.id));
  };

  const updateTask = (task) => {
    dispatch(updateTaskAction(task.id));
  };

  return (
    <ul className="list">
      {tasksList.map((task) => (
        <li
          key={task.id}
          className={`list-item ${task.done ? "list-item_done" : ""}`}
        >
          <input
            type="checkbox"
            className="list-item__checkbox"
            checked={task.done}
            onChange={() => updateTask(task)}
          />
          <span className="list-item__text" onClick={() => updateTask(task)}>
            {task.name}
          </span>
          <button
            className="list-item__delete-btn"
            onClick={() => removeTask(task)}
          />
        </li>
      ))}
    </ul>
  );
};

export default TasksList;
