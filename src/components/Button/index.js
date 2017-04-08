import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableHighlight,
} from 'react-native'
import { styles } from './styles'

export class Button extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <TouchableHighlight 
                onPress={this.props.onPress}
                disabled={this.props.disabled}
                style={this.props.disabled ? styles.buttonDisable : ''}
            >
                <View style={styles.button}>
                    <Text style={styles.buttonText}>
                        { this.props.title.toUpperCase() }
                    </Text>
                </View>
            </TouchableHighlight>
        )
    }
}