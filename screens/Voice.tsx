import React, {useState, useEffect} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import Voice from '@react-native-voice/voice';

import Tts from 'react-native-tts';
import { text } from '../styles/text';
import LinearGradient from 'react-native-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';


const VoiceApp = ( Props: any, State: any ) => {
  const [result, setResult] = useState('');

  // STT
  useEffect(() => {
    Voice.onSpeechStart = onSpeechStartHandler;
    Voice.onSpeechEnd = onSpeechEndHandler;
    Voice.onSpeechResults = onSpeechResultsHandler;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const onSpeechStartHandler = (e: any) => {
    console.log('Start handler --> ', e);
  };

  const onSpeechEndHandler = (e: any) => {
    console.log('Stop handler --> ', e);
  };

  const onSpeechResultsHandler = (e: any) => {
    const text = e.value[0]
    setResult(text)
    console.log('Ingesproken tekst: ', text)
    if (text == 'voeg een nieuwe afspraak toe') {
      handleVoice('Hoelaat')
    } else if (text == 'om 12 uur') {
      handleVoice('Wat wil je plannen')
    } else if (text == 'brunch met Britt') {
      handleVoice('Oke, ik voeg deze afspraak toe aan je agenda')
    } else {
      handleVoice('Sorry, dat heb ik niet begrepen.')
    }
  };

  const startRecording = async () => {
    try {
      await Voice.start('nl-Be');
      setResult('')

    } catch (error) {
      console.log('Error: ', error);
    }
  };

  const stopRecording = async () => {
    try {
      await Voice.stop();
    } catch (error) {
      console.log('Error: ', error);
    }
  };

  // TTS
  const handleVoice = (ttsText: any) => {
    Tts.speak(ttsText)
  }


  return (
    <View style={[ styles.container ]}>
      <LinearGradient
        colors={['#D4E5FA', '#C9E5F1', '#DEDBFF']}
        style={[ styles.background, {width: Dimensions.get('screen').width, height: Dimensions.get('screen').height}]}
      />
      
      <View 
        style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
      >
        <TouchableOpacity
          onPress={ () => {console.log('Back button pressed.')}}
          style={{ marginTop: 8, marginLeft: 16 }}
        >
          <Image source={require('../assets/icons/Left.png')}/>
        </TouchableOpacity>

        <Text style={[ styles.headerText, { paddingRight: 24, } ]}>Hey Mica</Text>

        <View></View>
      </View>

      <ScrollView style={[ styles.card ]}>
        <View style={[ styles.textInputStyle ]}>
          <TextInput
            value={result}
            placeholder="your text"
            style={[ text.large, {paddingRight: 20} ]}
            onChangeText={text => setResult(text)}
          />
        </View>

        <Text 
          style={[ styles.micaInputStyle, text.large, { paddingLeft: 20, textAlignVertical: 'center' } ]}
        >
          Hier komt mica zen tekst
        </Text>     
      </ScrollView>

      <View style={{ flexDirection: 'row', justifyContent: 'center', bottom: 36, }}>
        <TouchableOpacity 
          onPress={startRecording}
          style={{ marginLeft: 4, marginRight: 4 }}
        >
          <Text 
            style={{ backgroundColor: '#3F3D56', color: '#FFF', borderRadius: 50, width: 64, height: 64, textAlignVertical: 'center', textAlign: 'center' }}
          >
            Mic
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            alignSelf: 'center',
            backgroundColor: 'red',
            padding: 8,
            borderRadius: 4,

            marginLeft: 4, 
            marginRight: 4,
          }}
          onPress={(stopRecording)}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>Stop</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },

  headerText: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 26,
    color: 'black',

    marginTop: 16,
    marginBottom: 20
  },

  textInputStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',

    height: 48,

    borderRadius: 20,

    backgroundColor: '#D4E5FA',

    marginLeft: 24,
    marginBottom: 16,
  },

  micaInputStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',

    height: 48,

    borderRadius: 20,

    backgroundColor: '#C9E5F1',

    marginRight: 24,
    marginBottom: 16,
  },

  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },

  card: {
    width: (Dimensions.get('screen').width - 24),
    height: (Dimensions.get('screen').height + (12 * 16)) / 2,

    marginLeft: 16,
    marginRight: 16,

    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 8,
    paddingRight: 8,

    backgroundColor: '#FFFFFF99',

    borderColor: '#FFFFFF40',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 15,
  }
});


export default VoiceApp;