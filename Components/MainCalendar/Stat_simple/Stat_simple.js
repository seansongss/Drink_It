import { StyleSheet, SafeAreaView, View } from "react-native";
import { ListItem } from '@rneui/base';
import { Text, Divider, Card, LinearProgress } from '@rneui/themed';
import { MaterialIcons } from '@expo/vector-icons';
import * as Font from 'expo-font';

import styles from "./styles";

export default function Stat_simple() {
    return (
        <View style={styles.long}>
            <View style={styles.stat} />
            <View style={styles.stat} />
            <View style={styles.stat} />
        </View>
    );
}
