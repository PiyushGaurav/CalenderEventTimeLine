import React from 'react';
import {Text} from 'react-native';

const Title = ({name}) => {
  return (
    <Text
      style={{
        fontSize: 40,
        paddingTop: 20,
        paddingBottom: 10,
        fontWeight: '800',
        alignSelf: 'center',
        color: 'green',
      }}>
      {name}
    </Text>
  );
};

export default Title;
