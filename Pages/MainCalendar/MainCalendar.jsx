import React from 'react';
import { View } from 'react-native';

import CalendarView from '../../components/Main_calendar/Calendar_view/CalendarView';
import FunfactCard from '../../components/Main_calendar/Funfact_card/FunfactCard';
import StatSimple from '../../components/Main_calendar/Stat_simple/StatSimple';

import styles from './styles';

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

export default MainCalendar;
