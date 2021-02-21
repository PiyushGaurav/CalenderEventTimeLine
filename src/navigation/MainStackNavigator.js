import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TimelineScreen from '../screens/TimelineScreen';
import AddEventScreen from '../screens/AddEventScreen';
import {addEvents} from '../redux/events/eventActions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import Loader from '../components/Loader';

const Main = createStackNavigator();

function MainStackNavigator() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(readItem, []);
  function readItem() {
    AsyncStorage.getItem('LOCAL_EVENTS')
      .then((itemValue) => {
        console.log('LOCAL_EVENTS : ', itemValue);
        if (itemValue) {
          dispatch(addEvents(JSON.parse(itemValue)));
        }
      })
      .then(() => {
        setLoading(false);
      });
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <NavigationContainer>
      <Main.Navigator
        initialRouteName="Home"
        screenOptions={{
          gestureEnabled: true,
        }}
        headerMode="none">
        <Main.Screen name="Timeline" component={TimelineScreen} />
        <Main.Screen name="AddEvent" component={AddEventScreen} />
      </Main.Navigator>
    </NavigationContainer>
  );
}

export default MainStackNavigator;
