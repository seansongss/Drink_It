import React from 'react';
import { View } from 'react-native';
import CalendarView from '../../Components/Main_calendar/Calendar_view/CalendarView';
import FunfactCard from '../../Components/Main_calendar/Funfact_card/FunfactCard';
import StatSimple from '../../Components/Main_calendar/Stat_simple/StatSimple';

import styles from './styles';
import DailyView from '../../Components/DailyView/DailyView';
import NewRecord from '../NewRecord/NewRecord';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const MainCalendar = ({ navigation, records, updateRecords }) => {
    return (
        <View style={{ flex: 1, paddingHorizontal: 20 }}>
            <CalendarView navigation={navigation} records={records} updateRecords={updateRecords} />
            <View style={styles.cards}>
                <FunfactCard />
                <StatSimple />
            </View>
        </View>
    );
}

const Stack = createNativeStackNavigator();

function CalendarViewStack({ records, updateRecords }) {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="CalendarView" component={MainCalendar} />
            <Stack.Screen name="DailyView" component={DailyView} />
            <Stack.Screen name="NewRecord" component={NewRecord} />
        </Stack.Navigator>
    );
}

export default CalendarViewStack;
