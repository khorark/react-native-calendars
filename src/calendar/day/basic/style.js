import {StyleSheet, Platform} from 'react-native';
import * as defaultStyle from '../../../style';

const STYLESHEET_ID = 'stylesheet.day.basic';

export default function styleConstructor(theme={}) {
  const appStyle = {...defaultStyle, ...theme};
  return StyleSheet.create({
    base: {
      width: 32,
      height: 32,
      alignItems: 'center'
    },
    text: {
      marginTop: Platform.OS === 'android' ? 4 : 6,
      fontSize: appStyle.textDayFontSize,
      fontFamily: appStyle.textDayFontFamily,
      fontWeight: '300',
      color: appStyle.dayTextColor,
      backgroundColor: 'rgba(255, 255, 255, 0)'
    },
    alignedText: {
      marginTop: Platform.OS === 'android' ? 4 : 6
    },
    selected: {
      backgroundColor: appStyle.selectedDayBackgroundColor,
      borderColor: appStyle.selectedDayBorderColor,
      borderWidth: appStyle.selectedDayBorderWidth,
      borderRadius: 16
    },
    itsNow: {
      backgroundColor: appStyle.itsNowDayBackgroundColor,
      borderColor: appStyle.itsNowDayBorderColor,
      borderWidth: appStyle.itsNowDayBorderWidth,
      borderRadius: 16,
    },
    itsNowText: {
      color: appStyle.itsNowDayTextColor
    },
    itsNowSelected: {
      backgroundColor: appStyle.itsNowDaySelectedBackgroundColor,
      borderRadius: 16,
    },
    itsNowSelectedText: {
      color: appStyle.itsNowDaySelectedTextColor,
    },
    todayText: {
      color: appStyle.todayTextColor
    },
    selectedText: {
      color: appStyle.selectedDayTextColor
    },
    disabledText: {
      color: appStyle.textDisabledColor
    },
    dot: {
      width: 4,
      height: 4,
      marginTop: 1,
      borderRadius: 2,
      opacity: 0
    },
    visibleDot: {
      opacity: 1,
      backgroundColor: appStyle.dotColor
    },
    selectedDot: {
      backgroundColor: appStyle.selectedDotColor
    },
    ...(theme[STYLESHEET_ID] || {})
  });
}
