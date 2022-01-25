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

const VoiceApp = ({ navigation }: any, Props: any, State: any) => {
  const [result, setResult] = useState('');

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



    // console.log('Speeck result handler', e); //keert een {} met [] items terug.
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

  return (
    <View style={[styles.container]}>
      <View>
        <Text style={[styles.headerText]}>Speech recognition</Text>
        <View style={[styles.textInputStyle]}>
          <TextInput
            value={result}
            placeholder="your text"
            style={{flex: 1}}
            onChangeText={text => setResult(text)}
          />
          <TouchableOpacity onPress={startRecording}>
            <Image
              source={{
                uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/microphone.png',
              }}
              style={{width: 24, height: 24}}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={{
            alignSelf: 'center',
            marginTop: 24,
            backgroundColor: 'red',
            padding: 8,
            borderRadius: 4,
          }}
          onPress={stopRecording}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>Stop</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
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
    justifyContent: 'space-between',
    height: 48,
    borderRadius: 20,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 2,
    elevation: 2,
    shadowOpacity: 0.4,
  },
});

export default VoiceApp;