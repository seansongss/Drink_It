import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e7eef4',
        alignItems: 'center',
        justifyContent: 'center',
    },
    signUpContainer: {
        flexDirection: "row",
        gap: 5,
        marginTop: -80,
        justifyContent: "center",
    },
    socialContainer: {
        flexDirection: "row",
        justifyContent: "center",
    },
    inputView: {
        // width: "80%",
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
        height: 50,
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
        marginLeft: 5,
        marginTop: -18,
        marginBottom: 20,
    },
    errorBorder: {
        borderColor: 'red',
        borderWidth: 2,
    },
});

export default styles;