import React, {useEffect} from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import BottomNav from './BottomNav';
import { useFonts, Jaldi_400Regular, Jaldi_700Bold } from '@expo-google-fonts/jaldi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SplashScreen from 'expo-splash-screen';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

// Hide the splash screen after fetching resources
setTimeout(async () => {
    await SplashScreen.hideAsync();
}, 2000);

export default function App() {
    // // Clear storage for development purposes
    // useEffect(() => {
    //     const clearStorage = async () => {
    //         try {
    //             await AsyncStorage.clear();
    //             console.log("Storage cleared successfully!");
    //         } catch (error) {
    //             console.error("Error clearing storage: ", error);
    //         }
    //     };

    //     clearStorage();
    // }, []);
    

    let [fontsLoaded] = useFonts({
        Jaldi_400Regular,
        Jaldi_700Bold,
    });

    if (!fontsLoaded) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    return (
        <SafeAreaProvider style={{ flex: 1, backgroundColor: '#A2B69F' }}>
            <NavigationContainer style={{ flex: 1 }}>
                <BottomNav />
            </NavigationContainer>
        </SafeAreaProvider>
    );
}
