import React from 'react';
import {Text} from 'react-native';

const Header = ({name}) => {
  return (
    <Text
      style={{
        fontSize: 40,
        paddingTop: 20,
        paddingBottom: 10,
        fontWeight: '800',
        //alignSelf: 'center',
        color: 'green',
      }}>
      {name}
    </Text>
  );
};

export default Header;
