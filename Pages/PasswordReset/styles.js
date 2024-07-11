import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e7eef4',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputView: {
        width: "80%",
        backgroundColor: "#e7eef4",
        borderRadius: 15,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20,
        borderColor: "#b3d8b2",
        borderWidth: 2,
    },
    inputText: {
        fontFamily: "Jaldi_400Regular",
        fontSize: 18,
        height: 40,
        color: "#a6aeb4",
    },
    sendBtn: {
        width: "80%",
        backgroundColor: "#b3d8b2",
        borderRadius: 15,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10
    },
    text: {
        fontFamily: "Jaldi_400Regular",
        fontSize: 18,
    },
});

export default styles;