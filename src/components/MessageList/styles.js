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
  },
  userListItem: {
    marginLeft: 25,
    justifyContent: 'flex-end',
  },
  listItemBox: {
    flex: 0,
    flexDirection: 'column',
    marginLeft: 15,
  },
  listItemTextBox: {
    flexGrow: 1,
    backgroundColor: '#C0DFEA',
    borderRadius: 15,
    padding: 10,
    marginTop: 10,
  },
  userTextBox: {
    backgroundColor: '#FF5967',
  },
  listItemLabel: {
    fontSize: 14,
  },
  listItemOwner: {
    fontSize: 12,
    opacity: .7,
  },
  loader: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userImage: {
    width: 30,
    height: 30,
    margin: 5,
    borderRadius: 15,
    backgroundColor: Platform.OS === 'ios' ? '#A4C2EA' : 'rgba(0,0,0,0)',
  },
})