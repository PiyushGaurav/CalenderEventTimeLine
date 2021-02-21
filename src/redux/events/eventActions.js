import {ADD_EVENT} from './eventTypes';

export const addEvents = (event) => {
  return {
    type: ADD_EVENT,
    payload: event,
  };
};
