import React, { useState, useEffect } from 'react';
import { View, Text, TextInput } from 'react-native';

import { StyleProp, ViewStyle } from 'react-native';

import styles from './styles';

export interface AddHeaderProps {
    containerStyle: StyleProp<ViewStyle>;
    location: string;
    setLocation: (location: string) => void;
    today: Date;
}


const AddHeader: React.FC<AddHeaderProps> = ({ containerStyle, location, setLocation, today }) => {
    const [timer, setTimer] = useState<number>(0);

    useEffect(() => {
        // Set up timer
        const interval = setInterval(() => {
            setTimer(prevTimer => {
                const newTimer = prevTimer + 1;
                return newTimer;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [today]);

    const minutes: number = Math.floor(timer / 60);
    const seconds: number = timer % 60;

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
                <TextInput
                    style={styles.text}
                    value={location}
                    onChangeText={setLocation}
                />
            </View>
        </View>
    );
}

export default AddHeader