import React, { Component } from 'react'
import {
    ScrollView,
    View,
    Text,
    TextInput,
    Button,
    Alert,
} from 'react-native'
import KeyboardSpacer from 'react-native-keyboard-spacer';

import { styles } from './styles'
import { AuthUtil } from '../../utils'

export class LoginView extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            email: '',
            password: '',
        }
    }

    signInButton() {

    }

    async signUpButton() {
        try {
            let user = await AuthUtil.signUp(this.state.email, this.state.password)
            if (user) {
                Alert.alert(
                'Success',
                    'Created account ' + user.email,
                    [
                        {text: 'OK'},
                    ],
                    { cancelable: false }
                )
            }
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        return (
            <ScrollView 
                contentContainerStyle={styles.container}
                scrollEnabled={false}
            >
                <View style={styles.row}>
                    <Text style={styles.welcome}>
                        React Native Messanger
                    </Text>
                    <Text style={styles.instructions}>
                        Aby dołączy do chatu {'\n'}
                        nalezy się zarejestrowac i zalogowac {'\n'}
                    </Text>
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
                            onPress={() => { this.signInButton() }}
                            title="Zaloguj się"
                        />
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button
                            style={styles.button}
                            color="#000000"
                            onPress={() => { this.signUpButton() }}
                            title="Zarejestruj się"
                        />
                    </View>
                </View>
                <KeyboardSpacer />
            </ScrollView>
        )
    }
}