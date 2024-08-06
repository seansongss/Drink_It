import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#b2d8b2",
    },
    header: {
        height: "13%",
        flexDirection: "row",
        alignItems: "center",
    },
    backButton: {
        position: "absolute",
        zIndex: 1,
        left: "5%",
    },
    settingIcon: {
        flex: 1,
        alignItems: 'center',
    },
    contentContainer: {
        flex: 1,
        backgroundColor: "#e6eef4",
        paddingTop: 10,
        // paddingHorizontal: "15%",
    },
    personalSetting: {
        marginHorizontal: "15%",
        gap: 10,
        marginTop: 15,
        // borderWidth: 1,
    },
    divider: {
        marginHorizontal: "7%",
        marginVertical: 30,
        borderRadius: 10,
    },
    settingWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    text: {
        fontSize: 22,
        fontFamily: "Jaldi_400Regular",
    },
});

export default styles;