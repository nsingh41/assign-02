const firebase = require('firebase')

firebase.initializeApp({
  databaseURL:"https://assign-02.firebaseio.com/"
})

const dbRef = firebase.database().ref('Library')

 function writeUserData(id,book) {

    
         dbRef.child(id).set(book);
         
   }
  
  const book0 ={
      Name:"book0",
      Author:"navjot",
      Catagory:"love"
      
    
  }
  
    const book1 ={
      Name:"book1",
      Author:"karan",
      Catagory:"romance"
  }
  
  const book2 ={
      Name:"book2",
      Author:"karan",
      Catagory:"horror"
  }
  
  const book3 ={
      Name:"book3",
      Author:"nav",
      Catagory:"thrill"
  }
  
  const book4 ={
      Name:"book4",
      Author:"harsh",
      Catagory:"drama"
  }
  
  
  writeUserData(0,book0)
  writeUserData(1,book1)
  writeUserData(2,book2)
  writeUserData(3,book3)
  writeUserData(4,book4)
  
  
  
//  dbRef.child("0").remove();
//  dbRef.child("1").remove();
//  dbRef.child("2").remove();

// dbRef.once('value',data=>console.log(data.val()))