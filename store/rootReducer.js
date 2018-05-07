import { combineReducers } from 'redux';
import todosContainer from '../container/TodosContainer/reducer';

const rootReducer = combineReducers({
  todosContainer,
});

export default rootReducer;
