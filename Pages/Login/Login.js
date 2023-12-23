function Login (){
    return(
        <SafeAreaView>
            <Calendar_view />
            <View style={styles.cards}>
                <Funfact_card />
                <Stat_simple />
            </View>
            <Data_base />
        </SafeAreaView>
    );
}

export default Main_calendar;