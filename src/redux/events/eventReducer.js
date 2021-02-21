import {ADD_EVENT} from './eventTypes';

const initialState = {
  events: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EVENT:
      return {
        ...state,
        events: [...state.events, ...action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
