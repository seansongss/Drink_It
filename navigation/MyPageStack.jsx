import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MyPage from '@pages/MyPage/MyPage';
import SettingView from '@pages/SettingView/SettingView';
import RecipeRanking from '@pages/RecipeRanking/RecipeRanking';

const Stack = createNativeStackNavigator();

function MyPageStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="MyPage" component={MyPage} />
            <Stack.Screen name="SettingView" component={SettingView} />
            <Stack.Screen name="RecipeRankingView" component={RecipeRanking} />
        </Stack.Navigator>
    );
}

export default MyPageStack;
