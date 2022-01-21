import React  from 'react';
import { View, StyleSheet, Button, Dimensions, Text, TouchableOpacity, ScrollView } from 'react-native';

import { text } from '../styles/text';
import { container } from '../styles/container';
import { card } from '../styles/header';


export default function CalendarScreen() {
  // Text to speech
  return (
    <View style={[ container.container, { backgroundColor: 'lightblue', } ]}>
      {/* Header card */}
      <View style={[ card.background ]}>
        <Text style={[ text.extraSmall, { alignSelf: 'center', marginBottom: 4, paddingTop: 12} ]}>
          2022
        </Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            {/* <Ionicons name="arrow-back-outline" style={[ card.arrowIcon ]}/> */}
            <Text style={[ text.smallBlack ]}>Dec</Text>
          </TouchableOpacity>

          <Text style={[ text.extraLarge ]}>Januari</Text>
          
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            <Text style={[ text.smallBlack ]}>Feb</Text>
            {/* <Ionicons name="arrow-forward-outline" style={[ card.arrowIcon ]}/> */}
          </TouchableOpacity>
        </View>

        <ScrollView horizontal={true} contentContainerStyle={{ paddingHorizontal: 16}}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 16}}>
              <Text style={[ text.extraSmall ]}>
                za
              </Text>
              <Text style={[ text.large ]}>
                25
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 16}}>
              <Text style={[ text.extraSmall ]}>
                zo
              </Text>
              <Text style={[ text.large ]}>
                26
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 16}}>
              <Text style={[ text.extraSmall ]}>
                ma
              </Text>
              <Text style={[ text.large ]}>
                27
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 16}}>
              <Text style={[ text.extraSmall ]}>
                di
              </Text>
              <Text style={[ text.large ]}>
                27
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 16}}>
              <Text style={[ text.extraSmall ]}>
                wo
              </Text>
              <Text style={[ styles.selectedDate ]}>
                28
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 16}}>
              <Text style={[ text.extraSmall ]}>
                do
              </Text>
              <Text style={[ text.large ]}>
                30
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 16}}>
              <Text style={[ text.extraSmall ]}>
                vr
              </Text>
              <Text style={[ text.large ]}>
                31
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 16}}>
              <Text style={[ text.extraSmall ]}>
                za
              </Text>
              <Text style={[ text.large ]}>
                1
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 16}}>
              <Text style={[ text.extraSmall ]}>
                zo
              </Text>
              <Text style={[ text.large ]}>
                2
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

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
        </ScrollView>
      </View>

      <TouchableOpacity
        style={[ micButton.button ]}
        onPress={() => { console.log('red')}}
      >
        <Text style={{ backgroundColor: '#3F3D56', color: '#FFF', borderRadius: 50, width: 64, height: 64, textAlignVertical: 'center', textAlign: 'center' }}>Mica</Text>
        {/* <Icon name="mic" size={28} style={{ backgroundColor: '#3F3D56', color: '#FFF', borderRadius: 50, width: 64, height: 64, textAlignVertical: 'center', textAlign: 'center' }}/> */}
      </TouchableOpacity>
    </View>
  );
}


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
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',

    bottom: 24,
  },
})