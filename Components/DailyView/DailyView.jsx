import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Divider, Button } from '@rneui/themed';
import { MaterialIcons } from '@expo/vector-icons';
import { useFonts, Jaldi_400Regular, Jaldi_700Bold } from '@expo-google-fonts/jaldi'

import styles from './styles'

// getfeelingicon by feeling 1-5
const getfeelingicon = (feeling) => {
	switch (feeling) {
		case 1:
			return require("../../assets/Daily_view/feeling5.png");
		case 2:
			return require("../../assets/Daily_view/feeling4.png");
		case 3:
			return require("../../assets/Daily_view/feeling3.png");
		case 4:
			return require("../../assets/Daily_view/feeling2.png");
		case 5:
			return require("../../assets/Daily_view/feeling1.png");

		default:
			break;
	}
};

const DailyView = ({ navigation, route }) => {
    const { year, month, date } = route.params;
    const dayList = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
    const [activeDate, setActiveDate] = useState(new Date(year, month, date));

    let [fontsLoaded] = useFonts({
        Jaldi_400Regular,
        Jaldi_700Bold,
    });

    const changeDate = (n) => {
        setActiveDate(new Date(activeDate.getFullYear(), activeDate.getMonth(), activeDate.getDate() + n));
    }

    // feeling component
	const Feeling = ({ name }) => {
		return (
			<View style={styles.Feeling}>
				<View style={styles.FeelingImage}>
					<Image
						source={getfeelingicon(3)}
						style={{
							width: 50,
							height: 50,
							resizeMode: "center",
						}}
					/>
                </View>
				<Text style={styles.text}>{name}</Text>
			</View>
		);
	};

    return (
        <View style={styles.dailyViewContainer}>
            <View style={styles.dailyViewWrapper}>
                <View style={styles.dailyViewHeader}>
                    <MaterialIcons
                        name='keyboard-arrow-left'
                        size={50}
                        color="black"
                        style={[styles.dailyViewButton]}
                        onPress={() => changeDate(-1)} />
                    <Text style={styles.dateText}>{`${activeDate.getMonth() + 1}/${activeDate.getDate()} ${dayList[activeDate.getDay()]}`}</Text>
                    <MaterialIcons
                        name='keyboard-arrow-right'
                        size={50}
                        color="black"
                        style={[styles.dailyViewButton]}
                        onPress={() => changeDate(+1)} />
                </View>
                <Divider orientation='horizontal' style={styles.divider} width={3} color='#E69C4D' />
                <View style={styles.editContainer}>
                    <TouchableOpacity onPress={() => console.log('edit button pressed')}>
                        <Image source={require('../../assets/Calendar_view/last_night.png')}
                            style={{ width: 40, height: 40 }}
                            resizeMode='contain' />
                    </TouchableOpacity>
                </View>
                <View style={[styles.dailyViewInfo, {backgroundColor: '#E69C4D'}]}>
                    <Image source={require('../../assets/Daily_view/clock.png')}
                        style={{ width: 30, height: 30, marginHorizontal: 5, marginRight: 15 }}
                        resizeMode='contain' />
                    <Text style={styles.text}>11 PM - 1 AM</Text>
                </View>
                <View style={[styles.dailyViewInfo, {backgroundColor: '#afeeee'}]}>
                    <Image source={require('../../assets/Add_live/bright_location.png')}
                        style={{ width: 30, height: 30, marginHorizontal: 5, marginRight: 15 }}
                        resizeMode='contain' />
                    <Text style={styles.text}>DALDONGNAE, WATERLOO</Text>
                </View>
                <View style={styles.dailyViewFeeling}>
                    <Feeling name='Before' />
                    <Feeling name='During' />
                    <Feeling name='After' />
                </View>
                <View style={styles.dailyViewNote}>
                    <Image source={require('../../assets/Add_live/bright_note.png')}
                        style={{ width: 30, height: 30, marginHorizontal: 5, marginRight: 15 }}
                        resizeMode='contain' />
                    <Text style={styles.noteText}>{'\u2022'} Notes texttextext</Text>
                    <Text style={styles.noteText}>{'\u2022'} Notes texttextext</Text>
                </View>
                <Button title="Go back" onPress={() => navigation.navigate('CalendarView')} />
            </View>
        </View>
    )
}

export default DailyView