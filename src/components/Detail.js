import React from 'react';
import {Text, View} from 'react-native';
import PropTypes from 'prop-types';

const Detail = ({title, value}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingTop: 10,
        alignItems: 'flex-start',
      }}>
      <View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '800',
            color: 'black',
          }}>
          {`${title} : `}
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'flex-start',
        }}>
        <Text
          style={{
            fontSize: 20,
            paddingBottom: 10,
            fontWeight: '800',
            color: 'grey',
          }}>
          {value}
        </Text>
      </View>
    </View>
  );
};
Detail.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
export default Detail;
