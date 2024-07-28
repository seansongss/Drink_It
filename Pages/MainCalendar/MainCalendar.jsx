import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'

import CalendarView from '../../components/MainCalendar/CalendarView/CalendarView';
import FunfactCard from '../../components/MainCalendar/FunfactCard/FunfactCard';
import StatSimple from '../../components/MainCalendar/StatSimple/StatSimple';

import styles from './styles';

const MainCalendar = ({ navigation, records, updateRecords }) => {
    return (
        <SafeAreaView edges={["top"]} style={styles.wrapper}>
            <View style={styles.container}>
                <CalendarView navigation={navigation} records={records} updateRecords={updateRecords} />
                <View style={styles.cards}>
                    <FunfactCard />
                    <StatSimple />
                </View>
            </View>
        </SafeAreaView>
    );
}

export default MainCalendar;
