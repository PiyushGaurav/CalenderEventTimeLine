import React, {Component} from 'react';
import {
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {Timeline} from 'react-native-calendars';
import moment from 'moment';
import {connect} from 'react-redux';
import {addEvents} from '../redux/events/eventActions';
import genericShadow from '../utils/genericShadow';
import DialogView from '../components/DialogView';
import Header from '../components/Header';

class TimelineScreen extends Component {
  state = {
    currentDate: moment(new Date()).format('YYYY-MM-DD'),
    event: null,
    showEvent: false,
  };

  eventModal = () => {
    return (
      <DialogView
        show={this.state.showEvent}
        event={this.state.event}
        onDismiss={() => this.setShow(false)}
      />
    );
  };

  setShow = (showEvent) => {
    this.setState({
      showEvent,
    });
  };

  onTapEvent = (event) => {
    this.setState({
      event,
    });
    this.setShow(true);
  };

  render() {
    return (
      <>
        <SafeAreaView>
          <Header name={"Today's Events"} />
          <Timeline
            format24h={false}
            eventTapped={(e) => this.onTapEvent(e)}
            events={this.props.eventsData.events.filter((event) =>
              moment(event.start).isSame(this.state.currentDate, 'day'),
            )}
            scrollToFirst={true}
            start={0}
            end={24}
          />
        </SafeAreaView>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('AddEvent');
          }}
          style={styles.addButton}>
          <Image source={require('../assets/plus.png')} style={styles.plus} />
        </TouchableOpacity>
        {this.state.showEvent && this.eventModal()}
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

export default connect(mapStateToProps, mapDispatchToProps)(TimelineScreen);

const styles = StyleSheet.create({
  plus: {
    width: 70,
    height: 70,
  },
  addButton: {
    borderRadius: 35,
    justifyContent: 'center',
    position: 'absolute',
    bottom: 30,
    right: 30,
    ...genericShadow,
  },
});
