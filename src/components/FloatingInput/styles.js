import { StyleSheet, Dimensions } from 'react-native'

export const styles = StyleSheet.create({
    input: {
        position: 'relative',
        width: Dimensions.get('window').width - 40,
        left: 20,
        top: -10,
        height: 50,
        padding: 10,
        backgroundColor: 'rgba(255,255,255,0.95)',
        borderWidth: 2,
        borderColor: 'rgba(255,255,255,1)',
        borderRadius: 25,
        fontSize: 14,
        paddingLeft: 20,
    },
    sendIconBox: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: -5,
        height: 40,
        width: 40,
        left: Dimensions.get('window').width - 70,
        backgroundColor: '#7FB285',
        borderRadius: 20,
    },
    sendLabel: {
        color: 'white',
    },
})