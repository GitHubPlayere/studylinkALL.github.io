function googleAuth(){
    firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    
    var user = result.user;
  console.log(user)
  createUserDb(user.uid,user.displayName,'lastname',user.email,'phone')
  }).catch((error) => {
    
    var errorCode = error.code;
    var errorMessage = error.message;
    
    var email = error.email;
    console.log(errorCode)
    console.log(errorMessage)
    console.log(email)
  });
}
function logOut(){
    firebase.auth().signOut().then(() => {
        console.log(`Succes log-out`)
      }).catch((error) => {
        
      });
}
function createUserDb(id,name,lastname,email,phone){
    let newUser = {
        name: name,
        lastname: lastname,
        email: email,
        phone: phone,
        isAdmin: false
    }
db.collection(`first_reg`).doc(id).set(newUser).then(res => {
    console.log('succes register')
})
}






