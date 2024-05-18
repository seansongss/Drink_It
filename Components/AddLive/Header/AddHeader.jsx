import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

const AddHeader = ({ containerStyle }) => {
    let today = new Date();
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

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