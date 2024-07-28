import { FlatList, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e6eef4",
    },
    header: {
        height: "8%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: "7%",
    },
    filterContainer: {
        flexDirection: "row",
        alignItems: "center",
        padding: 5,
        backgroundColor: "#2e4689",
        borderRadius: 20,
    },
    contentContainer: {
        width: "90%",
        height: "88%",
        alignSelf: "center",
        backgroundColor: "white",
        marginVertical: 10,
        borderRadius: 25,
        borderWidth: 3,
        borderColor: "#fff9d4",
    },
    searchHeader: {
        paddingHorizontal: "5%",
        marginTop: 15,
        marginBottom: 10,
        gap: 10,
    },
    searchBar: {
        width: "100%",
        height: 50,
        borderRadius: 30,
        paddingHorizontal: 20,
        borderWidth: 2,
        borderColor: "#b2d8b2",
        fontFamily: "Jaldi_400Regular",
    },
    searchFilter: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    flatList: {
        padding: 20,
        gap: 20,
    },
    filterText: {
        fontSize: 22,
        color: "white",
        fontFamily: "Jaldi_700Bold",
    },
});

export default styles;