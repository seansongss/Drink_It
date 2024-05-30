import { memo } from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    addUnitContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingVertical: 10,
        marginVertical: 10,
        borderRadius: 20,
        borderWidth: 3,
        backgroundColor: "white",
    },
    addUnit: {
        alignItems: "center",
    },
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
    addFeeling: {
        alignItems: "center",
    },
    addFeelingImage: {
        marginBottom: 5,
    },
	memoContainer: {
		flex: 1,
		padding: 20,
		backgroundColor: 'white',
		borderRadius: 10,
	},
	memoInput: {
		flex: 1,
		width: '100%',
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

const modalStyles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 22,
	},
	modalView: {
		margin: 20,
		backgroundColor: 'white',
		borderRadius: 20,
		padding: 35,
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
	buttonClose: {
		backgroundColor: '#2196F3',
		borderRadius: 20,
		padding: 10,
		elevation: 2,
		marginTop: 10,
	},
	addNewButton: {
		backgroundColor: '#c1dfb0',
		borderRadius: 20,
		padding: 10,
		elevation: 2,
		marginTop: 10,
	},
	textStyle: {
		color: 'white',
		fontWeight: 'bold',
		textAlign: 'center',
	},
	modalText: {
		marginBottom: 15,
		textAlign: 'center',
	},
	recipeContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '100%',
		padding: 10,
	},
	recipeDetails: {
		flex: 1,
		marginLeft: 10,
	},
	addButton: {
		backgroundColor: '#c1dfb0',
		padding: 10,
		borderRadius: 5,
	},
	addButtonText: {
		color: 'white',
	},
	input: {
		height: 40,
		borderColor: '#ccc',
		borderWidth: 1,
		borderRadius: 5,
		marginBottom: 10,
		paddingHorizontal: 10,
		width: '100%',
	},
	dropdown: {
		width: '100%',
		height: 40,
		borderColor: '#ccc',
		borderWidth: 1,
		borderRadius: 5,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 10,
	},
	dropdownItem: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 10,
	},
	dropdownIcon: {
		width: 30,
		height: 30,
		marginRight: 10,
	},
	dropdownText: {
		fontSize: 16,
	},
});