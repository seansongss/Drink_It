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
    row: {
        justifyContent: 'space-between',
    },
    alcoholView: {
        width: '100%',
        marginVertical: 20,
        paddingHorizontal: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    alcoholLogo: {
        height: 40,
        width: 35,
        objectFit: 'fill',
    },
    addView: {
        borderRadius: 200,
        borderColor: 'white',
        borderWidth: 2,
    },
});

export default styles;