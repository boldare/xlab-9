import React, { Component } from 'react'
import {
    View,
    Text,
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
        /*
            ZADANIE NR.4 - WYSYŁANIE WIADOMOŚCI
            TODO :: Wyświetlenie listy wiadomości

            rowData {
                userId: Id użytkownika
                userAvatar: Avatar użytkownika
                message: Treść wiadomości

            }
        */

        return (
            <View style={styles.listItem}>
               
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
                {
                    this.props.isLoaded &&
                    <ListView
                        enableEmptySections={true}
                        initialListSize={20}
                        removeClippedSubviews={false}
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
                }
            </View>
        )
    }
}