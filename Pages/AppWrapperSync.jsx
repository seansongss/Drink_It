import React, { useState } from 'react';
import { AppProvider, UserProvider, RealmProvider } from '@realm/react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { REALM_CONFIG } from '../realm.config';
import BottomNav from '../navigation/BottomNav';
import AuthStack from '../navigation/AuthStack';
import { recipeTestSchema } from 'models/schemas';
import { recipeTest } from 'models/models';
import { ActivityIndicator, Alert, View } from 'react-native';
import { OpenRealmBehaviorType } from 'realm';

const AppWrapperSync = () => {
    return (
        <AppProvider id={REALM_CONFIG.appId}>
            <UserProvider fallback={AuthStack}>
                <RealmProvider
                    schema={[recipeTestSchema]}
                    sync={{
                        flexible: true,
                        initialSubscriptions: {
                            update(subs, realm) {
                                subs.add(realm.objects('recipeTest'), { name: 'allRecipes' });
                            },
                        },
                        // newRealmFileBehavior: {
                        //     type: OpenRealmBehaviorType.OpenImmediately,
                        // },
                        // existingRealmFileBehavior: {
                        //     type: OpenRealmBehaviorType.OpenImmediately,
                        // },
                    }}
                    fallback={
                        <View>
                            <ActivityIndicator />
                        </View>
                    }
                >
                    <NavigationContainer>
                        <SafeAreaProvider style={{ flex: 1, backgroundColor: '#A2B69F' }}>
                            <BottomNav />
                        </SafeAreaProvider>
                    </NavigationContainer>
                </RealmProvider>
            </UserProvider>
        </AppProvider>
    )
}

export default AppWrapperSync