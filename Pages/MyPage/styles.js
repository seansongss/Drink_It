import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    userContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: -15,
        marginBottom: 10,
    },
    userSetting: {
        marginLeft: 10,
        flexDirection: "row",
        gap: 5,
    },
    statTop: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    statBox: {
        width: "80%",
        height: "70%",
        backgroundColor: "#CCE2B1",
        padding: "10%",
        marginHorizontal: "10%",
        borderRadius: 20,
        justifyContent: "space-between",
    },
    userBox: {
        flexDirection: "row", // Horizontal layout
        width: "90%",
        height: "17%",
        margin: "5%",
        backgroundColor: "#E0EED0",
        justifyContent: "space-between",
        paddingHorizontal: 10,
    },
    userInfo: {
        justifyContent: "center",
    },
    buttonContainer: {
        justifyContent: "center", // Center vertically
        alignItems: "center", // Center horizontally
    },
    buttonsRow: {
        flexDirection: "row", // Horizontal layout
        justifyContent: "space-around",
    },
    button: {
        width: 40,
        height: 40,
        marginHorizontal: 7,
        marginTop: -3,
    },
});

export default styles;