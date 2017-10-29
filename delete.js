const firebase = require('firebase')

firebase.initializeApp({
  databaseURL:"https://assign-02.firebaseio.com/"
})

const dbRef = firebase.database().ref('Library')



dbRef.child("1").remove();
dbRef.child("3").remove();

// dbRef.once('value',data=>console.log(data.val()))