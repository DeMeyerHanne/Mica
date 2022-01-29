import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const Bubble = (props: any) => {
  return ( 
    <View 
      style={[ styles.message, props.mine ? styles.notMine : styles.mine ]}
    >
      <View
        style={[ styles.cloud, { backgroundColor: props.notMine ? '#D4E5FA' : '#C9E5F1'} ]}
      >
        { 
          props.image 
          ? 
          <Image style={{ alignSelf: props.notMine ? 'flex-start' : 'flex-end' }} borderRadius={10} source={props.image} /> 
          : 
          null 
        }
        {
          props.text 
          ?
          <Text style={[ styles.text, { color: '#1d1d1d' } ]}>
            { props.text }
          </Text>
          :
          null
        }

        <View
          style={[ styles.arrowContainer, props.notMine ? styles.arrowLeftContainer : styles.arrowRightContainer ]}
        >
          <Svg
            style={ props.notMine ? styles.arrowLeft : styles.arrowRight }
            width={24}
            height={24}
            viewBox="32.484 17.5 15.515 17.5"
            enable-background="new 32.484 17.5 15.515 17.5"
          >
            <Path 
              d={ props.notMine
                ?
                "M38.484,17.5c0,8.75,1,13.5-6,17.5C51.484,35,52.484,17.5,38.484,17.5z"
                :
                "M48,35c-7-4-6-8.75-6-17.5C25,17.5,29,35,48,35z"
              }
              x="0"
              y="0"
            />
          </Svg>
        </View>

      </View>
    </View>
  )
};

export default Bubble;

const styles = StyleSheet.create({
  message: {
    flexDirection: 'row',
    marginVertical: 8,
  },

  mine: {
    marginLeft: 8,
  },

  notMine: {
    alignSelf: 'flex-end',
    marginRight: 8,
  },

  cloud: {
    maxWidth: 256,
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 20,
  },
  text: {
    paddingTop: 4,
    fontSize: 16,
    lineHeight: 20,
  },

  arrowContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: -1,
    flex: 1,
  },

  arrowLeftContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },

  arrowRightContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },

  arrowLeft: {
    left: 8,
  },

  arrowRight: {
    right: 8,
  },
})