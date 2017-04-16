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
                name
                owner
                ownerId
                creationDate
            }
        */
    }

    handleAddRoom(newRoom) {
        /*
            ZADANIE NR.3 - WebSockety, Firebase
            TODO :: Obsługa dodawania pokoi
            {
                name
                owner
                ownerId
                creationDate
            }
        */
    }

    showAlert() {
        /*
            ZADANIE NR.2 - Tworzenie własnego komponentu
            TODO :: Informacja po dodaniu pokoju
        */
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