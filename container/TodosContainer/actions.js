import { INSERT_TODO, REMOVE_TODO } from './constants';

export const insertTodo = (todo) => ({
  type: INSERT_TODO,
  todo,
});

export const removeTodo = (todo) => ({
  type: REMOVE_TODO,
  todo,
});
