import React, { Component } from 'react'
import {
    View,
    TextInput,
    Animated,
    TouchableOpacity,
    Easing,
    Text,
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

import { styles } from './styles'

export class FloatingInput extends Component {
    constructor(props) {
        super(props)
        this.btnAnimValue = new Animated.Value(0)
        this.state = {
            newRoom: '',
            showBtn: false,
        }
    }

    submitHandler() {
        if (this.props.onSubmit) {
            this.props.onSubmit(this.state.newRoom)
            this.setState({ newRoom: '' })
        }
    }

    onChangeHandler(newRoom) {
        if (newRoom.length > 0) {
            this.setState({ showBtn: true })
        } else {
            this.setState({ showBtn: false })
        }

        this.setState({ newRoom })
    }

    render() {
        return (
            <View style={styles.inputBox}>
                <TextInput
                    style={styles.input}
                    underlineColorAndroid="rgba(0,0,0,0)"
                    placeholderTextColor="rgba(0,0,0,0.7)"
                    onChangeText={(text) => { this.onChangeHandler(text) }}
                    value={this.state.newRoom}
                    placeholder="Nowy pokój..."
                />
                {
                    this.state.showBtn &&
                    <View style={styles.sendIconBox}>
                        <TouchableOpacity onPress={() => { this.submitHandler() }}>
                            <Icon style={styles.sendLabel} size={20} name="md-add" />
                        </TouchableOpacity>
                    </View>
                }
            </View>
        )
    }
}