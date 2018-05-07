import React from 'react';
import { Provider } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import configureStore from './store/configureStore';
import TodosContainer from './container/TodosContainer/index';
import InsertRow from './components/InsertRow';

const initialState = {};
const store = configureStore(initialState);

const App = (props) => (
  <Provider store={store}>
    <TodosContainer {...props} />
  </Provider>
);

export default StackNavigator(
  {
    Home: {
      screen: App,
    },
    Task: {
      screen: InsertRow,
    },
  },
  {
    initialRouteName: 'Home',
  }
);
