const firebase = require('firebase')

firebase.initializeApp({
  databaseURL:"https://assign-02.firebaseio.com/"
})

const dbRef = firebase.database().ref('Library')




 function updateUserData(id,name,author) {

    
         dbRef.child(id).update({Name:name,Author:author});
         
   }
   
   updateUserData(1,"Game Of thrones","Cindy");
    updateUserData(0,"Spiderman","Nav jot");