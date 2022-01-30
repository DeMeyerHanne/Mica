import React from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Day from '../components/Day';
import Header from '../components/Header';

import { container } from '../styles/container';


const Overview = ({navigation}: any) => {
  return (
    <View style={[ container.container ]}>
      <LinearGradient
        colors={['#D4E5FA', '#C9E5F1', '#DEDBFF']}
        style={[ styles.background, {width: Dimensions.get('screen').width, height: Dimensions.get('screen').height}]}
      />

      <Header />
      <Day />

      <View>
        <TouchableOpacity 
          onPress={() => {navigation.navigate('Voice');}}
          style={[ micButton.button ]}
        >
          <Text 
            style={{ fontSize: 38, backgroundColor: '#3F3D56', color: '#FFF', borderRadius: 50, width: 64, height: 64, textAlignVertical: 'center', textAlign: 'center' }}
          >
            +
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Overview;

const styles = StyleSheet.create({
  button: {
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },

  text: {
    backgroundColor: 'transparent',
    fontSize: 15,
    color: '#fff',
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  selectedDate: {
    backgroundColor: '#3F3D56',
    color: '#FFF',
    
    width: 36,
    height: 36,

    borderRadius: 50,

    fontSize: 20,
    fontWeight: 'normal',

    textAlign: 'center',
    textAlignVertical: 'center'
  },

  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
});

const scheduleApp = StyleSheet.create({
   background: {
    width: (Dimensions.get('screen').width - 24),
    height: (Dimensions.get('screen').height + (8 * 16)) / 2,
    // height: '65%',

    marginLeft: 16,
    marginRight: 16,

    backgroundColor: '#FFFFFF99',

    borderColor: '#FFFFFF40',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 15,
  },

  day: {
    marginBottom: 24,
    marginLeft: 12,
    marginTop: 8,       
  },

  hour: {
    
  },

  card: {
    width: (Dimensions.get('screen').width - 100),
    height: 88,
    padding: 8,
    marginBottom: 16,

    backgroundColor: '#D4E5FA',

    borderRadius: 15,
  },

  layout: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

const micButton = StyleSheet.create({
  button: {
    bottom: 40,
    left: 140
  },
})