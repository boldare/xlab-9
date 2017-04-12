import React, { Component } from 'react'
import * as firebase from 'firebase'
import {
    View,
    Animated,
    ScrollView,
    Easing,
    Platform,
} from 'react-native'
import KeyboardSpacer from 'react-native-keyboard-spacer'

import { layoutStyles } from './../styles'
import { styles } from './styles'
import { backgroundImage } from '../../images/'
import { Header } from './../../components/Header'
import { RoomForm } from './../../components/RoomForm'
import { RoomList } from './../../components/RoomList'
import { FloatingButton } from './../../components/FloatingButton'
import { FloatingInput } from './../../components/FloatingInput'

export class RoomView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rooms: null,
            isLoaded: false,
            heightValue: new Animated.Value(0),
            isInputActive: false,
        }

        this.roomRef = firebase.database().ref().child('rooms')
    }

    componentDidMount() {
        this.listenRooms()
    }

    showNewRoomInput() {
        Animated.timing(
            this.state.heightValue,
            {
                toValue: 1,
                duration: 300,
                easing: Easing.quad
            }
        ).start()
    }

    hideNewRoomInput() {
        Animated.timing(
            this.state.heightValue,
            {
                toValue: 0,
                duration: 300,
                easing: Easing.quad
            }
        ).start()
    }

    listenRooms() {
        this.roomRef.on('value', rooms => {
            var items = [];
            rooms.forEach((child) => {
                items.push({
                    name: child.val().name,
                    author: child.val().author,
                    creationDate: child.val().creationDate,
                    _key: child.key
                });
            });

            this.setState({ 
                rooms: items.reverse(),
                isLoaded: true,
            })
        });
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
                    <View style={styles.roomContainer}>
                        <Header {...this.props} />
                        <RoomList 
                            rooms={this.state.rooms}
                            isLoaded={this.state.isLoaded}
                            {...this.props}
                        />
                        <Animated.View style={{ height: heightValue }}>
                            <FloatingInput
                                onSubmit={() => {
                                    //TODO: DODAĆ AKCJE DODAWANIA POKOJU
                                }}
                            />
                        </Animated.View>
                    </View>
                    <Animated.View style={{ bottom: heightValue }}>
                        <FloatingButton
                            onPress={() => {
                                if (this.state.isInputActive) {
                                    this.hideNewRoomInput()
                                } else {
                                    this.showNewRoomInput()
                                }

                                this.setState({ isInputActive: !this.state.isInputActive })
                            }}
                        />
                    </Animated.View>
                </Animated.Image>
                {
                    Platform.OS === 'ios' &&
                    <KeyboardSpacer />
                }
            </ScrollView>
        )
    }
}