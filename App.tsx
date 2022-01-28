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




// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * Generated with the TypeScript template
//  * https://github.com/react-native-community/react-native-template-typescript
//  *
//  * @format
//  */
//  import React, { useCallback, useEffect, useState } from 'react';
//  import {Button,SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,TextInput,useColorScheme,View,} from 'react-native';
// import Appointment from './models/appointment';
//  import { getDBConnection, getAppointmentItems, saveAppointmentItems, createTable, deleteAppointmentItem } from './utils/db';
 
 
//  const App = () => {
//    const isDarkMode = useColorScheme() === 'dark';

//    const [todos, setTodos] = useState<Appointment[]>([]);
//    const [newTodo, setNewTodo] = useState('');

//    const loadDataCallback = useCallback(async () => {
//      try {
//        const initTodos = [{ id: '0', title: 'Shoppen', hour: '12:30', date: '12/02/2022' }, { id: '1', title: 'Eten', hour: '14:30', date: '17/02/2022' }, { id: '2', title: 'Slapen', hour: '21:45', date: '19/02/2022' }];
//        const db = await getDBConnection();
//        await createTable(db);
//        const storedTodoItems = await getAppointmentItems(db);
//        if (storedTodoItems.length) {
//          setTodos(storedTodoItems);
//        } else {
//          await saveAppointmentItems(db, initTodos);
//          setTodos(initTodos);
//        }
//      } catch (error) {
//        console.error(error);
//      }
//    }, []);
//    useEffect(() => {
//      loadDataCallback();
//    }, [loadDataCallback]);

//    return (
//      <SafeAreaView>
//        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//        <ScrollView
//          contentInsetAdjustmentBehavior="automatic">
//          <View style={[styles.appTitleView]}>
//            <Text style={styles.appTitleText}> ToDo Application </Text>
//          </View>
//          <View style={styles.textInputContainer}>
//            <TextInput style={styles.textInput} value={newTodo} onChangeText={text => setNewTodo(text)} />
//            <Button
//              title="Add ToDo"
//              color="#841584"
//              accessibilityLabel="add todo item"
//            />
//          </View>
//        </ScrollView>
//      </SafeAreaView>
//    );
//  };
//  const styles = StyleSheet.create({
//    appTitleView: {
//      marginTop: 20,
//      justifyContent: 'center',
//      flexDirection: 'row',
//    },
//    appTitleText: {
//      fontSize: 24,
//      fontWeight: '800'
//    },
//    textInputContainer: {
//      marginTop: 30,
//      marginLeft: 20,
//      marginRight: 20,
//      borderRadius: 10,
//      borderColor: 'black',
//      borderWidth: 1,
//      justifyContent: 'flex-end'
//    },
//    textInput: {
//      borderWidth: 1,
//      borderRadius: 5,
//      height: 30,
//      margin: 10,
//      backgroundColor: 'pink'
//    },
//  });
//  export default App;