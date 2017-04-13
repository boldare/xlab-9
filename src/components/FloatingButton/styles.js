import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 40,
    bottom: 40,
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(0,0,0,0.9)',
  },
  icon: {
    position: 'relative',
    top: 1,
  },
  buttonDisable: {
    opacity: 0.4,
  }
})