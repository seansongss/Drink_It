import React, { useState, useContext } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { Divider } from '@rneui/themed';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { useFonts, Jaldi_400Regular, Jaldi_700Bold } from '@expo-google-fonts/jaldi';
import { RecordsContext } from '../../Context/RecordsContext';

import styles from './styles';

// Preload images
const preloadImages = [
    require('../../../assets/alcohol/beer_logo.png'),
    require('../../../assets/alcohol/wine_logo.png'),
    require('../../../assets/alcohol/soju_logo.png'),
    require('../../../assets/alcohol/vodka_logo.png'),
    require('../../../assets/Calendar_view/last_night.png'),
];

preloadImages.forEach(image => {
    Image.prefetch(Image.resolveAssetSource(image).uri);
});

function CalendarView({ navigation }) {
    let [fontsLoaded] = useFonts({
        Jaldi_400Regular,
        Jaldi_700Bold,
    });

    const [activeDate, setActiveDate] = useState(new Date());
    const { records, loadRecords } = useContext(RecordsContext); // Use context to get records and loadRecords

    // month array
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    // weekdays array
    const weekDays = [["S", "M", "T", "W", "T", "F", "S"]];
    // number of days each month starting in January
    const nDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    const changeMonth = (n) => {
        setActiveDate(new Date(activeDate.getFullYear(), activeDate.getMonth() + n, 1));
    };

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

        if (matrix[5][0] == -1) {
            matrix.pop();
        }

        return matrix;
    };

    const matrix = generateMatrix();

    const day_row = weekDays.map((day, i) => {
        let d = day.map((item, i) => {
            return (
                <View style={styles.date} key={`day_${i}`}>
                    <Text style={styles.dateText}>
                        {item}
                    </Text>
                </View>
            );
        });
        return (
            <View style={styles.dateRow} key={`day_row`}>
                {d}
            </View>
        );
    });

    const date_row = matrix.map((row, i) => {
        let days = row.map((item, i) => {
            const dateKey = `${activeDate.getFullYear()}-${(activeDate.getMonth() + 1).toString().padStart(2, '0')}-${item.toString().padStart(2, '0')}`;
            const record = records[dateKey];
            const icon = record ? getAlchoholIcon(record.highestCountAlcohol) : null;

            return (
                <TouchableOpacity style={styles.date}
                    key={`${activeDate.getFullYear()}_${activeDate.getMonth() + 1}_${item != -1 ? item : item - i}`}
                    onPress={() => navigation.navigate('DailyView', { year: activeDate.getFullYear(), month: activeDate.getMonth(), date: item })}>
                    <ImageBackground
                        source={icon}
                        resizeMode='center'
                        style={styles.dateBox}>
                        <Text style={styles.dateText}>
                            {item != -1 ? item : ''}
                        </Text>
                    </ImageBackground>
                </TouchableOpacity>
            );
        });
        return (
            <View style={styles.dateRow} key={`row_${i}`}>
                {days}
            </View>
        );
    });

    // Safe area calculation
    const inset = useSafeAreaInsets();

    return (
        <View style={styles.calendarViewContainer}>
            {/* Month navigation */}
            <View style={styles.monthRow}>
                <View style={styles.monthContainer}>
                    <MaterialIcons
                        name='keyboard-arrow-left'
                        size={40}
                        color="#FFC870"
                        style={[styles.monthButton]}
                        onPress={() => changeMonth(-1)} />
                    <Text style={styles.month}>
                        {months[activeDate.getMonth()]} {activeDate.getFullYear()}
                    </Text>
                    <MaterialIcons
                        name='keyboard-arrow-right'
                        size={40}
                        color="#FFC870"
                        style={[styles.monthButton]}
                        onPress={() => changeMonth(+1)} />
                </View>
                <View style={{ flex: 1 }} />
                <View style={styles.rankingContainer}>
                    <TouchableOpacity style={{ marginRight: 5 }} onPress={() => setActiveDate(new Date())}>
                        <Image source={require('../../../assets/Calendar_view/last_night.png')}
                            style={{ width: 40, height: 40 }}
                            resizeMode='contain' />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('NewRecord')}>
                        <Image source={require('../../../assets/Calendar_view/last_night.png')}
                            style={{ width: 40, height: 40 }}
                            resizeMode='contain' />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.calendarContainer}>
                {/* Days of the week */}
                {day_row}
                <Divider orientation='horizontal' style={styles.divider} width={3} color='#E69C4D' />
                {/* Dates */}
                {date_row}
            </View>
        </View>
    );
}

const getAlchoholIcon = (name) => {
    switch (name) {
        case "soju":
            return require("../../../assets/alcohol/soju_logo.png");
        case "beer":
            return require("../../../assets/alcohol/beer_logo.png");
        case "wine":
            return require("../../../assets/alcohol/wine_logo.png");
        case "vodka":
            return require("../../../assets/alcohol/vodka_logo.png");
        default:
            return null;
    }
};

export default CalendarView;
