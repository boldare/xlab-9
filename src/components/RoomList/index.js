import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    ListView,
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

    getDataSource() {
        const dataSource = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1.uuid !== r2.uuid })

        return this.props.rooms ? dataSource.cloneWithRows(this.props.rooms) : dataSource
    }

    renderRow(rowData, sectionID, rowID) {
        return (
        <View>
            <Text>{rowData.name}</Text>
        </View>
        )
    }

    render() {
        return (
            <View style={styles.roomList}>
                <ListView
                    contentContainerStyle={styles.listView}
                    dataSource={this.getDataSource()}
                    renderRow={this.renderRow}
                />
            </View>
        )
    }
}