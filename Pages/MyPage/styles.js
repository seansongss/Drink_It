import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#b2d8b2",
    },
    userContainer: {
        height: "13%",
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        // borderWidth: 1,
    },
    userSetting: {
        flexDirection: "row",
        gap: 5,
        // borderWidth: 1,
    },
    statContainer: {
        flex: 1,
        width: "100%",
        backgroundColor: "#e6eef4",
    },
    statBox: {
        width: "80%",
        height: "90%",
        backgroundColor: "white",
        marginHorizontal: "10%",
        marginTop: 30,
        padding: "5%",
        borderRadius: 20,
        borderWidth: 3,
        borderColor: "#fff9d4",
        gap: 20,
    },
    statTop: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    statList: {
        justifyContent: "space-between",
        gap: 20,
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