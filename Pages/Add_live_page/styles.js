import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {},
    stage: {
        backgroundColor: "white",
        height: "100%",
    },
    add_unit_container: {
        borderRadius: 10,
        backgroundColor: "#fff9da",
        width: "80%",
        marginHorizontal: "10%",
        marginVertical: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    add_feeling_container: {
        backgroundColor: "#fff9da",
        width: "80%",
        marginHorizontal: "10%",
        fontFamily: "Jaldi-bold",
    },
    feeling_wrapper: {
        flexDirection: "row",
    },
});

export default styles;
