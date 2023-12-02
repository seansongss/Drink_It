import React, { useState } from 'react';

import { ThemeProvider, createTheme, Button } from '@rneui/themed'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Bottom_nav from './bottom_nav';

const theme = createTheme({
  lightColors: {
    primary: 'blue',
    background: '#FFF3D6'
  },
  darkColors: {
    primary: 'red',
  },
  mode: 'light',
  components: {
    Button: {
      buttonStyle: {
        backgroundColor: 'white',
      },
    },
  },
});

export default function App() {
  return (
    <Bottom_nav />
  );
}