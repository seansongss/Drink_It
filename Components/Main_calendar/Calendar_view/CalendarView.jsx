import React, { useState } from 'react';
import { View, Text, ImageBackground, Button, SafeAreaView } from 'react-native';
import { Divider } from '@rneui/themed';

import styles from './styles';

import Funfact_card from '../Funfact_card/Funfact_card';
import Stat_simple from '../Stat_simple/Stat_simple';
import Login from '../../../Pages/Login/Login';

function CalendarView() {
    const [activeDate, setActiveDate] = useState(new Date());

    // month array
    const months = ["Jan", "Feb", "Mar", "Apr",
        "May", "Jun", "Jul", "Aug", "Sept", "Oct",
        "Nov", "Dec"];
    // weekdays array
    const weekDays = [[
        "S", "M", "T", "W", "T", "F", "S"
    ]];
    // number of days each month starting in January
    const nDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    const changeMonth = (n) => {
        setActiveDate(new Date(activeDate.getFullYear(), activeDate.getMonth() + n, 1));
    }

    // Generate the matrix for the calendar
    const generateMatrix = () => {
        const matrix = [];

        const firstDay = new Date(activeDate.getFullYear(), activeDate.getMonth(), 1).getDay();
        let maxDays = nDays[activeDate.getMonth()];
        if (activeDate.getMonth() == 1) {
            if ((activeDate.getFullYear() % 4 == 0 && activeDate.getFullYear() % 100 != 0) || activeDate.getFullYear() % 400 == 0) {
                maxDays = 29;
            }
        }

        let counter = 1;
        for (let row = 0; row < 6; row++) {
            matrix[row] = [];
            for (let col = 0; col < 7; col++) {
                matrix[row][col] = -1;
                if (row == 0 && col >= firstDay) {
                    matrix[row][col] = counter++;
                } else if (row > 0 && counter <= maxDays) {
                    matrix[row][col] = counter++;
                }
            }
        }

        return matrix;
    }

    const matrix = generateMatrix();
    
    const day_row = weekDays.map((day, i) => {
        let d = day.map((item, i) => {
            return (
                <Text style={styles.days} key={`day_${i}`}>
                    {item}
                </Text>
            )
        });
        return (
            <View style={styles.dayRow} key={`day_row`}>
                {d}
            </View>
        )
    });

    const date_row = matrix.map((row, i) => {
        let days = row.map((item, i) => {
            return (
                <ImageBackground
                    key={`${activeDate.getFullYear()}_${activeDate.getMonth()}_${item != -1 ? item : item - i}`}
                    source={item == 5 || item == 21 ? require('../../../assets/alcohol/beer_logo.png') :
                        item == 9 ? require('../../../assets/alcohol/wine_logo.png') :
                            item == 14 ? require('../../../assets/alcohol/soju_logo.png') :
                                item == 24 ? require('../../../assets/alcohol/vodka_logo.png') : null}
                    // imageStyle={item == 5 || item == 9 || item == 14 || item == 21 || item == 24 ? { opacity: 1 } : { opacity: 0 }}
                    resizeMode='center'
                    style={styles.date}
                    onPress=''>
                    <Text
                        style={styles.dateText}>
                        {item != -1 ? item : ''}
                    </Text>
                </ImageBackground>
            )
        });
        return (
            <View style={styles.dateRow} key={`row_${i}`}>
                {days}
            </View>
        )
    });

    return (
        <SafeAreaView>
            <View style={styles.calendar}>
                {/* Month navigation */}
                <View style={styles.monthRow}>
                    <Button
                        title='Prev'
                        onPress={() => changeMonth(-1)} />
                    <Divider orientation="horizontal" />
                    <Text style={styles.month}>
                        {months[activeDate.getMonth()]} {activeDate.getFullYear()}
                    </Text>
                    <Divider orientation="horizontal" />
                    <Button
                        title='Next'
                        onPress={() => changeMonth(1)} />
                </View>
                {/* Days of the week */}
                {day_row}
                {/* Dates */}
                {date_row}
            </View>
        </SafeAreaView>
    )
}

export default CalendarView