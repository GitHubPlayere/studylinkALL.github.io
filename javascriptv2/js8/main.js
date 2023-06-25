const test = {
    text:`купи мяска`,
    clicks: 0,
    users: [],
    articles: []
}


const FirstApp = {
    data(){
return test

    },
methods: {
clicksFarm(){
this.clicks++
}
}

,
mounted(){
db.collection('Users').get()
.then((res) => {
    res.forEach((doc) => {
    
        this.users.push(doc.data());
});

})

db.collection('articles').get()
.then((res) => {
    res.forEach((doc) => {
        this.articles.push(doc.data());
    });
    
})
}
}
Vue.createApp(FirstApp).mount('#vue')

