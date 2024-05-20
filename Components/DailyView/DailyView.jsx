import React from 'react'
import { View, Text, Button } from 'react-native'

const DailyView = ({ navigation, route }) => {
    const { year, month, date } = route.params;

    return (
        <View>
                <Text>DailyView</Text>
                <Text>{`${month}/${date}/${year}`}</Text>
                <Button title="Go back" onPress={() => navigation.navigate('CalendarView')} />
        </View>
    )
}

export default DailyView