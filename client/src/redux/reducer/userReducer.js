import {
  SET_USERS,
  DELETE_USER
  ,
} from '../types/types';

const initialState = localStorage.getItem('users')
  ? JSON.parse(localStorage.getItem('users'))
  : [];

export default function userReducer(state = initialState, action) {
  const { type, payload } = action;

  let updatedState = null;
  let filteredState = null;

  switch (type) {
    case SET_USERS:
      // console.log('Payload', payload);
      updatedState = [...state, payload];// payload === one user
      // Сохранение данных в локальное хранилище
      localStorage.setItem('users', JSON.stringify(updatedState));
      return updatedState;
    case DELETE_USER:
      filteredState = state.filter((user) => user.id !== payload);// payload === user.id
      // Сохранение данных в локальное хранилище
      localStorage.setItem('users', JSON.stringify(filteredState));
      return filteredState;
    default:
      return state;
  }
}
