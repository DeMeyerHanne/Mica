import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import React from 'react';
import AppStack from './screens'

export default function App () {
  return (
    <NavigationContainer>
      <AppStack></AppStack>
    </NavigationContainer>
  )
};