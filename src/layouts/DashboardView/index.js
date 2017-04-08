import React, { Component } from 'react'
import {
    ScrollView,
    View,
    Text,
    Button,
} from 'react-native'
import KeyboardSpacer from 'react-native-keyboard-spacer'
import { styles } from './../styles'
import * as firebase from 'firebase'

export class DashboardView extends Component {
    constructor(props) {
        super(props)
    }

    handleLogOut() {
        firebase.auth().signOut()
    }

    render() {
        return (
            <ScrollView 
                contentContainerStyle={styles.container}
                scrollEnabled={false}
            >
                <View style={styles.row}>
                    <Text style={styles.title}>
                        Jesteś zalogowany jako
                    </Text>
                    <Text style={styles.paragraph}>
                        {this.props.user.email}
                    </Text>
                    <View style={styles.buttonContainer}>
                        <Button
                            style={styles.button}
                            color="#000000"
                            onPress={() => { this.handleLogOut() }}
                            title="Wyloguj się"
                        />
                    </View>
                </View>
            </ScrollView>
        )
    }
}