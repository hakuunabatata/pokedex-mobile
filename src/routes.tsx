import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Pokedex from './Pokedex';

const Stack = createStackNavigator();

const Routes: React.FC = () => (
  <Stack.Navigator
    initialRouteName="Pokedex"
    screenOptions={{
      headerShown: false,
      cardStyle: {backgroundColor: '#312e38'},
    }}>
    <Stack.Screen name="Pokedex" component={Pokedex} />
  </Stack.Navigator>
);

export default Routes;
