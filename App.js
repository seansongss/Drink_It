import React from 'react';

// import { ThemeProvider, createTheme, Button } from '@rneui/themed'
import { StyleSheet, Text, View } from 'react-native';
import Bottom_nav from './bottom_nav';
import BottomNav from './bottom_nav';
import CalendarView from './Components/Main_calendar/Calendar_view/CalendarView';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainCalendar from './Pages/Main_calendar/MainCalendar';

// const theme = createTheme({
//   lightColors: {
//     primary: 'blue',
//     background: '#FFF3D6'
//   },
//   darkColors: {
//     primary: 'red',
//   },
//   mode: 'light',
//   components: {
//     Button: {
//       buttonStyle: {
//         backgroundColor: 'white',
//       },
//     },
//   },
// });

export default function App() {
  return (
    // Text.defaultProps = {
    //   style: { fontFamily: 'Jaldi', fontweight: 'bold' }
    // },
    // SafeAreaProvider is used to provide padding to the app
    <SafeAreaProvider style={{ backgroundColor: '##FFF3D6' }}>
      <MainCalendar />
    </SafeAreaProvider>
  );
}