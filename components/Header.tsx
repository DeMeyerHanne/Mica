import React, {Component, useCallback} from 'react';
import {Platform, StyleSheet, Alert, View, Text, TouchableOpacity, Button} from 'react-native';
import {ExpandableCalendar, AgendaList, CalendarProvider, WeekCalendar} from 'react-native-calendars';
import { card } from '../styles/header';
import testIDs from '../testIDs';

const today = new Date().toISOString().split('T')[0];
const fastDate = getPastDate(3);
const futureDates = getFutureDates(9);
const dates = [fastDate, today].concat(futureDates);
// const themeColor = '#3F3D56';
const lightThemeColor = '#3F3D56';

function getFutureDates(numberOfDays: number) {
  const array = [];
  for (let index = 1; index <= numberOfDays; index++) {
    const date = new Date(Date.now() + 864e5 * index); // 864e5 == 86400000 == 24*60*60*1000
    const dateString = date.toISOString().split('T')[0];
    array.push(dateString);
  }
  return array;
}

function getPastDate(numberOfDays: number) {
  return new Date(Date.now() - 864e5 * numberOfDays).toISOString().split('T')[0];
}

const ITEMS: any[] = [
  {
    title: dates[0],
    data: [{hour: '12am', duration: '1h', title: 'First Yoga'}]
  },
  {
    title: dates[1],
    data: [
      {hour: '4pm', duration: '1h', title: 'Pilates ABC'},
      {hour: '5pm', duration: '1h', title: 'Vinyasa Yoga'}
    ]
  },
  {
    title: dates[2],
    data: [
      {hour: '1pm', duration: '1h', title: 'Ashtanga Yoga'},
      {hour: '2pm', duration: '1h', title: 'Deep Stretches'},
      {hour: '3pm', duration: '1h', title: 'Private Yoga'}
    ]
  },
  {
    title: dates[3],
    data: [{hour: '12am', duration: '1h', title: 'Ashtanga Yoga'}]
  },
  {
    title: dates[4],
    data: [{}]
  },
  {
    title: dates[5],
    data: [
      {hour: '9pm', duration: '1h', title: 'Middle Yoga'},
      {hour: '10pm', duration: '1h', title: 'Ashtanga'},
      {hour: '11pm', duration: '1h', title: 'TRX'},
      {hour: '12pm', duration: '1h', title: 'Running Group'}
    ]
  },
  {
    title: dates[6], 
    data: [
      {hour: '12am', duration: '1h', title: 'Ashtanga Yoga'}
    ]
  },
  {
    title: dates[7], 
    data: [{}]
  },
  {
    title: dates[8],
    data: [
      {hour: '9pm', duration: '1h', title: 'Pilates Reformer'},
      {hour: '10pm', duration: '1h', title: 'Ashtanga'},
      {hour: '11pm', duration: '1h', title: 'TRX'},
      {hour: '12pm', duration: '1h', title: 'Running Group'}
    ]
  },
  {
    title: dates[9],
    data: [
      {hour: '1pm', duration: '1h', title: 'Ashtanga Yoga'},
      {hour: '2pm', duration: '1h', title: 'Deep Stretches'},
      {hour: '3pm', duration: '1h', title: 'Private Yoga'}
    ]
  },
  {
    title: dates[10], 
    data: [
      {hour: '12am', duration: '1h', title: 'Last Yoga'}
    ]
  }
];

type MarkedDate = {
  [key: string]: object;
}

function getMarkedDates(items: any[]) {
  const marked: MarkedDate = {};

  items.forEach(item => {
    // NOTE: only mark dates with data
    if (item.data && item.data.length) {
      marked[item.title] = {marked: true};
    } else {
      marked[item.title] = {disabled: true};
    }
  });
  return marked;
}

function getTheme() {
  const disabledColor = 'grey';

  return {
    // arrows
    arrowColor: '#1D1D1D',
    arrowStyle: {padding: 0},
    // month
    monthTextColor: '#1D1D1D',
    textMonthFontSize: 16,
    textMonthFontFamily: 'HelveticaNeue',
    textMonthFontWeight: 'bold',
    // day names
    textSectionTitleColor: '#606060',
    textDayHeaderFontSize: 12,
    textDayHeaderFontFamily: 'HelveticaNeue',
    textDayHeaderFontWeight: 'normal',
    // dates
    dayTextColor: "#3F3D56",
    textDayFontSize: 18,
    textDayFontFamily: 'HelveticaNeue',
    textDayFontWeight: '500',
    textDayStyle: {marginTop: Platform.OS === 'android' ? 2 : 4},
    // selected date
    selectedDayBackgroundColor: "#3F3D56",
    selectedDayTextColor: 'white',
    // disabled date
    textDisabledColor: disabledColor,
    // dot (marked date)
    dotColor: "#3F3D56",
    selectedDotColor: 'white',
    disabledDotColor: disabledColor,
    dotStyle: {marginTop: -2}
  };
}

