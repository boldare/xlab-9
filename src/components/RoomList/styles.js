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
  },
  listItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 30,
    paddingBottom: 20,
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
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
    fontSize: 16,
  },
  listItemAuthor: {
    fontSize: 12,
    opacity: .7,
  },
  loader: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  }
})