import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Platform,
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

import { styles } from './styles'

export class ChatHeader extends Component {
    constructor(props) {
        super(props)
    }

    goBack() {
        this.props.navigator.jumpBack()
    }

    render() {
        return (
            <View style={styles.headerContainer}>
                <View style={[styles.headerColumn, styles.headerColumnFirst]}>
                    {
                        Platform.OS === 'ios' &&
                        <TouchableOpacity onPress={() => { this.goBack() }}>
                            <View style={styles.goBack}>
                                <Icon name="ios-arrow-back" size={20} color="#635D5C" />
                                <Text style={styles.label}>
                                    Pokoje
                                </Text>
                            </View>
                        </TouchableOpacity>
                    }
                </View>
                <View style={styles.headerColumn}>
                    <Text style={styles.title}>{this.props.room.name}</Text>
                </View>
                <View style={styles.headerColumn}></View>
            </View>
        )
    }
}