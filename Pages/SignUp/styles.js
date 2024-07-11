import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e7eef4',
    },
    fullView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    title: {
        fontFamily: "Jaldi_700Bold",
        fontSize: 40,
        marginTop: -80,
        marginBottom: 40,
        textAlign: "center",
    },
    signupWrapper: {
        width: "60%",
    },
    inputView: {
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
    loginBtn: {
        backgroundColor: "#b3d8b2",
        borderRadius: 15,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10
    },
    forgotContainer: {
        flexDirection: "row",
        marginLeft: 50,
        alignSelf: "flex-start",
        gap: 5,
    },
    text: {
        fontFamily: "Jaldi_400Regular",
        fontSize: 18,
    },
    errorText: {
        fontFamily: "Jaldi_400Regular",
        color: 'red',
        fontSize: 15,
        marginTop: -20,
        marginBottom: 20,
    },
    errorBorder: {
        borderColor: 'red',
        borderWidth: 2,
    },
});

export default styles;