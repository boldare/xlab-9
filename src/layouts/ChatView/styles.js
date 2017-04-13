import { StyleSheet, Dimensions } from 'react-native'

export const styles = StyleSheet.create({
    chatView: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        backgroundColor: '#fff',
    },
    formContainer: {
        minHeight: 40,
        paddingHorizontal: 15,
        borderTopWidth: 1,
        borderTopColor: '#EF959C',
    },
    sendInput: {
        width: '100%',
        height: 60,
        padding: 10,
        backgroundColor: 'rgba(255,255,255,0.6)',
        fontSize: 16,
    },
    iconSend: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 5,
        bottom: 15,
        width: 35,
        height: 35,
        borderRadius: 35/2,
        backgroundColor: '#EF959C',
    }
})