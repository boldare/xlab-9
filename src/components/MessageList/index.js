import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native'

import { styles } from './styles'

export class MessageList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View>
                { this.props.isLoaded ? (
                    this.props.messages && this.props.messages.length ? (
                        <View style={styles.listContent}>
                            { this.props.messages.map((item, index) => (
                                <View 
                                    key={index}
                                    style={styles.listItem}
                                    onPress={() => { this.handleShowChat(room) }}
                                >
                                    <Text style={styles.textItem}>
                                        {item.message}
                                    </Text>
                                    <Text style={styles.smallText}>
                                        Napisał: {item.userName}
                                    </Text>
                                </View>
                            ))}
                        </View>
                    ):(
                        <View style={styles.blankContent}>
                            <Text style={styles.textItem}>
                                Brak wiadomosci
                            </Text>
                        </View>
                    )
                ):(
                    <View style={styles.blankContent}>
                        <Text style={styles.textItem}>
                            Pobieram wiadomosci...
                        </Text>
                    </View>
                )}
            </View>
        )
    }
}