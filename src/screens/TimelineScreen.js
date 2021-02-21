import React, {Component} from 'react';
import {Text, TouchableOpacity, SafeAreaView, StyleSheet} from 'react-native';
import {Timeline} from 'react-native-calendars';
import moment from 'moment';
import {connect} from 'react-redux';
import {addEvents} from '../redux/events/eventActions';
import genericShadow from '../utils/genericShadow';
import Title from '../components/Title';
import DialogView from '../components/DialogView';

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
          <Title name={"Today's Events"} />
          <Timeline
            format24h={true}
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
          <Text style={styles.addtitle}>Add event</Text>
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
  addtitle: {
    color: 'white',
    fontSize: 30,
    fontWeight: '600',
    alignSelf: 'center',
  },
  addButton: {
    //width: 70,
    padding: 10,
    borderRadius: 35,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
    right: 30,
    ...genericShadow,
  },
});

const EVENTS = [
  {
    start: '2021-02-21 22:30:00',
    end: '2021-02-21 23:30:00',
    title: 'Dr. Mariana Joseph',
    summary: '3412 Piedmont Rd NE, GA 3032',
    color: '#e6add8',
  },
  {
    start: '2021-02-21 00:30:00',
    end: '2021-02-21 01:30:00',
    title: 'Visit Grand Mother',
    summary: 'Visit Grand Mother and bring some fruits.',
    color: '#ade6d8',
  },
  {
    start: '2021-02-21 02:30:00',
    end: '2021-02-21 03:20:00',
    title: 'Meeting with Prof. Behjet Zuhaira',
    summary: 'Meeting with Prof. Behjet at 130 in her office.',
    color: '#e6add8',
  },
  {
    start: '2021-02-21 04:10:00',
    end: '2021-02-21 04:40:00',
    title: 'Tea Time with Dr. Hasan',
    summary: 'Tea Time with Dr. Hasan, Talk about Project',
  },
  {
    start: '2021-02-21 01:05:00',
    end: '2021-02-21 01:35:00',
    title: 'Dr. Mariana Joseph',
    summary: '3412 Piedmont Rd NE, GA 3032',
  },
  {
    start: '2021-02-21 14:30:00',
    end: '2021-02-21 16:30:00',
    title: 'Meeting Some Friends in ARMED',
    summary: 'Arsalan, Hasnaat, Talha, Waleed, Bilal',
    color: '#d8ade6',
  },
  {
    start: '2021-02-21 01:40:00',
    end: '2021-02-21 02:25:00',
    title: 'Meet Sir Khurram Iqbal',
    summary: 'Computer Science Dept. Comsats Islamabad',
    color: '#e6bcad',
  },
  {
    start: '2021-02-21 04:10:00',
    end: '2021-02-21 04:40:00',
    title: 'Tea Time with Colleagues',
    summary: 'WeRplay',
  },
  {
    start: '2021-02-21 00:45:00',
    end: '2021-02-21 01:45:00',
    title: 'Lets Play Apex Legends',
    summary: 'with Boys at Work',
  },
  {
    start: '2021-02-21 11:30:00',
    end: '2021-02-21 12:30:00',
    title: 'Dr. Mariana Joseph',
    summary: '3412 Piedmont Rd NE, GA 3032',
  },
  {
    start: '2021-02-21 12:10:00',
    end: '2021-02-21 13:45:00',
    title: 'Merge Request to React Native Calendards',
    summary: 'Merge Timeline Calendar to React Native Calendars',
  },
];
