const SHOW_ALL = 'SHOW_ALL';
const SHOW_COMPLETED = 'SHOW_COMPLETED';
const SHOW_INCOMPLETE = 'SHOW_INCOMPLETE';

export const visibilityFilterReducer = (state = 'all', action) => {
  switch (action.type) {
    case SHOW_ALL:
      return 'all';
    case SHOW_COMPLETED:
      return 'completed';
    case SHOW_INCOMPLETE:
      return 'current';
    default:
      return state;
  }
};

export const showAllAction = () => ({ type: SHOW_ALL });
export const showCompletedAction = () => ({ type: SHOW_COMPLETED });
export const showIncompleteAction = () => ({ type: SHOW_INCOMPLETE });
