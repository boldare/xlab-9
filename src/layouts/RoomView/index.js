import React, { Component } from 'react'
import * as firebase from 'firebase'
import {
    View,
    Animated,
    ScrollView,
    Easing,
    Platform,
    Alert,
} from 'react-native'
import KeyboardSpacer from 'react-native-keyboard-spacer'

import { layoutStyles } from './../styles'
import { styles } from './styles'
import { backgroundImage } from '../../images/'
import { Header } from './../../components/Header'
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
            const items = []
            rooms.forEach((child) => {
                items.push({
                    name: child.val().name,
                    author: child.val().author,
                    creationDate: child.val().creationDate,
                    _key: child.key
                })
            })

            this.setState({ 
                rooms: items.reverse(),
                isLoaded: true,
            })
        })
    }

    handleAddRoom(newRoom) {
        this.roomRef.push({
            name: newRoom,
            author: this.props.user.displayName,
            authorId: this.props.user.uid,
            creationDate: Date.now(),
        }).then(data => {
            this.showAlert()
        })
    }

    showAlert() {
        Alert.alert(
            'Brawo ty!',
            'Pokoj zostal dodany',
            [{text: 'OK'}],
            { cancelable: false }
        )
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
                                onSubmit={(newRoom) => {
                                    this.handleAddRoom(newRoom)
                                    this.hideNewRoomInput()
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
                                        this.hideNewRoomInput()
                                        this.setState({ isInputActive: false })
                                    } else {
                                        this.showNewRoomInput()
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