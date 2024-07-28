import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    rankingItemWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#fff9d4",
        borderWidth: 3,
        padding: 15,
        borderRadius: 25,
        borderColor: "#e6eef4",
    },
    itemContent: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    likeContainer: {
        alignItems: "center",
    },
    text: {
        fontSize: 26,
        fontFamily: "Jaldi_400Regular",
    },
    likeText: {
        fontSize: 14,
        fontFamily: "Jaldi_400Regular",
        marginTop: -3,
    }
});

export default styles;