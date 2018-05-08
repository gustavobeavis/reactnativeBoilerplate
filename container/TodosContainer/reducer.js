import { fromJS } from 'immutable';
import { INSERT_TODO, REMOVE_TODO } from './constants';

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
      return state.updateIn(['todos'], (array) => array.push(action.todo));
    }
    case REMOVE_TODO: {
      let lista = state.get('todos').toJS();
      lista = lista.filter((item) => item.task !== action.todo.task);
      return state.set('todos', fromJS(lista));
    }

    default:
      return state;
  }
}
