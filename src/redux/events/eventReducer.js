import {ADD_EVENT} from './eventTypes';

const initialState = {
  events: [
    {
      start: '2021-02-21 22:30:00',
      end: '2021-02-21 23:30:00',
      title: 'Dr. Mariana Joseph',
      summary: '3412 Piedmont Rd NE, GA 3032',
      color: '#e6add8',
    },
  ],
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
