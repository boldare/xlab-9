import { StyleSheet, Platform } from 'react-native'

export const styles = StyleSheet.create({
  buttonText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#ffffff',
    letterSpacing: 2,
    lineHeight: Platform.OS === 'ios' ? 28 : 14,
  },
  button: {
    flex: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF5967',
    borderRadius: 50,
    height: 50,
    marginVertical: 5,
    minWidth: '45%',
  },
  buttonGhost: {
    backgroundColor: 'rgba(255,255,255,0)',
    borderWidth: 2,
    borderColor: '#FF5967',
  },
  buttonGhostText: {
    color: '#fff',
  },
  buttonFull: {
    minWidth: '100%',
  },
  buttonDisable: {
    opacity: 0.4,
  }
})