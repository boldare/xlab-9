import React, { Component } from 'react'
import {
    ScrollView,
    View,
    Text,
    TextInput,
    Alert,
    Platform,
    Image,
    Animated,
} from 'react-native'
import KeyboardSpacer from 'react-native-keyboard-spacer'
import * as firebase from 'firebase'

import { layoutStyles } from './../styles'
import { styles } from './styles'
import { backgroundImage } from '../../images'
import { Button } from './../../components/Button'

Object.assign(styles, layoutStyles)

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

        /*
            ZADANIE NR.1 - Logowanie
            TODO :: Logowanie
        */
    }

    handleSignUp() {
        this.setState({ error: false })

        /*
            ZADANIE NR.1 - Logowanie
            TODO :: Rejestracja
        */
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
                <Animated.Image source={backgroundImage} style={styles.backgroundImage}>
                    <View style={styles.row}>
                        <View style={[styles.section, styles.textSection]}>
                            <Text style={styles.title}>
                                Witamy w aplikacji
                            </Text>
                            <Text style={styles.paragraph}>
                                Aby dołączyć do chatu {'\n'}
                                należy się zarejestrować i zalogować {'\n'}
                            </Text>
                            { 
                                /*
                                    ZADANIE NR.1 - Logowanie
                                    TODO :: Wyświetlanie error'a
                                */
                            }
                        </View>
                        <View style={styles.inputSection}>
                            <TextInput
                                style={styles.input}
                                underlineColorAndroid="rgba(0,0,0,0)"
                                placeholderTextColor="rgba(0,0,0,0.7)"
                                onChangeText={(email) => this.setState({ email })}
                                value={this.state.email}
                                placeholder="E-mail"
                                autoCapitalize='none'
                            />
                            <TextInput
                                style={styles.input}
                                underlineColorAndroid="rgba(0,0,0,0)"
                                placeholderTextColor="rgba(0,0,0,0.7)"
                                onChangeText={(password) => this.setState({ password })}
                                value={this.state.password}
                                placeholder="Hasło"
                            />
                        </View>
                        <View style={[styles.buttonContainer, styles.buttonContainerColumn, styles.buttonSection]}>
                            <Button
                                onPress={() => { this.handleSignIn() }}
                                title="Zaloguj się"
                                isFull
                            />
                            <Button
                                onPress={() => { this.handleSignUp() }}
                                title="Zarejestruj się"
                                isGhost
                                isFull
                            />
                        </View>
                    </View>
                    {
                        Platform.OS === 'ios' &&
                        <KeyboardSpacer />
                    }
                </Animated.Image>
            </ScrollView>
        )
    }
}