import React, { Component } from 'react'
import {
    ScrollView,
    View,
    Text,
    Image,
    Animated,
    TextInput,
} from 'react-native'
import { Button } from './../../components/Button'
import { styles } from './../styles'
import * as firebase from 'firebase'
import backgroundImage from './../../images/background.jpg'


export class DashboardView extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userName: '',
            fadeAnim: new Animated.Value(0),
        };
    }

    handleSetUserData() {
        this.props.user.updateProfile({
            displayName: this.state.userName,
            photoURL: 'https://conferencecloud-assets.s3.amazonaws.com/default_avatar.png'
        }).then(function() {
            console.log('done');
        }, function(error) {
            console.log(error);
        });
    }
    
    handleLogOut() {
        firebase.auth().signOut()
    }

    componentDidMount() {
        Animated.timing(
            this.state.fadeAnim,
            {
                toValue: 1,
                duration: 1000,
            },
        ).start()
    }

    render() {
        console.log(this.props.user)
        return (
            <ScrollView 
                contentContainerStyle={styles.container}
                scrollEnabled={false}
            >
                <Animated.Image source={backgroundImage} style={[styles.backgroundImage, { opacity: this.state.fadeAnim}]}>
                    <View style={styles.row}>
                        <View style={styles.section}>
                            <Text style={styles.title}>
                                Wprowadź swoje dane
                            </Text>
                            <Text style={styles.paragraph}>
                                Witam {this.props.user.email}! Wprowadź swoją ksywę, która będzie widoczna na chacie
                            </Text>
                            <Text style={styles.paragraph}>
                                Username: {this.props.user.displayName}
                            </Text>
                            <Text style={styles.paragraph}>
                                Avatar: 
                                 <Image
                                    style={styles.avatar}
                                    source={{'uri': this.props.user.photoURL}}
                                />
                            </Text>
                            <Text style={styles.paragraph}>
                                odswiez zeby zobaczyc zmiane (TODO: przejscie do listy pokojów, pobranie foty z gravatara)
                            </Text>
                        </View>
                        <TextInput
                            style={styles.input}
                            underlineColorAndroid="rgba(0,0,0,0)"
                            onChangeText={(userName) => this.setState({userName})}
                            value={this.state.userName}
                            placeholder="Username"
                        />
                        <View style={styles.buttonContainer}>
                            <Button
                                style={styles.button}
                                onPress={() => { this.handleSetUserData() }}
                                title="Dalej"
                                disabled={this.state.userName == ''}
                            />
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button
                                style={styles.button}
                                onPress={() => { this.handleLogOut() }}
                                title="Wyloguj"
                            />
                        </View>
                    </View>
                </Animated.Image>
            </ScrollView>
        )
    }
}