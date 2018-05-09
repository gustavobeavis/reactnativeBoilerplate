import React from 'react';
import { Text, StyleSheet, View, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import Render from './render';

const TaskRow = ({ todo, removeTodo }) => (
  <View style={styles.container}>
    <Text style={styles.label}>{todo.task}</Text>
    <TouchableHighlight
      style={styles.doneButton}
      onPress={() => removeTodo(todo)}
    >
      <Text>Done</Text>
    </TouchableHighlight>
  </View>
);

export default TaskRow;
