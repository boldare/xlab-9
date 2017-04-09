import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native'
import { styles } from './styles'

export class Header extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.headerContainer}>
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
        )
    }
}