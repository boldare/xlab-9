import React, { Component } from 'react'
import {
    View,
    Text,
} from 'react-native'

import { styles } from './styles'

export class RoomList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View>
                { this.props.isLoaded ? (
                    this.props.rooms.length ? (
                        <View style={styles.listContent}>
                            { this.props.rooms.map((room, index) => (
                                <View 
                                    key={index}
                                    style={styles.listItem}
                                >
                                    <Text style={styles.textItem}>
                                        {room.name}
                                    </Text>
                                    <Text style={styles.smallText}>
                                        Właściciel: {room.author}
                                    </Text>
                                </View>
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