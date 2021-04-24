import firebase from 'firebase'
import {useAuth} from '@vueuse/firebase'
import 'firebase/auth'

import {firebaseConfig} from '../config/firebase'

firebase.initializeApp(firebaseConfig)
const {auth} = firebase
const {GoogleAuthProvider} = auth

export const {isAuthenticated, user} = useAuth()

export const authentication = () => {
    const googlePopup = () => auth().signInWithPopup(new GoogleAuthProvider())
    const signOut = () => auth().signOut()
    return {googlePopup,signOut,isAuthenticated,user}
}

export const database = () => {}