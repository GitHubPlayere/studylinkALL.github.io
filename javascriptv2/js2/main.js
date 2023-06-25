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

let spiner = document.getElementById('spiner');
let list = document.getElementById('list');
let statti = [];

db.collection('articles').get().then(function(res){
  res.forEach(function(title){
statti.push(title.data())
spiner.innerHTML = '';
drawArticle(title.data())
  })
})
console.log(statti)
function drawArticle(data){
    let article = document.createElement('article');

    let title = document.createElement('h2');
    let text = document.createElement('div');
    let avtor = document.createElement('a');

title.innerHTML = data.title;
text.innerHTML = data.article;
avtor.innerHTML = 'original rim rym bym bam';
avtor.href = data.author

article.appendChild(title)
article.appendChild(text)
article.appendChild(avtor)

list.appendChild(article)


}




























