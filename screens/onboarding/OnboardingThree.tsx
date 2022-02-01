import LottieView from 'lottie-react-native';
import React from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { text } from '../../styles/text';


const OnboardingScreenThree = ({navigation}: any) => {
  return (
    <View>
      <LinearGradient
        colors={['#D4E5FA', '#C9E5F1', '#DEDBFF']}
        style={[ styles.background , { width: Dimensions.get('screen').width, height: Dimensions.get('screen').height }]}
      />

      <TouchableOpacity
        onPress={ () => { navigation.navigate('OnboardingTwo')}}
        style={{ marginTop: 16, marginLeft: 16 }}
      >
        <Image source={require('../../assets/icons/Left.png')}/>
      </TouchableOpacity>

      <View style={[ card.background ]}>
        <LottieView
          source={require('../../animations/OnboardingThree.json')}
          autoPlay={true}
          loop={true}
        />
      </View>

      <View style={{ alignItems: 'center', marginBottom: 40 }}>
        <Text style={[ text.largeBold ]}>
          Overloop je dag
        </Text>
        <Text style={[ text.smallBlack, { textAlign: 'center', lineHeight: 20 }]}>
          Mica kan je dag overlopen. Wil je weten wat je morgen moet doen? Vraag het dan met een specifieke datum erbij.
        </Text>
      </View>


      <View style={[ { flexDirection: 'row', justifyContent: 'center', marginBottom: 36, }]}>
        <View style={[ steps.dot, { backgroundColor: '#959595' } ]}></View>
        <View style={[ steps.dot, { backgroundColor: '#959595' } ]}></View>
        <View style={[ steps.dot, { backgroundColor: '#3F3D56' } ]}></View>
      </View>


      <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'baseline' }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Overview')}
        >
          <Text>Skip</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.push('Overview')}
        >
          <Text style={{ color: '#3F3D56', fontSize: 16}}>Klaar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
})

const card = StyleSheet.create({
  background: {
    width: (Dimensions.get('screen').width - 24),
    height: Dimensions.get('screen').height / 2,

    marginLeft: 16,
    marginRight: 16,
    marginTop: 16,
    marginBottom: 32,

    backgroundColor: '#FFFFFF66',
    
    borderColor: '#FFFFFF40',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 15,

    alignItems: 'center',
    justifyContent: 'center',
  }
})

const steps = StyleSheet.create({
  dot: {
    height: 8,
    width: 8,
    borderRadius: 50,
    marginLeft: 2,
    marginRight: 2,
  }
})
export default OnboardingScreenThree;