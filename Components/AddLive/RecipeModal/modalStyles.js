import { StyleSheet } from "react-native";

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
	recipeContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		// width: '100%',
		padding: 10,
		// marginHorizontal: 10,
        borderWidth: 2,
        borderRadius: 15,
        borderColor: '#c1dfb0',
        marginBottom: 10,
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
		fontFamily: 'Jaldi_400Regular',
	},
	button: {
		borderRadius: 20,
		padding: 5,
		elevation: 2,
		marginTop: 10,
	},
	input: {
		borderColor: '#ccc',
		borderWidth: 1,
		borderRadius: 5,
		marginBottom: 10,
		paddingHorizontal: 10,
        paddingVertical: 5,
		width: '100%',
        fontFamily: 'Jaldi_400Regular',
        fontSize: 16,
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
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
	},
	dropdownIcon: {
		width: 30,
		height: 30,
		marginRight: 10,
	},
	dropdownText: {
		fontSize: 16,
        marginLeft: 10,
        fontFamily: 'Jaldi_400Regular',
	},
    itemContainer: {
        width: '100%',
        justifyContent: 'space-between',
        gap: 3,
    },
	textStyle: {
		color: 'white',
        fontFamily: 'Jaldi_700Bold',
        fontSize: 16,
		textAlign: 'center',
	},
	modalText: {
		marginBottom: 15,
		textAlign: 'center',
		fontFamily: 'Jaldi_400Regular',
        fontSize: 16,
	},
    text: {
        fontFamily: 'Jaldi_400Regular',
        fontSize: 16,
    },
});

export default modalStyles;