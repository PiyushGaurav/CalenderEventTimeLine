import React, {Component} from 'react';
import {View} from 'react-native';
import TextField from '../components/TextField';
import Button from '../components/Button';
import {addEvents} from '../redux/events/eventActions';
import {connect} from 'react-redux';

class AddEventScreen extends Component {
  state = {
    title: '',
    summary: '',
    start: '',
    end: '',
  };

  addEvent = () => {
    this.props.addEvents([
      {
        start: '2021-02-21 00:30:00',
        end: '2021-02-21 01:30:00',
        title: 'Visit Grand Mother',
        summary: 'Visit Grand Mother and bring some fruits.',
        color: '#ade6d8',
      },
    ]);
  };

  onChangeTitle = (title) => {
    this.setState({title});
  };

  onChangeSummary = (title) => {
    this.setState({title});
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          backgroundColor: 'white',
        }}>
        <TextField
          value={this.state.title}
          placeholder={'Enter title of event'}
          onChangeText={this.onChangeTitle}
        />
        <TextField
          value={this.state.summary}
          placeholder={'Enter summary of event'}
          onChangeText={this.onChangeSummary}
        />
        <Button onPress={this.addEvent} title={'ADD EVENT'} />
      </View>
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
