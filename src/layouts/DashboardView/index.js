import React, { Component } from 'react'
import KeyboardSpacer from 'react-native-keyboard-spacer'
import * as firebase from 'firebase'
import {
    ScrollView,
    View,
    Text,
    Image,
    Animated,
    TextInput,
    Platform,
} from 'react-native'

import { Button } from './../../components/Button'
import { layoutStyles } from './../styles'
import { styles } from './styles'
import { backgroundImage } from '../../images'

Object.assign(styles, layoutStyles)

export class DashboardView extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: this.props.user,
            photoURL: 'https://api.adorable.io/avatars/160/' + this.props.user.email,
            displayName: this.props.user.displayName ? this.props.user.displayName : '',
            fadeAnim: new Animated.Value(0),
        }
    }

    handleSetUserData() {
        this.setState({userName: ''});
        const navigator = this.props.navigator;

        this.props.user.updateProfile({
            displayName: this.state.displayName,
            photoURL: this.state.photoURL,
        }).then(() => {
            navigator.push({
                name: 'ROOM',
                user: this.state.user
            })
        }, (err) => {
            console.log(err)
        })
    }
    
    handleLogOut() {
        firebase.auth().signOut()
        this.props.navigator.immediatelyResetRouteStack([{ name: 'LOGIN' }])
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
        return (
            <ScrollView 
                contentContainerStyle={styles.container}
                scrollEnabled={false}
            >
                <Animated.Image source={backgroundImage} style={[layoutStyles.backgroundImage, { opacity: this.state.fadeAnim}]}>
                    <View style={styles.row}>
                        <View style={styles.dashboardSection}>
                            <View style={styles.avatarRow}>
                                <Image
                                    style={styles.avatar}
                                    source={{'uri': this.state.photoURL}}
                                />
                            </View>
                            <View style={styles.avatarRow}>
                                <Text style={styles.title}>
                                     Witaj!
                                </Text>
                                <Text style={styles.title}>
                                    {this.state.user.email}
                                </Text>
                                <Text style={styles.paragraph}>
                                    Wprowadź swoją ksywę, która będzie widoczna na chacie
                                </Text>
                                <Text style={[styles.paragraph, styles.userName]}>
                                   {this.state.displayName}
                                </Text>
                            </View>
                        </View>
                        <TextInput
                            style={styles.input}
                            underlineColorAndroid="rgba(0,0,0,0)"
                            onChangeText={(displayName) => this.setState({displayName})}
                            value={this.state.displayName}
                            placeholder="Username"
                        />
                        <View style={styles.buttonContainer}>
                            <Button
                                style={styles.button}
                                onPress={() => { this.handleSetUserData() }}
                                title="Dalej"
                                disabled={this.state.displayName === ''}
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
                {
                    Platform.OS === 'ios' &&
                    <KeyboardSpacer />
                }
            </ScrollView>
        )
    }
}