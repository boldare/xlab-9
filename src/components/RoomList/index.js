import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    ListView,
    ActivityIndicator,
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

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

    getDataSource() {
        const dataSource = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1.uuid !== r2.uuid })

        return this.props.rooms ? dataSource.cloneWithRows(this.props.rooms) : dataSource
    }

    renderRow(rowData, sectionID, rowID) {
        return (
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
                    contentContainerStyle={styles.listView}
                    dataSource={this.getDataSource()}
                    renderRow={this.renderRow.bind(this)}
                />
            </View>
        )
    }
}