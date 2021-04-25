import { ref, onUnmounted } from 'vue'
import firebase from 'firebase/app'
import { useAuth } from '@vueuse/firebase'
import 'firebase/auth'
import 'firebase/firestore'

import { firebaseConfig } from '~/config/firebase'

firebase.initializeApp(firebaseConfig)

const { auth, firestore } = firebase
const { GoogleAuthProvider } = auth
const db = firestore()

export const { isAuthenticated, user } = useAuth()

export const authentication = () => {
  const googlePopup = () => auth().signInWithPopup(new GoogleAuthProvider())
  const signOut = () => auth().signOut()
  return { googlePopup, signOut, isAuthenticated, user }
}

export const database = () => {
  const messages = ref([])
  const catinfo = ref([])


  const messagesCollection = db.collection('messages')
  const messagesQuery = messagesCollection
    .orderBy('createdAt', 'desc')
    .limit(100)

    const catCollection = db.collection('catinfo')
    const catQuery = catCollection
      .orderBy('createdAt', 'desc')
      .limit(100)

  const unsubscribe = messagesQuery.onSnapshot(s => {
    messages.value = s.docs
      .map(doc => ({ id: doc.id, ...doc.data() }))
      .reverse()
  })

  const unsubscribeCat = catQuery.onSnapshot(s => {
    catinfo.value = s.docs
      .map(doc => ({ id: doc.id, ...doc.data() }))
  })

  onUnmounted(unsubscribe,unsubscribeCat)

  const sendMessage = (text1,text2,text3,text4) => {
    messagesCollection.add({
      clientName: text1,
      clientPhone: text2,
      clientEmail: text3,
      clientCat: text4,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    })
  }

  const sendCats = (text1,text2,text3) => {
    catCollection.add({
      catsName: text1,
      catsAge: text2,
      catsKids: text3,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    })
  }

  return { messages, catinfo,sendMessage , sendCats}
}
