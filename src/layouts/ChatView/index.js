import React, { Component } from 'react'
import * as firebase from 'firebase'
import {
    ScrollView,
    Animated,
    Easing,
    View,
    Platform,
    Text,
    TextInput,
} from 'react-native'
import KeyboardSpacer from 'react-native-keyboard-spacer'

import { layoutStyles } from './../styles'
import { styles } from './styles'
import { backgroundImage } from '../../images/'
import { Header } from './../../components/Header'
import { Button } from './../../components/Button'
import { MessageList } from './../../components/MessageList'
import { FloatingButton } from './../../components/FloatingButton'
import { FloatingInput } from './../../components/FloatingInput'

export class ChatView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: '',
            messages: null,
            isLoaded: false,
            heightValue: new Animated.Value(0),
            isInputActive: false,
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

    handleSendMessage(newValue) {
        this.messagesRef.push({
            userName: this.props.user.displayName,
            userId: this.props.user.uid,
            userAvatar: this.props.user.photoURL,
            message: newValue,
            creationDate: Date.now(),
        }).then(data => {
            this.setState({ message: '' })
        });
    }

    showNewMessageInput() {
        Animated.timing(
            this.state.heightValue,
            {
                toValue: 1,
                duration: 300,
                easing: Easing.quad
            }
        ).start()
    }

    hideNewMessageInput() {
        Animated.timing(
            this.state.heightValue,
            {
                toValue: 0,
                duration: 300,
                easing: Easing.quad
            }
        ).start()
    }

    render() {
        const heightValue = this.state.heightValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 60]
        })
        return (
            <ScrollView 
                contentContainerStyle={layoutStyles.containerWithHeader}
                scrollEnabled={false}
            >
                <Animated.Image source={backgroundImage} style={layoutStyles.backgroundImage}>
                    <View style={styles.chatContainer}>
                         <Header {...this.props} backView={'ROOM'} />
                         <MessageList 
                            messages={this.state.messages}
                            isLoaded={this.state.isLoaded}
                            {...this.props}
                        />
                        <Animated.View style={{ height: heightValue }}>
                            <FloatingInput
                                placeholder={'Treść wiadomości'}
                                onSubmit={(newValue) => {
                                    this.handleSendMessage(newValue)
                                    this.hideNewMessageInput()
                                    this.setState({ isInputActive: false })
                                }}
                            />
                        </Animated.View>
                    </View>
                    {
                        this.state.isLoaded &&
                        <Animated.View style={{ bottom: heightValue }}>
                            <FloatingButton
                                isActive={this.state.isInputActive}
                                onPress={() => {
                                    if (this.state.isInputActive) {
                                        this.hideNewMessageInput()
                                        this.setState({ isInputActive: false })
                                    } else {
                                        this.showNewMessageInput()
                                        this.setState({ isInputActive: true })
                                    }
                                }}
                            />
                        </Animated.View>
                    }
                </Animated.Image>
                {
                    Platform.OS === 'ios' &&
                    <KeyboardSpacer />
                }
            </ScrollView>
        )
    }
}