import React, { Component } from 'react'
import {
    ScrollView,
    View,
    Text,
    Image,
} from 'react-native'
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { styles } from './styles';
import * as firebase from 'firebase';

export class SplashScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollView 
                contentContainerStyle={styles.container}
                scrollEnabled={false}
            >
                <Image
                    style={{width: 200, height: 100}}
                    source={{uri: 'https://i.vimeocdn.com/portrait/9217376_300x300'}}
                />
            </ScrollView>
        )
    }
}