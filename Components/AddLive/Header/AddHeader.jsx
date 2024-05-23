import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const AddHeader = ({ containerStyle, onDateChange, onDurationChange }) => {
    let today = new Date();
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        // Set initial date
        onDateChange(`${today.getMonth() + 1}/${today.getDate()}`);

        // Set up timer
        const interval = setInterval(() => {
            setTimer(prevTimer => {
                const newTimer = prevTimer + 1;
                onDurationChange(newTimer);
                return newTimer;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [onDateChange, onDurationChange]);

    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;

    return (
        <View style={containerStyle}>
            <View style={styles.headerItem}>
                <Text style={styles.text}>
                    {today.getMonth() + 1}/{today.getDate()}
                </Text>
            </View>
            <View style={styles.headerItem}>
                <Text style={styles.text}>
                    {minutes}m {seconds}s
                </Text>
            </View>
            <View style={styles.location}>
                <Text style={styles.text}>Daldongnae, Waterloo</Text>
            </View>
        </View>
    );
};

export default AddHeader;
