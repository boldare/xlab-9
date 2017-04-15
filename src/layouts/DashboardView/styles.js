import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    dashboardSection: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '45%',
        marginTop: 15,
        marginBottom: 15,
    },
    avatarRow: {
        flex: 0,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },
    userName: {
        marginTop: 20,
        color: 'white',
        opacity: 1,
    }
})