import {
  StyleSheet
} from 'react-native';

export const layoutStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  row: {
    flex:1,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  section: {
      marginTop: 15,
      marginBottom: 15,
  },
  title: {
    marginBottom: 15,
    fontSize: 24,
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'white',
  },
  paragraph: {
    marginBottom: 5,
    textAlign: 'center',
    color: '#ffffff',
    opacity: .7,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  error: {
    margin: 10,
    textAlign: 'center',
    color: '#d81b1b',
    backgroundColor: 'rgba(0,0,0,0)',
  },
  buttonContainer: {
    marginBottom: 8,
    width: '100%',
  },
  input: {
    width: '100%',
    height: 38,
    marginBottom: 10,
    padding: 10,
    backgroundColor: 'rgba(255,255,255,0.6)',
    borderRadius: 5,
    fontSize: 12,
  },
  backgroundImage: {
    flex: 1,
    height: 100,
    width: '200%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
      width: 80,
      height: 80,
      borderRadius: 40,
      backgroundColor: 'black',
  }
})
