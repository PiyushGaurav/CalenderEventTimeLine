import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import genericShadow from '../utils/genericShadow';

const Button = ({title, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        width: '80%',
        height: 50,
        margin: 10,
        borderRadius: 25,
        alignSelf: 'center',
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        ...genericShadow,
      }}
      onPress={onPress}>
      <Text
        style={{
          color: 'white',
          fontSize: 20,
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
