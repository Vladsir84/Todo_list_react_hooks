import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTaskAction } from "../store/tasksReducer";

const CreateTaskInput = () => {
  const [value, setValue] = useState("");
  const [message, setMessage] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setMessage(false);
    setValue(event.target.value);
  };

  const addTask = () => {
    if (value.length <= 30) {
      const task = {
        id: Date.now(),
        name: value,
        done: false,
      };
      dispatch(addTaskAction(task));
      setValue("");
    } else {
      setMessage(true);
    }
  };

  return (
    <>
      {message && (
        <div className="message">
          The name must not contain more than 30 characters
        </div>
      )}
      <div className="create-task">
        <input
          type="text"
          value={value}
          className="create-task__input"
          onChange={handleChange}
        />
        <button className="btn create-task__btn" onClick={addTask}>
          Create
        </button>
      </div>
    </>
  );
};

export default CreateTaskInput;
