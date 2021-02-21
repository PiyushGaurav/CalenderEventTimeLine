import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TimelineScreen from '../screens/TimelineScreen';

const Main = createStackNavigator();

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Main.Navigator
        initialRouteName="Home"
        screenOptions={{
          gestureEnabled: true,
        }}
        headerMode="none">
        <Main.Screen name="Timeline" component={TimelineScreen} />
      </Main.Navigator>
    </NavigationContainer>
  );
}

export default MainStackNavigator;
