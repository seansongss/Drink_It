import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        width: '80%',
        backgroundColor: '#FFFFF0',
        borderRadius: 30,
        borderColor: 'yellow',
        borderWidth: 3,
        alignItems: 'center',
    },
    condText: {
        fontSize: 15,
        marginTop: 15,
        marginLeft: '10%',
        alignSelf: 'flex-start',
    },
    condContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 15,
    },
    condItem: {
        alignItems: 'center',
    },
    condImage: {
        height: 50,
        width: 50,
        objectFit: 'fill',
        marginBottom: 7,
    },
});

export default styles;