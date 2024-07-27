import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#b2d8b2",
    },
    userContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 10,
        marginLeft: -15,
        marginBottom: 10,
        backgroundColor: "black",
    },
    body: {
        flex: 1,
        width: "100%",
        height: "50%",
        backgroundColor: "#e6eef4",
    },
});

export default styles;