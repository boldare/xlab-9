import { StyleSheet, Dimensions, Platform } from 'react-native'

export const styles = StyleSheet.create({
  userImage: {
    width: 60,
    height: 60,
    margin: 10,
    borderRadius: 30,
    backgroundColor: Platform.OS === 'ios' ? '#A4C2EA' : 'rgba(0,0,0,0)',
  },
  headerContainer: {
    flex: 1,
    maxHeight: 100,
    width: Dimensions.get('window').width,
    padding: 20,
    paddingTop: 40,
    paddingBottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center',
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
  }
})