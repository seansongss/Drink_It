import Funfact_card from "../../Components/Funfact_card/Funfact_card";
import Stat_simple from "../../Components/Stat_simple/Stat_simple";
import LinearProgressAPI from "../../Components/Stat_simple/Stat_simple2";
import Calendar_view from "../../Components/Calendar_view/Calendar_view";
import { SafeAreaView, View } from "react-native";
import { Component } from 'react';

import styles from "./styles";

const databaseURL = "https://drink-it-5910f-default-rtdb.firebaseio.com";

class Data_base extends Component {
    constructor() {
        super();
        this.state = {
            Combination: {}
        };
    }

    _get() {
        fetch(`${databaseURL}/Combination.json`).then(res => {
            if (res.status != 200) {
                throw new Error(res.statusText);
            }
            return res.json();
        }).then(Combination => this.setState({ Combination: Combination }));
    }
    shouldComponentUdate(nextProps, nextState) {
        return nextState.Combination != this.state.Combination;
    }
    componentDidMount() {
        this._get();
    }
    render() {
        return (
            <View>
                {Object.keys(this.state.Combination).map(id => {
                    const combination = this.state.Combination[id];
                    return (
                        <View>
                            <Text>
                                {Combination.Ingredient}
                            </Text>
                        </View>
                    )
                })}
            </View>
        )
    }
}

function Data_combination (){
    
}

function Main_calendar (){
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