import { StyleSheet, Dimensions } from 'react-native'

export const styles = StyleSheet.create({
  roomList: {
    flex: 1,
    backgroundColor: 'white',
    width: Dimensions.get('window').width - 40,
    margin: 20,
    borderRadius: 20,
  },
  listView: {
    margin: 20,
  }
})