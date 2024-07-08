import React from 'react';
import { AppProvider, UserProvider, RealmProvider } from '@realm/react';

import BottomNav from '../BottomNav';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import Login from './Login';


const AppWrapperSync = () => {
    return (
        <SafeAreaProvider style={{ flex: 1, backgroundColor: '#A2B69F' }}>
            <NavigationContainer style={{ flex: 1 }}>
                <BottomNav />
            </NavigationContainer>
        </SafeAreaProvider>
    )
}

export default AppWrapperSync