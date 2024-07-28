import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainCalendar from '@pages/MainCalendar/MainCalendar';
import DailyView from '@pages/DailyView/DailyView';
import NewRecord from '@pages/NewRecord/NewRecord';
import RecipeRanking from '@pages/RecipeRanking/RecipeRanking';

const Stack = createNativeStackNavigator();

function CalendarViewStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="CalendarView" component={MainCalendar} />
            <Stack.Screen name="DailyView" component={DailyView} />
            <Stack.Screen name="NewRecord" component={NewRecord} />
            <Stack.Screen name="RecipeRanking" component={RecipeRanking} />
        </Stack.Navigator>
    );
}

export default CalendarViewStack;
