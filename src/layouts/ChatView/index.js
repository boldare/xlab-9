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
        this.messagesRef = firebase.database().ref().child('rooms/' + this.props.room._key + '/messages')
    }

    componentDidMount() {
        this.messagesRef.on('value', messages => {
            var items = [];

            messages.forEach((child) => {
                items.push({
                    userName: child.val().userName,
                    userId: child.val().userId,
                    userAvatar: child.val().userAvatar,
                    message: child.val().message,
                    creationDate: child.val().creationDate,
                    data: child.val().data,
                    type: child.val().type,
                    _key: child.key
                });
            });

            this.setState({ 
                messages: items,
                isLoaded: true,
            })
        });
    }

    handleSendMessage() {
        this.messagesRef.push({
            userName: this.props.user.displayName,
            userId: this.props.user.uid,
            userAvatar: this.props.user.photoURL,
            message: this.state.message,
            creationDate: Date.now(),
        }).then(data => {
            this.setState({ message: '' })
        });
    }

    takePhoto() {
        this.props.navigator.push({
            name: 'CAMERA',
            passProps: {
                room: this.props.room,
                user: this.props.user,
            }
        })
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
                    <TouchableHighlight 
                            onPress={() => { this.takePhoto() }}
                        style={styles.iconCamera}
                    >
                        <View>
                            <Icon
                                name="ios-camera"
                                color="#fff"
                                size={15}
                            />
                        </View>
                    </TouchableHighlight>
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