import React, { Component } from 'react'
import * as firebase from 'firebase'
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native'

import Camera from 'react-native-camera'
import Icon from 'react-native-vector-icons/Ionicons'

export class CameraView extends Component {
    constructor(props) {
        super(props)
            // Create a root reference
        this.messagesRef = firebase.database().ref().child('rooms/' + this.props.room._key + '/messages')
    }
    render() {
        return (
            <View style={styles.container}>
                <Camera
                ref={(cam) => {
                    this.camera = cam;
                }}
                style={styles.preview}
                aspect={Camera.constants.Aspect.fill}
                captureTarget={Camera.constants.CaptureTarget.memory}
                >
                <TouchableHighlight 
                        onPress={() => { this.takePicture() }}
                        style={styles.capture}
                    >
                        <View>
                            <Icon
                                name="ios-camera"
                                color="#fff"
                                size={64}
                            />
                        </View>
                    </TouchableHighlight>
                </Camera>
            </View>
        );
    }

  takePicture() {
    const options = {};
    //options.location = ...
    this.camera.capture({metadata: options})
      .then((data) => {
            console.log(data.data)

        this.messagesRef.push({
            userName: this.props.user.displayName,
            userId: this.props.user.uid,
            userAvatar: this.props.user.photoURL,
            type: 'IMAGE',
            data: data.data,
            creationDate: Date.now(),
        }).then(data => {
            console.log(data)
            this.props.navigator.pop()
        });
        
      })
      .catch(err => console.error(err));
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    padding: 10,
    margin: 20,
    bottom: 0,
  }
});