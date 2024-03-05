import { useDispatch } from "react-redux";
import {
  showAllAction,
  showCompletedAction,
  showIncompleteAction,
} from "../store/visibilityFilterReducer";

const TasksFilter = () => {
  const dispatch = useDispatch();
 
  const handleShowAll = () => {
    dispatch(showAllAction());
  };

  const handleFilterCompleted = () => {
    dispatch(showCompletedAction());
  };

  const handleFilterIncomplete = () => {
    dispatch(showIncompleteAction());
  };

  return (
    <div className="filter_wrapper">
      <button className="filter_wrapper_btn__all" onClick={handleShowAll}>
        All
      </button>
      <button
        className="filter_wrapper_btn__current"
        onClick={handleFilterIncomplete}
      >
        Current
      </button>
      <button
        className="filter_wrapper_btn__done"
        onClick={handleFilterCompleted}
      >
        Completed
      </button>
    </div>
  );
};
export default TasksFilter;
