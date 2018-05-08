import React from 'react';
import { View, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import CustomizeButtom from './CustomizeButtom';

const styles = {
  container: {
    paddingBottom: 50,
    backgroundColor: '#F7F7F7',
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    height: 60,
    borderColor: '#05A5D1',
    borderWidth: 2,
    backgroundColor: '#333',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonAdd: {
    height: 60,
    borderColor: '#05A5D1',
    borderWidth: 2,
    backgroundColor: '#05A5D1',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FAFAFA',
    fontSize: 20,
    fontWeight: '600',
  },
  input: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#D7D7D7',
    height: 50,
    padding: 15,
    borderRadius: 3,
  },
};

class InsertRow extends React.Component {
  constructor() {
    super();
    this.state = {
      task: '',
    };
  };

  static navigationOptions = {
    title: 'Add task',
    headerStyle: {
      backgroundColor: '#333',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render() {
    const { insertTodo } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => {
            this.setState({ task: text });
          }}
        />
        <CustomizeButtom
          caption="Add"
          styleButton={styles.buttonAdd}
          onPressButton={() => {
            insertTodo({ task: this.state.task });
            this.props.navigation.goBack();
          }}
        />

        <CustomizeButtom
          caption="Cancel"
          styleButton={styles.button}
          onPressButton={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

InsertRow.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
    state: PropTypes.shape({
      params: PropTypes.object.isRequired,
    }),
  }).isRequired,
};

export default InsertRow;
