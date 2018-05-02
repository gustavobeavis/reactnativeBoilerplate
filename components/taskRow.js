import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

const TaskRow = ({ todo }) => (
  <View style={styles.container}>
    <Text style={styles.label}>{todo.task}</Text>
  </View>
);

const styles = StyleSheet.flatten({
  container: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E7E7E7',
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  label: {
    fontSize: 20,
    fontWeight: '300',
    width: '100%',
  },
});

TaskRow.propTypes = {
  todo: PropTypes.shape({
    task: PropTypes.string.isRequired,
  }).isRequired,
};

export default TaskRow;
