import React, { Component } from 'react'
import KeyboardSpacer from 'react-native-keyboard-spacer'
import * as firebase from 'firebase'
import {
    ScrollView,
    View,
    Text,
    Image,
    Animated,
    Easing,
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
            photoURL: 'https://api.adorable.io/avatars/160/',
            displayName: this.props.user.displayName ? this.props.user.displayName : '',
            fadeAnim: new Animated.Value(0),
            fontSizeValue: new Animated.Value(0),
        }
    }

    handleSetUserData() {
        this.setState({userName: ''});
        const navigator = this.props.navigator;

        this.props.user.updateProfile({
            displayName: this.state.displayName,
            photoURL: this.state.photoURL + this.state.displayName,
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
        this.props.navigator.immediatelyResetRouteStack([{ name: 'LOGIN', direction: 'LEFT' }])
    }

    animOnFocus(isFocus) {
        Animated.spring(
            this.state.fontSizeValue,
            {
                toValue: isFocus ? 1 : 0,
                duration: 300,
                easing: Easing.quad,
            }
        ).start(() => { console.log('tak') })
    }
    

    render() {
        const fullAvatar = this.state.photoURL + this.state.displayName
        const fontSize = this.state.fontSizeValue.interpolate({
            inputRange: [0, 1],
            outputRange: [24, 16]
        })
        
        return (
            <ScrollView 
                contentContainerStyle={styles.container}
                scrollEnabled={false}
            >
                <Animated.Image source={backgroundImage} style={layoutStyles.backgroundImage}>
                    <View style={styles.row}>
                        <View style={styles.dashboardSection}>
                            <View style={styles.avatarRow}>
                                <Image
                                    style={styles.avatar}
                                    source={{'uri': fullAvatar}}
                                />
                            </View>
                            <View style={styles.avatarRow}>
                                <Animated.Text style={[styles.title, { fontSize }]}>
                                     Witaj!
                                </Animated.Text>
                                <View style={styles.titleBox}>
                                    <Animated.Text style={[styles.title, { fontSize }]}>
                                        {this.state.user.email}
                                    </Animated.Text>
                                </View>
                                <Text style={styles.paragraph}>
                                    Wprowadź swoją ksywę, która będzie widoczna na czacie
                                </Text>
                            </View>
                        </View>
                        <TextInput
                            style={styles.input}
                            underlineColorAndroid="rgba(0,0,0,0)"
                            placeholderTextColor="rgba(0,0,0,0.7)"
                            onChangeText={(displayName) => this.setState({displayName})}
                            value={this.state.displayName}
                            placeholder="Username"
                            onFocus={
                                () => {
                                    this.animOnFocus(true)
                                }
                            }
                            onBlur={
                                () => {
                                     this.animOnFocus()
                                }
                            }
                        />
                        <View style={styles.buttonContainer}>
                            <Button
                                onPress={() => { this.handleLogOut() }}
                                title="Wyloguj"
                                isGhost
                            />
                            <Button
                                onPress={() => { this.handleSetUserData() }}
                                title="Dalej"
                                disabled={this.state.displayName === ''}
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