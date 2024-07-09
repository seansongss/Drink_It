import React from 'react';
import { AppProvider, UserProvider, RealmProvider } from '@realm/react';

import { SYNC_CONFIG } from '../sync.config';
import BottomNav from '../BottomNav';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './Navigation/AuthStack';


const AppWrapperSync = () => {
    return (
        <AppProvider id={SYNC_CONFIG.appId}>
            <UserProvider fallback={AuthStack}>
                <RealmProvider>
                    <SafeAreaProvider style={{ flex: 1, backgroundColor: '#A2B69F' }}>
                        <NavigationContainer style={{ flex: 1 }}>
                            <BottomNav />
                        </NavigationContainer>
                    </SafeAreaProvider>
                </RealmProvider>
            </UserProvider>
        </AppProvider>
    )
}

export default AppWrapperSync