import React, { Component } from 'react'
import {
    ScrollView,
    View,
    Text,
    Image,
    Animated,
} from 'react-native'
import { styles } from './../styles'

import backgroundImage from './background.jpeg'
import logoImage from './logo.png'

export class SplashScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fadeAnim: new Animated.Value(0),
        };
    }

    componentDidMount() {
        Animated.timing(
            this.state.fadeAnim,
            {
                toValue: 1,
                duration: 1000,
            },
        ).start()
    }

    render() {
        return (
            <ScrollView 
                contentContainerStyle={styles.container}
                scrollEnabled={false}
            >
                <Animated.Image source={backgroundImage} style={[styles.backgroundImage, { opacity: this.state.fadeAnim}]}>
                    <Image
                        style={{width: 200, height: 100, marginBottom: 250}}
                        source={logoImage}
                    />
                </Animated.Image>
            </ScrollView>
        )
    }
}