import { StyleSheet, Dimensions } from 'react-native'

export const styles = StyleSheet.create({
    input: {
        position: 'relative',
        width: Dimensions.get('window').width - 40,
        left: 20,
        top: 0,
        height: 38,
        marginBottom: 10,
        padding: 10,
        backgroundColor: 'rgba(255,255,255,1)',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 15,
        fontSize: 12,
    },
    sendIconBox: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 10,
        left: Dimensions.get('window').width - 100,
        width: 70,
        backgroundColor: '#5cb85c',
        borderRadius: 15,
    },
    sendLabel: {
        color: 'white',
    },
})