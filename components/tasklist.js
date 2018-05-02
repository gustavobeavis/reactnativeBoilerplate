import React from 'react';
import { StyleSheet, View, ListView } from 'react-native';
import PropTypes from 'prop-types';
import TaskRow from './taskRow';
import CustomizeButtom from './CustomizeButtom';

const styles = StyleSheet.flatten({
  container: {
    paddingTop: 40,
    backgroundColor: '#F7F7F7',
    flex: 1,
    justifyContent: 'flex-start',
  },
  button: {
    height: 60,
    borderColor: '#05A5D1',
    borderWidth: 2,
    backgroundColor: '#333',
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FAFAFA',
    fontSize: 20,
    fontWeight: '600',
  },
});

export default class TaskList extends React.Component {
  constructor(props, context) {
    super(props, context);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.state = {
      dataSource: ds.cloneWithRows(this.props.todos),
    };
  }

  renderRow(todo) {
    return <TaskRow todo={todo} />;
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          key={this.props.todos}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
        />

        <CustomizeButtom
          caption="Add"
          styleButton={styles.button}
          onPressButton={() => this.props.onAddStarted()}
        />
      </View>
    );
  }
}

TaskList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onAddStarted: PropTypes.func.isRequired,
};
