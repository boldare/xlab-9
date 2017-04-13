import React, { Component } from 'react'
import {
    ScrollView,
    View,
    Text,
    Image,
    Animated,
    StatusBar,
} from 'react-native'

import { layoutStyles } from './../styles'
import {
    backgroundImage,
    logoImage
} from '../../images'

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
                duration: 300,
            },
        ).start()
    }

    render() {
        return (
            <ScrollView 
                contentContainerStyle={layoutStyles.container}
                scrollEnabled={false}
            >
                <StatusBar hidden />
                <Animated.Image source={backgroundImage} resizeMode='cover' style={[layoutStyles.backgroundImage, { opacity: this.state.fadeAnim}]}>
                    <Image
                        style={{width: 200, height: 100, marginBottom: 250}}
                        source={logoImage}
                    />
                </Animated.Image>
            </ScrollView>
        )
    }
}