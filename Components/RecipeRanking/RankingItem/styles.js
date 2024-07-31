import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    rankingItemWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#fff9d4",
        borderWidth: 3,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 25,
        borderColor: "#e6eef4",
    },
    itemContent: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
    },
    likeContainer: {
        alignItems: "center",
    },
});

export default styles;