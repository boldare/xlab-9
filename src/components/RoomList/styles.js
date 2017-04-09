import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  listContent: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  blankContent: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 15,
    minHeight: 300,
  },
  textItem: {
    fontSize: 16,
    color: 'rgba(0, 0, 0, 1)'
  },
  smallText: {
    marginTop: 3,
    fontSize: 11,
    color: 'rgba(0, 0, 0, 0.6)'
  },
  listItem: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    padding: 15,
    borderBottomColor: 'rgb(210, 221, 216)',
    borderBottomWidth: 1,
  }
})