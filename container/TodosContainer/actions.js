import { INSERT_TODO } from './constants';

export const insertTodo = (todo) => ({
  type: INSERT_TODO,
  todo,
});
