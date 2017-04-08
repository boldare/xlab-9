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
import { styles } from './../styles'
import backgroundImage from './../../images/background.jpg'
import { Button } from './../../components/Button'

export class LoginView extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            email: '',
            password: '',
            error: false,
            fadeAnim: new Animated.Value(0),
        }
    }

    componentDidMount() {
        Animated.timing(
            this.state.fadeAnim,
            {
                toValue: 1,
                duration: 1000,
            },
        ).start()
    }

    handleSignIn() {
        this.setState({ error: false })

        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .catch(error => this.setState({ error: error.message }))
    }

    handleSignUp() {
        this.setState({ error: false })

        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
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
                <Animated.Image source={backgroundImage} style={[styles.backgroundImage, { opacity: this.state.fadeAnim}]}>
                    <View style={styles.row}>
                        <View style={styles.section}>
                            <Text style={styles.title}>
                                Witamy w aplikacji
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
                        </View>
                        <TextInput
                            style={styles.input}
                            underlineColorAndroid="rgba(0,0,0,0)"
                            onChangeText={(email) => this.setState({email})}
                            value={this.state.email}
                            placeholder="E-mail"
                        />
                        <TextInput
                            style={styles.input}
                            underlineColorAndroid="rgba(0,0,0,0)"
                            onChangeText={(password) => this.setState({password})}
                            value={this.state.password}
                            placeholder="Hasło"
                            secureTextEntry
                        />
                        <View style={[styles.buttonContainer, { marginTop: 10 }]}>
                            <Button
                                onPress={() => { this.handleSignIn() }}
                                title="Zaloguj się"
                            />
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button
                                onPress={() => { this.handleSignUp() }}
                                title="Zarejestruj się"
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