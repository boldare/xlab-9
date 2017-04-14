import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  buttonText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#ffffff',
    letterSpacing: 2,
    lineHeight: 28,
  },
  button: {
    flex: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFAAB1',
    borderRadius: 50,
    height: 50,
    marginVertical: 5,
    minWidth: '45%',
  },
  buttonGhost: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderWidth: 2,
    borderColor: '#FFAAB1',
  },
  buttonGhostText: {
    color: '#FFAAB1',
  },
  buttonFull: {
    minWidth: '100%',
  },
  buttonDisable: {
    opacity: 0.4,
  }
})