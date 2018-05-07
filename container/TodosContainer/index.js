import React from 'react';
import { connect } from 'react-redux';
import TaskList from '../../components/tasklist';
import { insertTodo } from './actions';

/** eslint-disable */
class TodosContainer extends React.Component {
  static navigationOptions = {
    title: 'Tasks',
    headerStyle: {
      backgroundColor: '#333',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render() {
    return <TaskList {...this.props} />;
  }
}

const mapDispatchToProps = {
  insertTodo,
};

const mapStateToProps = (state) => ({
  todosContainer: state.todosContainer.toJS(),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
