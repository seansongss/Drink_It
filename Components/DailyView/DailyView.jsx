import React from 'react'
import { View, Text, Button } from 'react-native'

const DailyView = () => {
    return (
        <View>
                <Text>DailyView</Text>
                <Button title="Go back" onPress={() => navigation.navigate('CalendarView')} />
        </View>
    )
}

export default DailyView