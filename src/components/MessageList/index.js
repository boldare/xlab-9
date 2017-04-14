import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    ActivityIndicator,
    ListView,
    Image,
} from 'react-native'

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
        const isCurrentUser = rowData.userId === this.props.user.uid

        return (
            <View style={[styles.listItem, isCurrentUser ? styles.userListItem : {}]}>
                {
                    !isCurrentUser &&
                    <Image
                        source={{'uri': rowData.userAvatar, cache: 'only-if-cached'}}
                        style={styles.userImage}
                        resizeMode="contain"
                    />
                }
                <View style={styles.listItemBox}>
                    {
                        !isCurrentUser &&
                        <Text style={styles.listItemAuthor}>{rowData.userName}</Text>
                    }

                    <View style={[styles.listItemTextBox, isCurrentUser ? styles.userTextBox : {}]}>
                        <Text style={styles.listItemText}>{rowData.message}</Text>
                    </View>
                </View>
                {
                    isCurrentUser &&
                    <Image
                        source={{'uri': rowData.userAvatar, cache: 'only-if-cached'}}
                        style={styles.userImage}
                        resizeMode="contain"
                    />
                }
            </View>
        )
    }

    render() {
        return (
            <View style={styles.chatList}>
                {
                    !this.props.isLoaded &&
                    <ActivityIndicator
                        style={styles.loader}
                        size="large"
                        color="black"
                    />
                }
                <ListView
                    enableEmptySections={true}
                    contentContainerStyle={styles.listView}
                    dataSource={this.getDataSource()}
                    renderRow={this.renderRow.bind(this)}
                    ref={ref => this.scrollView = ref}
                    onLayout={(event) => {
                        this.scrollView.scrollToEnd({ animated: false })
                    }}
                    onContentSizeChange={(contentWidth, contentHeight)=>{        
                        this.scrollView.scrollToEnd({ animated: true })
                    }}
                />
            </View>
        )
    }
}