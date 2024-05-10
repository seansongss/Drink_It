import Funfact_card from "../../Components/Main_calendar/Funfact_card/Funfact_card";
import Stat_simple from "../../Components/Main_calendar/Stat_simple/Stat_simple";
import LinearProgressAPI from "../../Components/Main_calendar/Stat_simple/Stat_simple2";
import Calendar_view from "../../Components/Main_calendar/Calendar_view/Calendar_view";
import { SafeAreaView, View } from "react-native";
import { Component } from 'react';

import styles from "./styles";
import CalendarView from "../../Components/Main_calendar/Calendar_view/CalendarView";

function Main_calendar (){
    return(
        <SafeAreaView>
            <CalendarView />
            <View style={styles.cards}>
                <Funfact_card />
                <Stat_simple />
            </View>
        </SafeAreaView>
    );
}

export default Main_calendar;