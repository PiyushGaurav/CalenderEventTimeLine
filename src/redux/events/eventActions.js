import {UPDATE_PHOTO} from './eventTypes';

export const updateUserPhoto = (photo) => {
  return {
    type: UPDATE_PHOTO,
    payload: photo,
  };
};
