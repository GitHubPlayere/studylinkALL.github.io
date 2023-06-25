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
let massive = []
db.collection('Users').get().then(function(res){
res.forEach(function(doc){
   
    massive.push(doc.data())

});


})
console.log(massive)

function drawUsers(){
let tbody = document.getElementById('tbody');
let users_tbody = '';
massive.map(function(user){
users_tbody += `
<tr>
<td>${user.name}</td>
<td>${user.lastname}</td>
<td>${user.email}</td>
<td>${user.phone}</td>
</tr>
`
})
tbody.innerHTML = users_tbody;
}


