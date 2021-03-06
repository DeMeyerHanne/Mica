import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';

export const card = StyleSheet.create({
  background: {
    width: (Dimensions.get('screen').width - 24),

    marginTop: 16,
    marginBottom: 10,

    backgroundColor: '#fff',

    alignItems: 'center',
    flex: 1,
  },
  
  year: {
    alignItems: 'center',
  },

  months: {
    flexDirection: 'row', 
    justifyContent: 'space-evenly', 
    alignItems: 'center',
  },

  otherMonth: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center'
  },

  arrowIcon: {
    height: 32,
    width: 32,
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
  }
})