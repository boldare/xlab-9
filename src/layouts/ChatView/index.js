import React, { Component } from 'react'
import * as firebase from 'firebase'
import {
    ScrollView,
    View,
    Text,
    TextInput,
    Platform,
    TouchableHighlight
} from 'react-native'
import KeyboardSpacer from 'react-native-keyboard-spacer'
import Icon from 'react-native-vector-icons/Ionicons'

import { styles } from './styles'
import { MessageList } from './../../components/MessageList'
import { ChatHeader } from './../../components/ChatHeader'

export class ChatView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: '',
            messages: null,
            isLoaded: false,
            isKeyboardActive: false,
        }
    }

    componentDidMount() {
        /*
            ZADANIE NR.4 - WYSYŁANIE WIADOMOŚCI
            TODO :: Ustawienie listener'a na wysyłke i odbiór wiadomości + załadowanie
            {
                userName
                userId
                userAvatar
                message
                creationDate
            }
        */
    }

    handleSendMessage() {
        /*
            ZADANIE NR.4 - WYSYŁANIE WIADOMOŚCI
            TODO :: Obsługa wysyłania wiadomości
            {
                userName
                userId
                userAvatar
                message
                creationDate
            }
        */
    }

    render() {
        return (
            <ScrollView
                contentContainerStyle={styles.chatView}
                keyboardShouldPersistTaps="handled"
                scrollEnabled={false}
            >
                <ChatHeader {...this.props} />

                <MessageList
                    ref={ ref => this.messageList = ref }
                    messages={this.state.messages}
                    isLoaded={this.state.isLoaded}
                    isKeyboardActive={this.state.isKeyboardActive}
                    {...this.props}
                />
                <View style={styles.formContainer}>
                    <TextInput
                        style={styles.sendInput}
                        underlineColorAndroid="rgba(0,0,0,0)"
                        placeholderTextColor="rgba(0,0,0,0.4)"
                        onChangeText={(message) => { this.setState({message}) }}
                        value={this.state.message}
                        placeholder="Wpisz wiadomość..."
                        autoCapitalize='none'
                        multiline
                    />
                    {
                        this.state.message.length > 0 &&
                        <TouchableHighlight 
                            onPress={() => { this.handleSendMessage() }}
                            style={styles.iconSend}
                        >
                            <View>
                                <Icon
                                    name="ios-paper-plane"
                                    color="#fff"
                                    size={15}
                                />
                            </View>
                        </TouchableHighlight>
                    }
                </View>
                {
                    Platform.OS === 'ios' &&
                    <KeyboardSpacer onToggle={(toggleState)=> { this.setState({ isKeyboardActive: toggleState }) }}/>
                }
            </ScrollView>
        )
    }
}