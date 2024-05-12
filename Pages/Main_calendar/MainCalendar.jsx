import React from 'react'
import { View } from 'react-native'
import CalendarView from '../../Components/Main_calendar/Calendar_view/CalendarView'
import FunfactCard from '../../Components/Main_calendar/Funfact_card/FunfactCard'
import StatSimple from '../../Components/Main_calendar/Stat_simple/StatSimple'

import styles from './styles'

const MainCalendar = () => {
  return (
    <View style={{ flex:1 }}>
        <CalendarView />
        <View style={styles.cards}>
            <FunfactCard />
            <StatSimple />
        </View>
    </View>
  )
}

export default MainCalendar