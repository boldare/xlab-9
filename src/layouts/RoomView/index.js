import React, { Component } from 'react'
import ImageHeader from 'react-native-image-header'
import * as firebase from 'firebase'
import {
    View,
    Animated,
} from 'react-native'

import { styles } from './styles'
import { backgroundImage } from '../../images/'
import { Header } from './../../components/Header'
import { RoomForm } from './../../components/RoomForm'
import { RoomList } from './../../components/RoomList'

export class RoomView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rooms: null,
            isLoaded: false,
            fadeAnim: new Animated.Value(0),
        };
        this.roomRef = firebase.database().ref().child('rooms')
    }

    componentDidMount() {
        this.listenRooms();
        Animated.timing(
            this.state.fadeAnim,
            {
                toValue: 1,
                duration: 1000,
            },
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
        return (
            <ImageHeader
                backgroundImage={backgroundImage}
                maxHeight={210}
                minHeight={75}
                titleTranslateY={-10}
                titleScale={1}
                headerChildren={
                    <View style={styles.foregroundContainer}>
                        <Header {...this.props} />
                        <RoomForm {...this.props} />
                    </View>
                }
                >
                <RoomList 
                    rooms={this.state.rooms}
                    isLoaded={this.state.isLoaded}
                    {...this.props}
                />
            </ImageHeader>
        )
    }
}