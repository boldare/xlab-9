import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableHighlight,
    Animated,
    Easing,
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

import { styles } from './styles'

export class FloatingButton extends Component {
    constructor(props) {
        super(props)
        this.spinValue = new Animated.Value(0)
    }

    componentDidUpdate(props) {
        Animated.timing(
            this.spinValue,
            {
                toValue: props.isActive ? 0 : 12.5,
                duration: 200,
                easing: Easing.quad
            }
        ).start()
    }

    toggleHandler() {
        if (this.props.onPress) {
            this.props.onPress()
        }
    }

    render() {
        const spin = this.spinValue.interpolate({
            inputRange: [0, 100],
            outputRange: ['0deg', '360deg']
        })

        return (
            <TouchableHighlight 
                onPress={() => { this.toggleHandler() }}
                disabled={this.props.disabled}
                style={this.props.disabled ? styles.buttonDisable : ''}
            >
                <Animated.View style={[styles.button, {transform: [{rotate: spin}]}]}>
                    <Icon name="md-add" size={36} color="#fff" style={styles.icon}/>
                </Animated.View>
            </TouchableHighlight>
        )
    }
}