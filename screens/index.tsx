import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Overview from './Overview';

import VoiceApp from './Voice';
import OnboardingScreenOne from './onboarding/OnboardingOne';
import OnboardingScreenTwo from './onboarding/OnboardingTwo';
import OnboardingScreenThree from './onboarding/OnboardingThree';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator 
      screenOptions={{
      headerShown: false
    }}>
      {/* <Stack.Screen name='OnboardingOne' component={OnboardingScreenOne}></Stack.Screen>
      <Stack.Screen name='OnboardingTwo' component={OnboardingScreenTwo}></Stack.Screen>
      <Stack.Screen name='OnboardingThree' component={OnboardingScreenThree}></Stack.Screen>
      <Stack.Screen name='Overview' component={Overview}></Stack.Screen>  */}
      <Stack.Screen name='Voice' component={VoiceApp}></Stack.Screen>
    </Stack.Navigator>
  )
};

export default AppStack;