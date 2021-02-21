import React from 'react';
import {Text, View} from 'react-native';

const Title = ({name}) => {
  return (
    <View
      style={{
        paddingTop: 20,
        paddingBottom: 10,
      }}>
      <Text
        style={{
          fontSize: 40,
          textAlign: 'center',
          color: 'green',
          fontWeight: '800',
        }}>
        {name}
      </Text>
    </View>
  );
};

export default Title;
