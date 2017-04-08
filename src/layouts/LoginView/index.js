import React, { Component } from 'react'
import {
    ScrollView,
    View,
    Text,
    TextInput,
    Button,
    Alert,
    Platform,
} from 'react-native'
import KeyboardSpacer from 'react-native-keyboard-spacer'
import * as firebase from 'firebase'
import { styles } from './../styles'

export class LoginView extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            email: '',
            password: '',
            error: false,
        }
    }

    handleSignIn() {
        this.setState({ error: false })

        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(userData => this.successAlert(userData))
            .catch(error => this.setState({ error: error.message }))
    }

    handleSignUp() {
        this.setState({ error: false })

        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(userData => this.successAlert(userData))
            .catch(error => this.setState({ error: error.message }))
    }

    successAlert(user) {
        Alert.alert(
            'success',
            'You are ' + user.email,
            [{ text: 'OK' }],
            { cancelable: false }
        )
    }

    render() {
        return (
            <ScrollView 
                contentContainerStyle={styles.container}
                scrollEnabled={false}
            >
                <View style={styles.row}>
                    <Text style={styles.title}>
                        React Native Messanger
                    </Text>
                    <Text style={styles.paragraph}>
                        Aby dołączy do chatu {'\n'}
                        nalezy się zarejestrowac i zalogowac {'\n'}
                    </Text>
                    { this.state.error &&
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
                            onPress={() => { this.handleSignIn() }}
                            title="Zaloguj się"
                        />
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button
                            style={styles.button}
                            color="#000000"
                            onPress={() => { this.handleSignUp() }}
                            title="Zarejestruj się"
                        />
                    </View>
                </View>
                {
                    Platform.OS === 'ios' &&
                    <KeyboardSpacer />
                }
            </ScrollView>
        )
    }
}