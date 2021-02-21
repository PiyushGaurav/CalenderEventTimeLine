import React from 'react';
import {Modal, StyleSheet, View, Text} from 'react-native';
import PropTypes from 'prop-types';
import Button from './Button';
import moment from 'moment';
import Detail from './Detail';

export default function DialogView({show, event, onDismiss}) {
  return (
    <Modal
      onDismiss={onDismiss}
      animationType="fade"
      transparent={true}
      visible={show}>
      <View style={styles.containerStyle}>
        <View style={styles.innerContainer}>
          <Detail title={'Title'} value={event.title} />
          <Detail title={'Category'} value={event.category} />
          <Detail title={'Summary'} value={event.summary} />
          <Detail
            title={'Time'}
            value={`${moment(event.start).hour()} : ${moment(
              event.start,
            ).minute()} - ${moment(event.end).hour()} : ${moment(
              event.end,
            ).minute()}`}
          />
          <Button title={'Okay'} onPress={onDismiss} />
        </View>
      </View>
    </Modal>
  );
}

DialogView.propTypes = {
  show: PropTypes.bool.isRequired,
  text: PropTypes.string,
};
const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  innerContainer: {
    width: '90%',
    padding: '5%',
    marginHorizontal: '5%',
    marginVertical: '80%',
    backgroundColor: 'white',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 20,
    zIndex: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: '400',
    color: 'black',
    width: '80%',
    textAlign: 'center',
  },
});
