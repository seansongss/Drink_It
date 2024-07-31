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
        padding: 5,
        backgroundColor: "#2e4689",
        borderRadius: 20,
    },
    filterText: {
        fontSize: 22,
        color: "white",
        alignSelf: "center",
        justifyContent: "center",
        fontFamily: "Jaldi_700Bold",
        marginRight: 5,
    },
    renderItemContainer: {
        padding: 10,
        backgroundColor: "#2e4689",
        borderWidth: 1,
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
        gap: 5,
    },
    searchBar: {
        height: 45,
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
});

export default styles;