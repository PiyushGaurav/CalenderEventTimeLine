import React, {Component} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import TextField from '../components/TextField';
import Button from '../components/Button';
import {addEvents} from '../redux/events/eventActions';
import {connect} from 'react-redux';
import moment from 'moment';
import DateTimePicker from 'react-native-modal-datetime-picker';
import Title from '../components/Title';
import genericShadow from '../utils/genericShadow';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ErrorView from '../components/ErrorView';

class AddEventScreen extends Component {
  state = {
    title: '',
    summary: '',
    currentDay: moment().format(),
    start: moment().format(),
    end: moment().format(),
    isDateTimePickerVisible: false,
    pickStartDateSelected: true,
    error: false,
  };

  addEvent = async () => {
    const {title, summary, start, end} = this.state;
    const {eventsData} = this.props;
    let test;
    eventsData.events.forEach((event) => {
      const startTime = event.start;
      const endTime = event.end;
      test = moment(start).isBetween(startTime, endTime);
    });
    if (test) {
      this.setState({
        error: true,
      });
      //alert('You already have an event at this time');
    } else {
      const payload = [
        {
          start,
          end,
          title,
          summary,
          color: '#ade6d8',
        },
      ];
      this.props.addEvents(payload);
      try {
        await AsyncStorage.setItem(
          'LOCAL_EVENTS',
          JSON.stringify([...eventsData.events, ...payload]),
        );
      } catch (e) {
        console.log(e);
      }
      this.props.navigation.goBack();
    }
  };

  _showStartDateTimePicker = () =>
    this.setState({
      isDateTimePickerVisible: true,
      pickStartDateSelected: true,
    });

  _hideDateTimePicker = () =>
    this.setState({
      isDateTimePickerVisible: false,
    });

  _showEndDateTimePicker = () =>
    this.setState({
      isDateTimePickerVisible: true,
      pickStartDateSelected: false,
    });

  onChangeTitle = (title) => {
    this.setState({title});
  };

  onChangeSummary = (summary) => {
    this.setState({summary});
  };
  _handleStartDatePicked = (date) => {
    this.setState({
      start: `${date}`,
    });
    console.log(this.state);
    this._hideDateTimePicker();
  };

  _handleEndDatePicked = (date) => {
    this.setState({
      end: `${date}`,
    });
    console.log(this.state);
    this._hideDateTimePicker();
  };

  errorModal = () => {
    return (
      <ErrorView
        show={this.state.error}
        errorText={'You already have an event at this time'}
        onDismiss={() => {
          this.setState({
            error: false,
          });
        }}
      />
    );
  };

  render() {
    const {
      title,
      summary,
      start,
      end,
      isDateTimePickerVisible,
      pickStartDateSelected,
    } = this.state;

    return (
      <>
        {pickStartDateSelected ? (
          <DateTimePicker
            isVisible={isDateTimePickerVisible}
            onConfirm={this._handleStartDatePicked}
            onCancel={this._hideDateTimePicker}
            mode="time"
          />
        ) : (
          <DateTimePicker
            isVisible={isDateTimePickerVisible}
            onConfirm={this._handleEndDatePicked}
            onCancel={this._hideDateTimePicker}
            mode="time"
          />
        )}
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: 'white',
          }}>
          <Title name={'Add Event'} />
          <TextField
            value={title}
            placeholder={'Enter title of event'}
            onChangeText={this.onChangeTitle}
          />
          <TextField
            value={summary}
            placeholder={'Enter summary of event'}
            onChangeText={this.onChangeSummary}
          />
          <View style={styles.timeSection}>
            <View>
              <Text style={styles.timeTitle}>Start</Text>
              <TouchableOpacity
                onPress={() => this._showStartDateTimePicker()}
                style={styles.timeContainer}>
                <Text style={{fontSize: 19}}>
                  {moment(start).format('h:mm A')}
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.timeTitle}>End</Text>
              <TouchableOpacity
                onPress={() => this._showEndDateTimePicker()}
                style={styles.timeContainer}>
                <Text style={{fontSize: 19}}>
                  {moment(end).format('h:mm A')}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <Button onPress={this.addEvent} title={'ADD EVENT'} />
        </View>
        {this.errorModal()}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    eventsData: state.events,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addEvents: (event) => dispatch(addEvents(event)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddEventScreen);

const styles = StyleSheet.create({
  timeSection: {
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    margin: 10,
    borderRadius: 25,
    alignSelf: 'center',
    width: '80%',
    ...genericShadow,
  },
  timeTitle: {
    color: 'grey',
    padding: 10,
    fontSize: 20,
    fontWeight: '600',
  },
  timeContainer: {
    borderRadius: 5,
    padding: 10,
  },
  time: {
    fontSize: 25,
    padding: 15,
  },
});
