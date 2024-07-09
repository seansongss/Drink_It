import React from 'react';
import { View } from 'react-native';

import CalendarView from '../../components/MainCalendar/CalendarView/CalendarView';
import FunfactCard from '../../components/MainCalendar/FunfactCard/FunfactCard';
import StatSimple from '../../components/MainCalendar/StatSimple/StatSimple';

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
