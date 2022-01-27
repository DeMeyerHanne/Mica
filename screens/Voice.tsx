import React, {useState, useEffect} from 'react';
import {
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


const VoiceApp = (Props: any, State: any) => {
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
      <TouchableOpacity
        onPress={() => console.log('Terug')}
      >
        <Text>Terug</Text>
      </TouchableOpacity>

      <View>
        <Text style={[ styles.headerText ]}>Hey Mica</Text>
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
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
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
    marginVertical: 26,
    fontWeight: 'bold',
    fontSize: 26,
    color: 'black',
  },

  textInputStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',

    height: 48,

    borderRadius: 20,

    backgroundColor: '#D4E5FA',

    marginLeft: 24,
    marginRight: 8,
    marginBottom: 16,
  },

  micaInputStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',

    height: 48,

    borderRadius: 20,

    backgroundColor: '#C9E5F1',

    marginLeft: 8,
    marginRight: 24,
    marginBottom: 16,
  }
});


export default VoiceApp;