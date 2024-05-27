import React from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import BottomNav from './BottomNav';
import { useFonts, Jaldi_400Regular, Jaldi_700Bold } from '@expo-google-fonts/jaldi';

export default function App() {
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
