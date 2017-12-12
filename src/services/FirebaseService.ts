import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'
import config from '../config'
import { executionsStore, Execution } from '../stores'

class FirebaseService {

  constructor() {
    firebase.initializeApp(config.firebase)
    const db = firebase.firestore()
    db.collection('levels')
      .orderBy('timestamp', 'desc')
      .limit(50)
      .onSnapshot(querySnapshot => {
        executionsStore.stats = <Execution[]>
          querySnapshot.docs.map(doc => doc.data())
      })
  }

}

export default new FirebaseService()
