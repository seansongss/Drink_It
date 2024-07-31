import 'expo-dev-client';
import 'react-native-get-random-values'
import React from 'react';
import { registerRootComponent } from 'expo';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts, Jaldi_400Regular, Jaldi_700Bold } from '@expo-google-fonts/jaldi';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AnimatedSplashScreen from './pages/AnimatedSplashScreen';
import AppWrapperSync from './pages/AppWrapperSync';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

// Clear storage for development purposes
const clearLocalStorage = async () => {
    try {
        await AsyncStorage.clear();
        console.log("Storage cleared successfully!");
    } catch (error) {
        console.error("Error clearing storage: ", error);
    }
};

export default function App() {
    let [fontsLoaded] = useFonts({
        Jaldi_400Regular,
        Jaldi_700Bold,
    });

    return (
        <AnimatedSplashScreen>
            <AppWrapperSync />
        </AnimatedSplashScreen>
    );
}

registerRootComponent(App);