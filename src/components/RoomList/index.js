import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native'

import { styles } from './styles'

export class RoomList extends Component {
    constructor(props) {
        super(props)
    }

    handleShowChat(room) {
        this.props.navigator.push({
            name: 'CHAT',
            passProps: {
                room: room,
                user: this.props.user,
            }
        })
    }

    render() {
        return (
            <View>
                { this.props.isLoaded ? (
                    this.props.rooms.length ? (
                        <View style={styles.listContent}>
                            { this.props.rooms.map((room, index) => (
                                <TouchableOpacity 
                                    key={index}
                                    style={styles.listItem}
                                    onPress={() => { this.handleShowChat(room) }}
                                >
                                    <Text style={styles.textItem}>
                                        {room.name}
                                    </Text>
                                    <Text style={styles.smallText}>
                                        Właściciel: {room.author}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    ):(
                        <View style={styles.blankContent}>
                            <Text style={styles.textItem}>
                                Lista jest pusta
                            </Text>
                        </View>
                    )
                ):(
                    <View style={styles.blankContent}>
                        <Text style={styles.textItem}>
                            Pobieram pokoje...
                        </Text>
                    </View>
                )}
            </View>
        )
    }
}