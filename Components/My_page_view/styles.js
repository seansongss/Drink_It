import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: "10%", // 10% margin at the top
        marginHorizontal: "2.5%", // 2.5% margin at the left and right
        backgroundColor: "white",
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
        height: "20%",
        margin: "5%",
        backgroundColor: "#E0EED0",
        justifyContent: "space-evenly",
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
        justifyContent: "spacebetween",
    },
    button: {
        backgroundColor: "lightblue",
        padding: 10,
        borderRadius: 10,
        width: 30,
        height: 30,
        borderWidth: 1,
        borderColor: "blue",
        alignItems: "center",
        margin: 10,
    },
});

export default styles;
