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

export class MessageList extends Component {
    constructor(props) {
        super(props)
    }

    getDataSource() {
        const dataSource = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1.uuid !== r2.uuid })

        return this.props.messages ? dataSource.cloneWithRows(this.props.messages) : dataSource
    }

    renderRow(rowData, sectionID, rowID) {
        return (
            <TouchableOpacity onPress={() => {}}>
                <View style={styles.listItem}>
                    <View style={styles.listItemColumn}>
                        <Text style={styles.listItemLabel}>
                            {rowData.message}
                        </Text>
                        <Text style={styles.listItemAuthor}>
                            {rowData.userName}
                        </Text>
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