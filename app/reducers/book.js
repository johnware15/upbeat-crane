import { combineReducers } from 'redux';
import * as types from '../types';

const book = (
  state = {},
  action
) => {
  switch (action.type) {
    case types.CREATE_BOOK_REQUEST:
      return {
        id: action.id,
        count: action.count,
        text: action.text
      };
    case types.INCREMENT_COUNT:
      if (state.id === action.id) {
        return { ...state, count: state.count + 1 };
      }
      return state;
    case types.DECREMENT_COUNT:
      if (state.id === action.id) {
        return { ...state, count: state.count - 1 };
      }
      return state;
    default:
      return state;
  }
};

const books = (
  state = [],
  action
) => {
  switch (action.type) {
    case types.REQUEST_SUCCESS:
      if (action.data) return action.data;
      return state;
    case types.CREATE_BOOK_REQUEST:
      return [...state, book(undefined, action)];
    case types.CREATE_BOOK_FAILURE:
      return state.filter(t => t.id !== action.id);
    case types.DESTROY_TOPIC:
      return state.filter(t => t.id !== action.id);
    case types.INCREMENT_COUNT:
    case types.DECREMENT_COUNT:
      return state.map(t => book(t, action));
    default:
      return state;
  }
};

const newBook = (
  state = '',
  action
) => {
  switch (action.type) {
    case types.TYPING:
      return action.newBook;
    case types.CREATE_TOPIC_REQUEST:
      return '';
    default:
      return state;
  }
};

const bookReducer = combineReducers({
  books,
  newBook
});

export default bookReducer;
