import { Component } from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import { Stack } from '@rneui/base';
import { Text, Divider, useTheme, Button } from '@rneui/themed';
import { MaterialIcons } from '@expo/vector-icons';
import * as Font from 'expo-font';


import styles from './styles';

import Funfact_card from '../Funfact_card/Funfact_card';
import Stat_simple from '../Stat_simple/Stat_simple';
import Login from '../../../Pages/Login/Login';

let customFonts = {
    'Jaldi': require('../../../assets/fonts/Jaldi-Regular.ttf'),
    'Jaldi-bold': require('../../../assets/fonts/Jaldi-Bold.ttf'),
};


/**
 * Monthly calendar view with dates, daily button, and combination rankings
 */
class Calendar_view extends Component {
    state = {
        fontsLoaded: false,
        activeDate: new Date(),
    };

    async _loadFontsAsync() {
        await Font.loadAsync(customFonts);
        this.setState({ fontsLoaded: true });
    }

    componentDidMount() {
        this._loadFontsAsync();
    }
    //month array
    months = ["Jan", "Feb", "Mar", "Apr",
        "May", "Jun", "Jul", "Aug", "Sept", "Oct",
        "Nov", "Dec"];
    //weekdays array
    weekDays = [[
        "S", "M", "T", "W", "T", "F", "S"
    ]];
    //number of days each month starting in January
    nDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    _onPress = (item) => {
        this.setState(() => {
            if (!item.match && item != -1) {
                this.state.activeDate.setDate(item);
                return this.state;
            }
        });
    };

    changeMonth = (n) => {
        this.setState(() => {
            this.state.activeDate.setMonth(
                this.state.activeDate.getMonth() + n
            )
            return this.state;
        });
    }

    generateMatrix() {
        var matrix = [];
        // The following code creates the header 
        var year = this.state.activeDate.getFullYear();
        var month = this.state.activeDate.getMonth();
        var firstDay = new Date(year, month, 1).getDay();

        var maxDays = this.nDays[month];
        if (month == 1) { // February 
            if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
                maxDays += 1;
            }
        }

        var counter = 1;
        for (var row = 1; row < 7; row++) {
            matrix[row] = [];
            for (var col = 0; col < 7; col++) {
                matrix[row][col] = -1;
                if (row == 1 && col >= firstDay) {
                    // Fill in rows only after the first day of the month 
                    matrix[row][col] = counter++;
                } else if (row > 1 && counter <= maxDays) {
                    // Fill in rows only if the counter's not greater than 
                    // the number of days in the month 
                    matrix[row][col] = counter++;
                }
            }
        }

        if (matrix[6][0] == -1) {
            matrix.pop();
        }

        return matrix;
    }

    render() {
        if (!this.state.fontsLoaded) {
            return null;
        }
        var matrix = this.generateMatrix();

        var rows = [];

        var item_id = 1;
        var row_id = 1
        var not_count = 1;
        var id = '';
        row_length = matrix.length;

        day_row = this.weekDays.map((row, rowIndex) => {
            var rowItems = row.map((item, colIndex) => {
                id = 'day_item' + rowIndex + '_' + colIndex;
                return (
                    <Text
                        key={id}
                        style={styles.days}>
                        {item}
                    </Text>
                );
            });
            id = 'row' + rowIndex;
            row_id++;
            return (
                <View
                    key={id}
                    style={styles.dayRow}>
                    {rowItems}
                </View>
            );
        });
        item_id = 0;
        rows = matrix.map((row, rowIndex) => {

            var rowItems = row.map((item, colIndex) => {
                if (item != -1) {
                    id = 'item' + item_id;
                    item_id++;
                } else {
                    id = 'not_item' + not_count;
                    not_count++;
                }

                if (item == 5 || item == 8) {
                    image = require('../../../assets/alcohol/beer_logo.png');
                    if (item_id == 30) {
                        item_id++;
                    }
                } else if (item == 9) {
                    image = require('../../../assets/alcohol/wine_logo.png');
                } else if (item == 14) {
                    image = require('../../../assets/alcohol/soju_logo.png');
                } else if (item == 24) {
                    image = require('../../../assets/alcohol/vodka_logo.png');
                } else {
                    image = null;
                }

                return (
                    <ImageBackground
                        key={id}
                        source={item == 5 || item == 21? require('../../../assets/alcohol/beer_logo.png') :
                            item == 9 ? require('../../../assets/alcohol/wine_logo.png') :
                                item == 14 ? require('../../../assets/alcohol/soju_logo.png') :
                                    item == 24 ? require('../../../assets/alcohol/vodka_logo.png') : null}
                        imageStyle={item==5||item==9||item==14||item==21||item==24? {opacity:1}:{opacity:0}}
                        resizeMode='center'
                        style={styles.image}
                        onPress={() => this._onPress(item)}>
                        <Text
                            style={styles.item}>
                            {item != -1 ? item : ''}
                        </Text>
                    </ImageBackground>
                );
            });
            row_id++;
            id = 'row' + rowIndex;
            return (
                <View
                    key={id}
                    style={row_length==7 ? styles.longrowItem: styles.rowItem}>
                    {rowItems}
                </View>
            );
        });

        return (
            <View>
                <View
                    style={styles.header}>
                    <Button
                        icon={<MaterialIcons
                            name='keyboard-arrow-left'
                            size={50}
                            color="#FFC870"
                        />}
                        type="clear"
                        onPress={() => this.changeMonth(-1)} />
                    <Divider orientation="horizontal" />
                    <Text style={styles.month}>
                        {this.months[this.state.activeDate.getMonth()]} &nbsp;
                        {this.state.activeDate.getFullYear()}
                    </Text>
                    <Divider orientation="horizontal" />
                    <Button
                        icon={<MaterialIcons
                            name='keyboard-arrow-right'
                            size={50}
                            color="#FFC870"
                        />}
                        type="clear"
                        onPress={() => this.changeMonth(+1)} />
                </View>
                <View style={styles.calendar}>
                    {day_row}
                    <Divider orientation='horizontal' style={styles.divider} width={3} color='#E69C4D' />
                    {rows}
                </View>
            </View>
        );
    }
}

export default Calendar_view;