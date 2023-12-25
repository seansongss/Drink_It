import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Avatar, LinearProgress } from "@rneui/base";
import Placeholer from "../Placeholder";

let customFonts = {
    Jaldi: require("../../assets/fonts/Jaldi-Bold.ttf"),
    "Jaldi-bold": require("../../assets/fonts/Jaldi-Bold.ttf"),
};

const Profile_components = (props) => {
    return (
        <View style={styles.profile}>
            <Avatar
                avatarStyle={{
                    backgroundColor: "#FFFAE0",
                }}
                rounded
                title={props.nickname[0]}
                size={60}
            />
            <View style={styles.profile_box}>
                <View style={styles.profie_info}>
                    <Text style={styles.nickname_text}>{props.nickname}</Text>
                    <LinearProgress value={props.exp} />
                </View>
                <Placeholer width={20} />
                <View style={styles.profie_info}>
                    <TouchableOpacity style={styles.button}></TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    profile: {
        flexDirection: "row",
    },
    nickname_text: {
        fontFamily: "Jaldi-bold",
        fontSize: 15,
    },
    profile_box: {
        height: 40,
        marginVertical: 10,
        paddingHorizontal: 10,
        flexDirection: "row",
        backgroundColor: "#587A83",
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
    },
    profie_info: {
        justifyContent: "center",
    },
    button: {
        backgroundColor: "lightblue",
        borderRadius: 10,
        width: 30,
        height: 30,
        borderWidth: 1,
        borderColor: "blue",
    },
});

export default Profile_components;
