import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MyPage from '@pages/MyPage/MyPage';
import SettingView from '@pages/SettingView/SettingView';

const Stack = createNativeStackNavigator();

function MyPageStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="MyPage" component={MyPage} />
            <Stack.Screen name="SettingView" component={SettingView} />
        </Stack.Navigator>
    );
}

export default MyPageStack;
