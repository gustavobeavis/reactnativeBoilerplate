import React from 'react';
import { Text, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';

export const TEXTBUTTON = {
  FOLOWWING: 'Folowing',
  FOLLOWED: 'Followed',
};

const PressButtom = (props) => (
  <TouchableHighlight
    style={props.styleButton}
    onPress={() => props.onPressButton()}
  >
    <Text
      style={
        props.pressed ? props.stylesButtonPressed : props.stylesButtonUnpressed
      }
    >
      {props.pressed ? TEXTBUTTON.FOLOWWING : TEXTBUTTON.FOLLOWED}
    </Text>
  </TouchableHighlight>
);

PressButtom.propTypes = {
  styleButton: PropTypes.object.isRequired,
  pressed: PropTypes.bool.isRequired,
  stylesButtonPressed: PropTypes.object.isRequired,
  stylesButtonUnpressed: PropTypes.object.isRequired,
  onPressButton: PropTypes.func.isRequired,
};

export default PressButtom;
