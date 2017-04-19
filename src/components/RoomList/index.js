import React, { Component } from 'react'
import * as firebase from 'firebase'
import {
    View,
    Text,
    TouchableOpacity,
    ListView,
    ActivityIndicator,
} from 'react-native'
import Swipeable from 'react-native-swipeable'
import Icon from 'react-native-vector-icons/Ionicons'

import { styles } from './styles'

export class RoomList extends Component {
    constructor(props) {
        super(props)

        this.roomRef = firebase.database().ref().child('rooms')
    }

    handlRemoveRoom(rowData) {
        this.roomRef.child(rowData._key).remove()
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

    rightButtons(rowData) {
        return [
            <TouchableOpacity
                style={styles.swipableDangerButton} 
                onPress={() => { this.handlRemoveRoom(rowData) }}
            >
                <Icon name="ios-trash" size={22} color="#fff" />
            </TouchableOpacity>,
            <TouchableOpacity 
                style={styles.swipableButton} 
                onPress={() => { this.handleShowChat(rowData) }}
            >
                <Icon name="ios-eye" size={22} color="#000" />
            </TouchableOpacity>
        ]
    }

    getDataSource() {
        const dataSource = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1.uuid !== r2.uuid })

        return this.props.rooms ? dataSource.cloneWithRows(this.props.rooms) : dataSource
    }

    renderRow(rowData, sectionID, rowID) {
        return (
            <Swipeable rightButtons={this.rightButtons(rowData)}>
                <TouchableOpacity onPress={() => { this.handleShowChat(rowData) }}>
                    <View style={styles.listItem}>
                        <View style={styles.listItemColumn}>
                            <Text style={styles.listItemLabel}>
                                {rowData.name}
                            </Text>
                            <Text style={styles.listItemOwner}>
                                Właściciel: {rowData.owner}
                            </Text>
                        </View>
                        <View style={styles.listItemColumnIcons}>
                            <Icon name="ios-arrow-forward-outline" size={28} color="#000" />
                        </View>
                    </View>
                </TouchableOpacity>
            </Swipeable>
        )
    }

    render() {
        return (
            <View style={styles.roomList}>
                {
                    !this.props.isLoaded &&
                    <ActivityIndicator
                        style={styles.loader}
                        size="large"
                        color="black"
                    />
                }
                <ListView
                    initialListSize={20}
                    removeClippedSubviews={false}
                    contentContainerStyle={styles.listView}
                    dataSource={this.getDataSource()}
                    renderRow={this.renderRow.bind(this)}
                    overScrollMode="never"
                />
            </View>
        )
    }
}