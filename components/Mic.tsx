import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Mic () {
  return (
    <View>
        <TouchableOpacity 
          onPress={() => console.log('hallo')}
          style={[ micButton.button ]}
        >
          {/* <Ionicons name="mic" size={28} /> */}
          <Text style={{ backgroundColor: '#3F3D56', color: '#FFF', borderRadius: 50, width: 64, height: 64, textAlignVertical: 'center', textAlign: 'center' }}>Mic</Text>
        </TouchableOpacity>
      </View>
  )
}

const micButton = StyleSheet.create({
  button: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 36,
  },
})