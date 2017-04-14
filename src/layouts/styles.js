import { StyleSheet, Platform } from 'react-native'

export const layoutStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  containerWithHeader: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    height: '100%',
  },
  row: {
    flex:1,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginBottom: 20,
  },
  section: {
      marginTop: 15,
      marginBottom: 15,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#635D5C',
  },
  titleBox: {
    marginVertical: 10,
  },
  paragraph: {
    textAlign: 'center',
    color: '#635D5C',
    backgroundColor: 'rgba(0,0,0,0)',
    opacity: 0.8,
  },
  error: {
    margin: 10,
    textAlign: 'center',
    color: '#d81b1b',
    backgroundColor: 'rgba(0,0,0,0)',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  buttonContainerColumn: {
    flexDirection: 'column',
  },
  input: {
    width: '100%',
    height: 50,
    marginBottom: 10,
    padding: 10,
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.9)',
    borderRadius: 25,
    fontSize: 14,
    paddingLeft: 20,
  },
  backgroundImage: {
    flex: 1,
    height: 100,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Platform.OS === 'ios' ? '#A4C2EA' : 'rgba(0,0,0,0)',
    overflow: 'hidden',
  }
})
