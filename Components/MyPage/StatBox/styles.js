import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    statBox: {
        width: "80%",
        backgroundColor: "white",
        marginHorizontal: "10%",
        marginVertical: 30,
        paddingHorizontal: "5%",
        borderRadius: 25,
        borderWidth: 3,
        borderColor: "#fff9d4",
        gap: 20,
    },
    statTop: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    statList: {
        gap: 20,
        marginBottom: 20,
    },
});

export default styles;