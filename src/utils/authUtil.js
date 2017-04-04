import { firebaseConfig } from '../config';
import * as firebase from 'firebase';
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default class AuthUtil {
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
            let user = await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            return user
        } catch (err) {
            console.log(err)
            return false
        }
    }

    static async signUp(email, password) {
        try {
            let user = await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            return user
        } catch (error) {
            console.log(err)
            return false
        }
    }
}
