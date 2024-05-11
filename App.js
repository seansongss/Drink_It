import React from 'react';

import { ThemeProvider, createTheme, Button } from '@rneui/themed'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Bottom_nav from './bottom_nav';
import BottomNav from './bottom_nav';
import CalendarView from './Components/Main_calendar/Calendar_view/CalendarView';
import { SafeAreaView } from 'react-native-safe-area-context';

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
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF3D6' }}>
      <CalendarView />
      <View style={{ flex: 1, backgroundColor: '#FFF3D6' }} />
    </SafeAreaView>
  );
}