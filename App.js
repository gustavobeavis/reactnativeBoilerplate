import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import PressButtom from './components/Pressbuttom';

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: 'pink',
    flex: 1,
    justifyContent: 'flex-end',
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
  buttonTextUnpressed: {
    color: '#FAFAFA',
    fontSize: 20,
    fontWeight: '600',
  },
  buttonTextPressed: {
    color: 'blue',
    fontSize: 20,
    fontWeight: '600',
  },
});

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pressed: false,
    };
  }

  onPressButton() {
    const pressed = !this.state.pressed;
    this.setState({ pressed }, () => console.log('Alterou!'));
  }

  render() {
    return (
      <View style={styles.container}>
        <PressButtom
          styleButton={styles.button}
          pressed={this.state.pressed}
          stylesButtonPressed={styles.buttonTextPressed}
          stylesButtonUnpressed={styles.buttonTextUnpressed}
          onPressButton={() => this.onPressButton()}
        />
      </View>
    );
  }
}
