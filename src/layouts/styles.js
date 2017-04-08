import {
  StyleSheet
} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  row: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  title: {
    margin: 10,
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
  },
  paragraph: {
    marginBottom: 5,
    textAlign: 'center',
    color: '#333333',
    backgroundColor: 'rgba(0,0,0,0)',
  },
  error: {
    margin: 10,
    textAlign: 'center',
    color: '#d81b1b',
    backgroundColor: 'rgba(0,0,0,0)',
  },
  buttonContainer: {
    marginBottom: 10,
  },
  input: {
    width: '90%',
    height: 34,
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#dceaec',
    fontSize: 12,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
});