import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TextInput
} from 'react-native';
import * as firebase from 'firebase';
import { firebaseConfig } from '../config';

const firebaseApp = firebase.initializeApp(firebaseConfig);

class ChatComponent extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            user: null,
            email: '',
            password: '',
            error: '',
        };

        this.signInButton = this.signInButton.bind(this);
        this.signUnButton = this.signUnButton.bind(this);
        this.logoutButton = this.logoutButton.bind(this);
        this.clearError = this.clearError.bind(this);
        
        this.checkAuthStatus = this.checkAuthStatus.bind(this);
        this.checkAuthStatus();
    };

    checkAuthStatus() {
         firebaseApp.auth().onAuthStateChanged(function(firebaseUser) {
            console.log(firebaseUser);
        });
    };

    signInButton() {
        this.clearError();
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(data => this.setState({ user: data }))
            .catch(error => {
                this.setState({ error: error.message });
                console.log(error);
            });
    };

    signUnButton() {
        this.clearError();
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(data => this.setState({ user: data }))
            .catch(error => {
                this.setState({ error: error.message });
                console.log(error);
            });
    };

    logoutButton() {
        firebase.auth().signOut().then(() =>
            this.setState({ user: null })
        ).catch(error => console.log(error));
    };

    clearError() {
        this.setState({ error: '' });
    };

    render() {
        return (
            <View style={styles.container}>
                { this.state.user ? (
                    <View style={styles.row}>
                        <Text style={styles.welcome}>
                            Witaj w aplikacji!
                        </Text>
                        <Text style={styles.instructions}>
                            Jesteś zalogowany jako {'\n'} 
                            { this.state.user.email }
                        </Text>
                        <View style={[styles.buttonContainer, { marginTop: 10 }]}>
                            <Button
                                style={styles.button}
                                onPress={this.logoutButton}
                                title="Wyloguj się"
                            />
                        </View>
                    </View>
                ) : (
                    <View style={styles.row}>
                        <Text style={styles.welcome}>
                            React Native Messanger
                        </Text>
                        <Text style={styles.instructions}>
                            Aby dołączy do chatu {'\n'}
                            nalezy się zarejestrowac i zalogowac {'\n'}
                        </Text>
                        { (this.state.error != '') &&
                            <Text style={styles.error}>
                                { this.state.error }
                            </Text>
                        }
                        <TextInput
                            style={styles.input}
                            underlineColorAndroid="#dceaec"
                            onChangeText={(email) => this.setState({email})}
                            value={this.state.email}
                        />
                        <TextInput
                            style={styles.input}
                            underlineColorAndroid="#dceaec"
                            onChangeText={(password) => this.setState({password})}
                            value={this.state.password}
                            secureTextEntry
                        />
                        <View style={[styles.buttonContainer, { marginTop: 10 }]}>
                            <Button
                                style={styles.button}
                                onPress={this.signInButton}
                                title="Zaloguj się"
                            />
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button
                                style={styles.button}
                                color="#000000"
                                onPress={this.signUnButton}
                                title="Zarejestruj się"
                            />
                        </View>
                    </View>
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  row: {
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
    marginBottom: 5,
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

module.exports = ChatComponent;