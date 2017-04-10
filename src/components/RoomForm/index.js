import React, { Component } from 'react'
import {
    View,
    Text,
    TextInput,
    Alert,
} from 'react-native'
import * as firebase from 'firebase'

import { layoutStyles } from './../../layouts/styles'
import { styles } from './styles'
import { Button } from './../Button'

Object.assign(styles, layoutStyles)

export class RoomForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            roomName: '',
        };
        this.roomRef = firebase.database().ref().child('rooms')
    }
    
    handleAddRoom() {
        this.roomRef.push({
            name: this.state.roomName,
            author: this.props.user.displayName,
            authorId: this.props.user.uid,
            creationDate: Date.now(),
        }).then(data => {
            this.setState({roomName: ''})
            this.showAlert()
        });
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
            <View style={styles.roomFormContainer}>
                <TextInput
                    style={styles.input}
                    underlineColorAndroid="rgba(0,0,0,0)"
                    placeholderTextColor="rgba(0,0,0,0.7)"
                    onChangeText={(roomName) => this.setState({roomName})}
                    value={this.state.roomName}
                    placeholder="Nazwa nowego pokoju"
                />
                <View style={styles.buttonContainer}>
                    <Button
                        onPress={() => { this.handleAddRoom() }}
                        title="Dodaj nowy pokój"
                    />
                </View>
            </View>
        )
    }
}