import { NavigationContainer } from '@react-navigation/native';
import React  from 'react';
import CalendarScreen from './screens/Calendar';



export default function App() {
  return (
    <NavigationContainer>
      <CalendarScreen></CalendarScreen>
    </NavigationContainer>
  );
}
