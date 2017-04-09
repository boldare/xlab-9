import React, { Component } from 'react'
import * as firebase from 'firebase'
import {
    ScrollView,
    View,
    Text,
    TextInput,
} from 'react-native'

import { layoutStyles } from './../styles'
import { styles } from './styles'
import { Button } from './../../components/Button'
import { MessageList } from './../../components/MessageList'

export class ChatView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: '',
            messages: null,
            isLoaded: false,
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

    render() {
        return (
            <ScrollView contentContainerStyle={styles.chatContainer}>
                <Text style={styles.title}>
                    Chat {this.props.room.name}
                </Text>

                <MessageList 
                    messages={this.state.messages}
                    isLoaded={this.state.isLoaded}
                    {...this.props}
                />
                <View style={styles.formContainer}>
                    <TextInput
                        style={layoutStyles.input}
                        underlineColorAndroid="rgba(0,0,0,0)"
                        placeholderTextColor="rgba(0,0,0,0.7)"
                        onChangeText={(message) => this.setState({message})}
                        value={this.state.message}
                        placeholder="Widomosc"
                        autoCapitalize='none'
                    />
                    <Button
                        onPress={() => { this.handleSendMessage() }}
                        title="Wyślij widomosc"
                    />
                </View>
            </ScrollView>
        )
    }
}