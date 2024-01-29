import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import Profile_components from "../Profile_component/Profile_component";
import Placeholer from "../Placeholder";
import { Icon } from "@rneui/base";
import Stat_card from "./Stat_card";
import styles from "./styles";

const UserBox = () => {
    return (
        <View style={styles.userBox}>
            <View style={styles.userInfo}>
                <Profile_components nickname="test_id_1123" exp={0.3} />
            </View>
            <Placeholer width={20} />
            <View style={styles.buttonContainer}>
                <View style={styles.buttonsRow}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => alert("Button 1 pressed")}
                    >
                        <Image
                            style={styles.button}
                            source={require("../../assets/my_page/my_favorites.png")}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => alert("Button 2 pressed")}
                    >
                        <Image
                            style={styles.button}
                            source={require("../../assets/my_page/my_combinations.png")}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

// Sub-component StatBox
const StatBox = () => {
    return (
        <View style={styles.statBox}>
            <View style={styles.statTop}>
                <Image
                    source={require("../../assets/my_page/stat.png")}
                    style={{ width: 60, height: 45 }}
                    resizeMode="stretch"
                />
                <TouchableOpacity>
                    <Icon name="navigate-next" size={50} />
                </TouchableOpacity>
            </View>
            <Stat_card />
            <Stat_card />
            <Stat_card />
        </View>
    );
};

const My_page = () => {
    return (
        <View style={styles.container}>
            <UserBox />
            <StatBox />
        </View>
    );
};

export default My_page;
