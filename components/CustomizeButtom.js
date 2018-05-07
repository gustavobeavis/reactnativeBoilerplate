import React from 'react';
import { Text, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';

const CustomizeButtom = (props) => (
  <TouchableHighlight
    style={props.styleButton}
    onPress={() => props.onPressButton()}
  >
    <Text style={{ color: 'white', fontSize: 24 }}>{props.caption}</Text>
  </TouchableHighlight>
);

CustomizeButtom.propTypes = {
  styleButton: PropTypes.object.isRequired,
  onPressButton: PropTypes.func.isRequired,
  caption: PropTypes.string.isRequired,
};

export default CustomizeButtom;
