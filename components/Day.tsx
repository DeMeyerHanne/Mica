import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import { text } from '../styles/text';

const Header = () => {
  return (
    <View style={[ scheduleApp.background ]}>
      <Text style={[ text.largeBold, scheduleApp.day ]}>
        Woensdag 28
      </Text>

      <ScrollView>
        <View style={[ scheduleApp.layout ]}>
          <Text style={[ text.extraSmall, scheduleApp.hour ]}>
            8:00
          </Text>

          <View style={[ scheduleApp.card ]}>
            <Text style={[ text.largeBold ]}>
              halloooo
            </Text>
            <Text style={[ text.extraSmall ]}>
              Doeidoeidoeidoei
            </Text>
          </View>
        </View>

        <View style={[ scheduleApp.layout ]}>
          <Text style={[ text.extraSmall, scheduleApp.hour ]}>
            8:00
          </Text>

          <View style={[ scheduleApp.card ]}>
            <Text style={[ text.largeBold ]}>
              halloooo
            </Text>
            <Text style={[ text.extraSmall ]}>
              Doeidoeidoeidoei
            </Text>
          </View>
        </View>

        <View style={[ scheduleApp.layout ]}>
          <Text style={[ text.extraSmall, scheduleApp.hour ]}>
            8:00
          </Text>

          <View style={[ scheduleApp.card ]}>
            <Text style={[ text.largeBold ]}>
              halloooo
            </Text>
            <Text style={[ text.extraSmall ]}>
              Doeidoeidoeidoei
            </Text>
          </View>
        </View>
      
        <View style={[ scheduleApp.layout ]}>
          <Text style={[ text.extraSmall, scheduleApp.hour ]}>
            8:00
          </Text>

          <View style={[ scheduleApp.card ]}>
            <Text style={[ text.largeBold ]}>
              halloooo
            </Text>
            <Text style={[ text.extraSmall ]}>
              Doeidoeidoeidoei
            </Text>
          </View>
        </View>

        <View style={[ scheduleApp.layout ]}>
          <Text style={[ text.extraSmall, scheduleApp.hour ]}>
            8:00
          </Text>

          <View style={[ scheduleApp.card ]}>
            <Text style={[ text.largeBold ]}>
              halloooo
            </Text>
            <Text style={[ text.extraSmall ]}>
              Doeidoeidoeidoei
            </Text>
          </View>
        </View>

        <View style={[ scheduleApp.layout ]}>
          <Text style={[ text.extraSmall, scheduleApp.hour ]}>
            8:00
          </Text>

          <View style={[ scheduleApp.card ]}>
            <Text style={[ text.largeBold ]}>
              halloooo
            </Text>
            <Text style={[ text.extraSmall ]}>
              Doeidoeidoeidoei
            </Text>
          </View>
        </View>
        
        <View style={[ scheduleApp.layout ]}>
          <Text style={[ text.extraSmall, scheduleApp.hour ]}>
            8:00
          </Text>

          <View style={[ scheduleApp.card ]}>
            <Text style={[ text.largeBold ]}>
              halloooo
            </Text>
            <Text style={[ text.extraSmall ]}>
              Doeidoeidoeidoei
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  )
};

export default Header;


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
    height: (Dimensions.get('screen').height + (12 * 16)) / 2,
    // height: '65%',

    marginLeft: 16,
    marginRight: 16,
    marginTop: 120,

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
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 36,
  },
})