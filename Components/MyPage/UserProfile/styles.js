import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    profileContainer: {
        flexDirection: "row",
        alignItems: "center",
        // borderWidth: 1,
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
        justifyContent: "space-evenly",
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: "#587A83",
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
    },
    text: {
        color: "black",
        fontSize: 15,
        fontFamily: "Jaldi_700Bold",
    }
});

export default styles;
