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
        const { isGhost, isFull } = this.props

        return (
            <TouchableHighlight 
                onPress={this.props.onPress}
                disabled={this.props.disabled}
                style={this.props.disabled ? styles.buttonDisable : ''}
                style={
                    [ 
                        styles.button,
                        isGhost ? styles.buttonGhost : {},
                        isFull ? styles.buttonFull : {}
                    ]
                }
            >
                <View>
                    <Text style={[ styles.buttonText, isGhost ? styles.buttonGhostText : {} ]}>
                        { this.props.title.toUpperCase() }
                    </Text>
                </View>
            </TouchableHighlight>
        )
    }
}