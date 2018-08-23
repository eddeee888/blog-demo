export default function createReducer(initialState, actionHandlers) {
  return function reducer(state = initialState, action = {}) {
    if (Object.prototype.hasOwnProperty.call(actionHandlers, action.type)) {
      return actionHandlers[action.type](state, action);
    }
    return state;
  };
}
