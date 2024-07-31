import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        backgroundColor: '#e7eef4',
        alignItems: 'center',
        justifyContent: 'center',
    },
    wrapper: {
        height: "100%",
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputView: {
        width: "60%",
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
        width: "60%",
        backgroundColor: "#b3d8b2",
        borderRadius: 15,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10
    },
});

export default styles;