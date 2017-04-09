import React, { Component } from 'react'
import {
    ScrollView,
    View,
    Text,
    Image,
    Animated,
    TextInput,
    Alert,
    ListView,
} from 'react-native'
import * as firebase from 'firebase'

import { layoutStyles } from './../styles'
import { styles } from './styles'
import { backgroundImage } from '../../images/'
import { Button } from './../../components/Button'

Object.assign(styles, layoutStyles)

export class RoomsView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rooms: null,
            roomName: '',
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
                rooms: items,
                isLoaded: true,
            })
        });
    }
    
    handleAddRoom() {
        this.roomRef.push({
            name: this.state.roomName,
            author: this.props.user.displayName,
            creationDate: Date.now(),
        }).then(data => {
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
            <ScrollView 
                contentContainerStyle={styles.container}
                scrollEnabled={false}
            >
                <Animated.Image source={backgroundImage} style={[styles.backgroundImage, { opacity: this.state.fadeAnim}]}>
                    <View style={styles.row}>
                        <View style={styles.section}>
                            <Text style={styles.title}>
                                Lista pokoji
                            </Text>
                            <Text style={styles.paragraph}>
                                Wybierz pokój do którego chcesz dołączy lub dodaj nowy
                            </Text>
                        </View>
                        { this.state.isLoaded ? (
                            <View style={styles.section}>
                                { this.state.rooms.length ? (
                                    this.state.rooms.map((room, index) => (
                                        <Text 
                                            key={index}
                                            style={styles.paragraph}
                                        >
                                            "{room.name}"
                                            dodano przez {room.author}
                                        </Text>
                                    ))
                                ):(
                                    <Text style={styles.paragraph}>
                                        Lista jest pusta
                                    </Text>
                                )}
                            </View>
                        ):(
                            <View style={styles.section}>
                                <Text style={styles.paragraph}>
                                    Pobieram pokoje...
                                </Text>
                            </View>
                        )}
                        <TextInput
                            style={styles.input}
                            underlineColorAndroid="rgba(0,0,0,0)"
                            onChangeText={(roomName) => this.setState({roomName})}
                            value={this.state.roomName}
                            placeholder="Nazwa nowego pokoju"
                        />
                        <View style={styles.buttonContainer}>
                            <Button
                                style={styles.button}
                                onPress={() => { this.handleAddRoom() }}
                                title="Dodaj pokój"
                            />
                        </View>
                    </View>
                </Animated.Image>
            </ScrollView>
        )
    }
}