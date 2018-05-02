import React from 'react';
import { View, Text } from 'react-native';
import TaskList from './components/tasklist';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pressed: false,
      todos: [
        { task: 'Aprender React' },
        { task: 'Aprender React Native' },
        { task: 'Aprender React Boilerplate' },
      ],
    };
  }

  onPressButton() {
    const pressed = !this.state.pressed;
    this.setState({ pressed }, () => console.log('Alterou!'));
  }

  render() {
    return (
      <TaskList todos={this.state.todos} onAddStarted={(e) => console.log(e)} />
    );
  }
}
