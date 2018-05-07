import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';

const configureStore = () =>
  createStore(rootReducer, composeWithDevTools(applyMiddleware()));

export default configureStore;
