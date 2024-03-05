const defaultState = {
  tasks: [],
};

const ADD_TASK = "ADD_TASK";
const UPDATE_TASK = "UPDATE_TASK";
const REMOVE_TASK = "REMOVE_TASK";

export const tasksReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload ? { ...task, done: !task.done } : task
        ),
      };
    case REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    default:
      return state;
  }
};

export const addTaskAction = (payload) => ({ type: ADD_TASK, payload });
export const updateTaskAction = (payload) => ({ type: UPDATE_TASK, payload });
export const removeTaskAction = (payload) => ({
  type: REMOVE_TASK,
  payload,
});
