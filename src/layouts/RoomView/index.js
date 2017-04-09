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
    TouchableOpacity,
} from 'react-native'
import * as firebase from 'firebase'
import ImageHeader from 'react-native-image-header'

import { layoutStyles } from './../styles'
import { styles } from './styles'
import { backgroundImage } from '../../images/'
import { Button } from './../../components/Button'

Object.assign(styles, layoutStyles)

export class RoomView extends Component {
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
                rooms: items.reverse(),
                isLoaded: true,
            })
        });
    }
    
    handleAddRoom() {
        this.setState({roomName: ''})
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
            <ImageHeader
                backgroundImage={backgroundImage}
                maxHeight={210}
                minHeight={75}
                titleTranslateY={-10}
                titleScale={1}
                headerChildren={
                    <View style={styles.foregroundContainer}>
                        <View style={styles.navigation}>
                            <Image
                                source={{'uri': this.props.user.photoURL}}
                                style={styles.userImage}
                                resizeMode="contain"
                            />
                            <View style={styles.logoutButton}>
                                <TouchableOpacity>
                                    <Text style={styles.headerText}>
                                        Logout
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.additionOptions}>
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
                                    style={styles.button}
                                    onPress={() => { this.handleAddRoom() }}
                                    title="Dodaj nowy pokój"
                                />
                            </View>
                        </View>
                    </View>
                }
                >
                { this.state.isLoaded ? (
                    this.state.rooms.length ? (
                        <View style={styles.listContent}>
                            { this.state.rooms.map((room, index) => (
                                <View 
                                    key={index}
                                    style={styles.listItem}
                                >
                                    <Text style={styles.textItem}>
                                        {room.name}
                                    </Text>
                                    <Text style={styles.smallText}>
                                        Właściciel: {room.author}
                                    </Text>
                                </View>
                            ))}
                        </View>
                    ):(
                        <View style={styles.blankContent}>
                            <Text style={styles.textItem}>
                                Lista jest pusta
                            </Text>
                        </View>
                    )
                ):(
                    <View style={styles.blankContent}>
                        <Text style={styles.textItem}>
                            Pobieram pokoje...
                        </Text>
                    </View>
                )}
            </ImageHeader>
        )
    }
}