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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  error: {
    textAlign: 'center',
    color: '#d81b1b',
    margin: 10,
  },
  buttonContainer: {
    marginBottom: 10,
  },
  input: {
    width: '90%',
    marginBottom: 10,
    height: 34,
    padding: 10,
    fontSize: 12,
    backgroundColor: '#dceaec',
  }
});