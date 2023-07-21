import { v4 as uuidv4 } from 'uuid';
import {
  SET_USERS,
  DELETE_USER,
} from '../types/types';

export const setUser = (payload) => ({ type: SET_USERS, payload });
export const deleteUser = (payload) => ({ type: DELETE_USER, payload });

export const getUser = (formData) => (dispatch) => {
  const { firstName, secondName, email } = formData;
  // console.log('action', firstName, secondName, email);
  dispatch(setUser({
    id: uuidv4(), firstName, secondName, email,
  }));
};

export const removeUser = (id) => (dispatch) => {
  dispatch(deleteUser(id));
};
