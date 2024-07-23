import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    profileContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    avatarWrapper: {
        zIndex: 10,
        right: -15,
        width: 75,
        height: 75,
        borderRadius: 75,
        backgroundColor: "#FFFAE0",
        justifyContent: "center",
        alignItems: "center",
    },
    profileWrapper: {
        height: 60,
        justifyContent: "center",
        paddingHorizontal: 30,
        backgroundColor: "#587A83",
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
    },
    text: {
        color: "black",
        fontSize: 20,
        fontFamily: "Jaldi_700Bold",
        marginLeft: 10,
    }
});

export default styles;
