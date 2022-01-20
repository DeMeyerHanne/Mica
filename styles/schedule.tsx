import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';

export const schedule = StyleSheet.create({
  background: {
    width: (Dimensions.get('screen').width - 24),
    height: 225,

    marginLeft: 16,
    marginRight: 16,
    marginTop: 16,
    marginBottom: 28,

    backgroundColor: '#fff',
    borderRadius: 15,
  },
})