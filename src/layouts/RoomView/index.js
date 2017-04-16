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
    }

    componentDidMount() {
        this.listenRooms()
    }

    listenRooms() {
        // TODO :: DELETE BELOW
        this.setState({
            rooms: [
                {
                    name: 'Test',
                    owner: 'Tester',
                }
            ],
            isLoaded: true, 
        })
        /*
            ZADANIE NR.3 - WebSockety, Firebase
            TODO :: Ustawienie listener'a na dodawanie i wczytywanie pokoi
            {
                userName
                userId
                userAvatar
                message
                creationDate
            }
        */
    }

    handleAddRoom(newRoom) {
        /*
            ZADANIE NR.3 - WebSockety, Firebase
            TODO :: Obsługa wysyłania wiadomości
            {
                name
                owner
                ownerId
                creationDate
            }
        */
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