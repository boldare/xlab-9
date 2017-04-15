import { StyleSheet, Dimensions } from 'react-native'

export const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    maxHeight: 60,
    width: Dimensions.get('window').width,
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#eeefe1',
  },
  headerColumn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerColumnFirst: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  headerColumnLast: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  headerText: {
    color: 'black',
  },
  goBack: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  label: {
    color: '#635D5C',
    marginLeft: 10,
    marginTop: -1,
  },
  title: {
    color: '#635D5C',
    fontSize: 18,
    textAlign: 'center',
  }
})