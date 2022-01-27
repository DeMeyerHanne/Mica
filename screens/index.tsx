import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Overview from './Calendar';
import OnboardingScreenOne from './onboarding/OnboardingOne';
import OnboardingScreenThree from './onboarding/OnboardingThree';
import OnboardingScreenTwo from './onboarding/OnboardingTwo';
import VoiceApp from './Voice';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator 
      screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name='OnboardingOne' component={OnboardingScreenOne}></Stack.Screen>
      <Stack.Screen name='OnboardingTwo' component={OnboardingScreenTwo}></Stack.Screen>
      <Stack.Screen name='OnboardingThree' component={OnboardingScreenThree}></Stack.Screen>
      <Stack.Screen name='Voice' component={VoiceApp}></Stack.Screen>
      <Stack.Screen name='Overview' component={Overview}></Stack.Screen>
    </Stack.Navigator>
  )
};

export default AppStack;