import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    addFeelingContainer: {
        padding: 15,
        marginVertical: 10,
        borderRadius: 10,
        backgroundColor: "white",
    },
    addFeelingWrapper: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-around",
    },
    addUnitContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        alignItems: "center",
        paddingVertical: 10,
        marginVertical: 10,
        borderRadius: 20,
        borderWidth: 3,
        borderColor: "black",
        backgroundColor: "white",
    },
    addFeeling: {
        alignItems: "center",
		justifyContent: "center",
    },
    addFeelingImage: {
        marginBottom: 5,
    },
	image: {
		width: 50,
		height: 50,
		resizeMode: 'center',
	},
	memoContainer: {
		flex: 1,
		marginVertical: 10,
		padding: 20,
		backgroundColor: 'white',
		borderRadius: 10,
	},
	memoInput: {
		flex: 1,
		width: '100%',
		padding: 10,
	},
    text: {
        fontSize: 18,
        fontFamily: 'Jaldi_700Bold',
    },
    recordButton: {
        marginVertical: 10,
        alignItems: "center",
        padding: 10,
        borderRadius: 20,
        borderWidth: 3,
        backgroundColor: "#E69C4D",
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    buttonClose: {
        backgroundColor: "#2196F3",
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    modalCloseText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
    recipeContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        padding: 10,
        borderWidth: 1,
    },
    addButton: {
        backgroundColor: "#c1dfb0",
        padding: 10,
        borderRadius: 5,
    },
    addButtonText: {
        color: "white",
    },
});

export default styles;