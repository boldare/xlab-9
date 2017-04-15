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
import { FloatingInput } from './../../components/FloatingInput'

export class RoomView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rooms: null,
            isLoaded: false,
        }

        this.roomRef = firebase.database().ref().child('rooms')
    }

    componentDidMount() {
        this.listenRooms()
    }

    listenRooms() {
        this.roomRef.on('value', rooms => {
            const items = []
            rooms.forEach((child) => {
                items.push({
                    name: child.val().name,
                    owner: child.val().owner,
                    ownerId: child.val().ownerId,
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
            owner: this.props.user.displayName,
            ownerId: this.props.user.uid,
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
        return (
            <ScrollView 
                contentContainerStyle={layoutStyles.containerWithHeader}
                keyboardShouldPersistTaps="handled"
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
                        {
                            this.state.isLoaded &&
                            <FloatingInput
                                onSubmit={(newRoom) => {
                                    this.handleAddRoom(newRoom)
                                }}
                            />
                        }
                    </View>
                </Animated.Image>
                {
                    Platform.OS === 'ios' &&
                    <KeyboardSpacer />
                }
            </ScrollView>
        )
    }
}