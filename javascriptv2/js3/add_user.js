const firebaseConfig = {
    apiKey: "AIzaSyAESNc6X37a3SCgcEKwrNnxTOB4K6It4Aw",
    authDomain: "black-kiril.firebaseapp.com",
    projectId: "black-kiril",
    storageBucket: "black-kiril.appspot.com",
    messagingSenderId: "792437345605",
    appId: "1:792437345605:web:8dc10fe0fb72d0d9e5822c"
  };
  firebase.initializeApp(firebaseConfig);

  var db = firebase.firestore();
function add_user(){
    let new_user = {
name: document.getElementById(`user_name`).value,
lastname: document.getElementById(`user_lastname`).value,
email: document.getElementById(`user_email`).value,
password: document.getElementById(`password`).value
    }
    db.collection('usersNew').add(new_user).then(function(){
        console.log('Success')
    })
}