const leftArrowIcon = require('../assets/icons/Left.png');
const rightArrowIcon = require('../assets/icons/Right.png');

interface Props {
  weekView?: boolean;
}

export default class ExpandableCalendarScreen extends Component<Props> {
  marked = getMarkedDates(ITEMS);
  theme = getTheme();
  todayBtnTheme = {
    todayButtonTextColor: "#3F3D56"
  };

  onDateChanged = (/* date, updateSource */) => {
    // console.warn('ExpandableCalendarScreen onDateChanged: ', date, updateSource);
    // fetch and set data for date + week ahead
  };

  onMonthChange = (/* month, updateSource */) => {
    // console.warn('ExpandableCalendarScreen onMonthChange: ', month, updateSource);
  };

  // renderItem = ({item}: any) => {
  //   return <AgendaItem item={item}/>;
  // };

  render() {
    return (
      <View style={[ card.background, { borderRadius: 15, } ]}>
        <CalendarProvider
          date={ITEMS[0].title}
          onDateChanged={this.onDateChanged}
          onMonthChange={this.onMonthChange}
          disabledOpacity={0.6}
        >
          {this.props.weekView ? (
            <WeekCalendar testID={testIDs.weekCalendar.CONTAINER} firstDay={1} markedDates={this.marked}/>
          ) : (
            <ExpandableCalendar
              testID={testIDs.expandableCalendar.CONTAINER}
              
              firstDay={1}
              markedDates={this.marked}
              leftArrowImageSource={leftArrowIcon}
              rightArrowImageSource={rightArrowIcon}
              animateScroll
            />
          )}
        </CalendarProvider>
      </View>
    );
  }
}

// interface ItemProps {
//   item: any;
// }

// const AgendaItem = React.memo(function AgendaItem(props: ItemProps) {
//   const {item} = props;

//   const buttonPressed = useCallback(() => {
//     Alert.alert('Show me more');
//   }, []);

//   const itemPressed = useCallback(() => {
//     Alert.alert(item.title);
//   }, []);

  // if (isEmpty(item)) {
  //   return (
  //     <View style={styles.emptyItem}>
  //       <Text style={styles.emptyItemText}>No Events Planned Today</Text>
  //     </View>
  //   );
  // }

  // return (
  //   <TouchableOpacity onPress={itemPressed} style={styles.item} testID={testIDs.agenda.ITEM}>
  //     <View>
  //       <Text style={styles.itemHourText}>{item.hour}</Text>
  //       <Text style={styles.itemDurationText}>{item.duration}</Text>
  //     </View>
  //     <Text style={styles.itemTitleText}>{item.title}</Text>
  //     <View style={styles.itemButtonContainer}>
  //       <Button color={'grey'} title={'Info'} onPress={buttonPressed}/>
  //     </View>
  //   </TouchableOpacity>
  // );
// });

// const styles = StyleSheet.create({
//   calendar: {
//     paddingLeft: 20,
//     paddingRight: 20
//   },
//   section: {
//     backgroundColor: lightThemeColor,
//     color: 'grey',
//     textTransform: 'capitalize'
//   },
//   item: {
//     padding: 20,
//     backgroundColor: 'white',
//     borderBottomWidth: 1,
//     borderBottomColor: 'lightgrey',
//     flexDirection: 'row'
//   },
//   itemHourText: {
//     color: 'black'
//   },
//   itemDurationText: {
//     color: 'grey',
//     fontSize: 12,
//     marginTop: 4,
//     marginLeft: 4
//   },
//   itemTitleText: {
//     color: 'black',
//     marginLeft: 16,
//     fontWeight: 'bold',
//     fontSize: 16
//   },
//   itemButtonContainer: {
//     flex: 1,
//     alignItems: 'flex-end'
//   },
//   emptyItem: {
//     paddingLeft: 20,
//     height: 52,
//     justifyContent: 'center',
//     borderBottomWidth: 1,
//     borderBottomColor: 'lightgrey'
//   },
//   emptyItemText: {
//     color: 'lightgrey',
//     fontSize: 14
//   }
// });