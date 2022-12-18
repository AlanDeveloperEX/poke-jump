import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../pages/Home';

const Stack = createStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
