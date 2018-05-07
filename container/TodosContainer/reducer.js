import { fromJS, Map } from 'immutable';
import { INSERT_TODO } from './constants';

const initialState = fromJS({
  todos: [
    { task: 'Aprender React' },
    { task: 'Aprender React Native' },
    { task: 'Aprender React Boilerplate' },
  ],
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case INSERT_TODO: {
      const lista = state.get('todos');
      return state.set('todos', [...lista, Map({ task: action.todo.task })]);
    }

    default:
      return state;
  }
}
