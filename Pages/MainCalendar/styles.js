import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: "#e6eef4",
    },
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: "#e6eef4",
    },
    cards: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        paddingVertical: 10,
        marginVertical: 10,
    },
});

export default styles;