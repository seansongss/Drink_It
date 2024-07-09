import React from 'react';
import { AppProvider, UserProvider, RealmProvider } from '@realm/react';

import { REALM_CONFIG } from '../realm.config';
import BottomNav from '../navigation/BottomNav';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from '../navigation/AuthStack';


const AppWrapperSync = () => {
    return (
        <AppProvider id={REALM_CONFIG.appId}>
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