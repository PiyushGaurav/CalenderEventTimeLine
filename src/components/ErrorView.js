import React from 'react';
import {Modal, StyleSheet, View, Text} from 'react-native';
import PropTypes from 'prop-types';
import Button from './Button';

export default function ErrorView({show, errorText, onDismiss}) {
  return (
    <Modal
      onDismiss={onDismiss}
      animationType="fade"
      transparent={true}
      visible={show}>
      <View style={styles.containerStyle}>
        <View style={styles.innerContainer}>
          <Text style={styles.errorText}>{errorText}</Text>
          <Button title={'Okay'} onPress={onDismiss} />
        </View>
      </View>
    </Modal>
  );
}

ErrorView.propTypes = {
  show: PropTypes.bool.isRequired,
  errorText: PropTypes.string,
};
const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  innerContainer: {
    width: '80%',
    height: 150,
    marginHorizontal: '5%',
    marginVertical: '80%',
    backgroundColor: 'white',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 30,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    zIndex: 20,
    elevation: 20,
  },
  errorText: {
    fontSize: 20,
    fontWeight: '400',
    color: 'black',
    width: '80%',
    textAlign: 'center',
  },
});
