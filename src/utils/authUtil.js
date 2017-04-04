import { firebaseConfig } from '../config'
import * as firebase from 'firebase'
import { Alert } from 'react-native'
const firebaseApp = firebase.initializeApp(firebaseConfig)

export class AuthUtil {
    static async checkAuthStatus() {
        try {
            let firebaseUser = await firebaseApp.auth().onAuthStateChanged()     
            return firebaseUser
        } catch(err) {
            console.log(err)
        }
    }

    static async signIn(email, password) {
        try {
            let user = await firebase.auth().signInWithEmailAndPassword(email, password)
            return user
        } catch (err) {
            console.log(err)
            return false
        }
    }

    static async signUp(email, password) {
        try {
            let user = await firebase.auth().createUserWithEmailAndPassword(email, password)
            return user
        } catch (err) {
            console.log(err)

            Alert.alert(
                'Error',
                'Validation ' + err,
                [
                    {text: 'OK'},
                ],
                { cancelable: false }
            )
            return false
        }
    }
}
