import { StyleSheet, Dimensions, Platform } from 'react-native'

export const styles = StyleSheet.create({
  chatList: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'stretch',
    height: Dimensions.get('window').height - 100,
  },
  listView: {
    margin: 20,
    paddingBottom: Platform.OS === 'ios' ? 0 : 30,
  },
  listItem: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 20,
    marginTop: 20,
    marginRight: 40,
  },
  loader: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
})