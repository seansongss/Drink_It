import React, {useState, useEffect} from 'react'
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './styles';

const AddHeader = () => {
    let today = new Date();
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(prevTimer => prevTimer + 60);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <SafeAreaView>
            <View style={styles.headerContainer}>
                <View style={styles.date}>
                    <Text style={styles.text}>
                        {today.getMonth() + 1}/{today.getDate()}
                    </Text>
                </View>
                <View style={styles.time}>
                    <Text style={styles.text}>
                        {Math.floor(timer / 3600)}m {Math.floor((timer % 3600) / 60)}s
                    </Text>
                </View>
                <View style={styles.location}>
                    <Text style={styles.text}>Daldongnae, Waterloo</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default AddHeader