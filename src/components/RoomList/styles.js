import { StyleSheet, Dimensions, Platform } from 'react-native'

export const styles = StyleSheet.create({
  roomList: {
    flex: 1,
    backgroundColor: 'white',
    width: Dimensions.get('window').width - 40,
    margin: 20,
    borderRadius: 20,
  },
  listView: {
    marginVertical: 20,
    paddingBottom: Platform.OS === 'io' ? 0 : 30,
  },
  listItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 12,
    marginTop: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd',
  },
  listItemColumn: {
    flex: 1,
    width: Dimensions.get('window').width/4*3,
  },
  listItemColumnIcons: {
    flex: 1,
    width: Dimensions.get('window').width/4,
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginRight: 15,
  },
  listItemLabel: {
    fontSize: 15,
  },
  listItemOwner: {
    marginTop: 2,
    fontSize: 10,
    opacity: .7,
  },
  loader: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  swipableButton: {
    backgroundColor: '#e8e8e8',
    padding: 10,
    paddingHorizontal: 30,
    flex: 1,
    justifyContent: 'center',
  },
  swipableDangerButton: {
    backgroundColor: '#fb4545',
    paddingVertical: 10,
    paddingHorizontal: 30,
    flex: 1,
    justifyContent: 'center',
  }
})