const firebase = require('firebase')

firebase.initializeApp({
  databaseURL:"https://assign-02.firebaseio.com/"
})

const dbRef = firebase.database().ref('Library')


dbRef.once('value',data=>console.log(data.val()))