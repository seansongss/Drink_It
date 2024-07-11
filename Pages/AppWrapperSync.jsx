import React from 'react';
import { AppProvider, UserProvider, RealmProvider } from '@realm/react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { REALM_CONFIG } from '../realm.config';
import BottomNav from '../navigation/BottomNav';
import AuthStack from '../navigation/AuthStack';


const AppWrapperSync = () => {
    return (
        <NavigationContainer>
            <AppProvider id={REALM_CONFIG.appId}>
                <UserProvider fallback={AuthStack}>
                    <RealmProvider>
                        <SafeAreaProvider style={{ flex: 1, backgroundColor: '#A2B69F' }}>
                            <BottomNav />
                        </SafeAreaProvider>
                    </RealmProvider>
                </UserProvider>
            </AppProvider>
        </NavigationContainer>
    )
}

export default AppWrapperSync