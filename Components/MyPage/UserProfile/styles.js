import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    profile: {
        flexDirection: "row",
    },
    nickname_text: {
        fontFamily: "Jaldi-bold",
        color: "white",
        fontSize: 15,
    },
    profile_box: {
        position: "absolute",
        left: 30,
        top: -45,
        height: 60,
        marginVertical: 10,
        paddingLeft: 50,
        paddingRight: 10,
        flexDirection: "row",
        backgroundColor: "#587A83",
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
    },
    profie_info: {
        justifyContent: "center",
    },
    button: {
        marginTop: 5,
        width: 30,
        height: 30,
    },
    avatar_circle: {
        borderRadius: 200,
        backgroundColor: "#FFFAE0",
        position: "absolute",
        left: 5,
        top: -40,
    },
});

export default styles;
