const data = {
    test: 'piska poka kaka',
    socials:[

{
    name: 'Google',
    image: 'https://lh3.googleusercontent.com/jUoaTIlBn5ibfQcND2n5OMD6Z7xoqNj-ShHlFR6QuLffLXD5pS8V2eNg1rGlrsRrnDkoQ28O8UHzqzBQKAGY4l1CS2NQSq2SkRScK6FOjl82jppyohK-'
}
,
{
    name: 'Telegram',
    image: 'https://is2-ssl.mzstatic.com/image/thumb/Purple116/v4/98/6a/c3/986ac383-e560-d26e-5c00-eaf1336e9c18/AppIconLLC-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png'
}
,
{
    name: 'Youtube',
    image: 'https://play-lh.googleusercontent.com/lMoItBgdPPVDJsNOVtP26EKHePkwBg-PkuY9NOrc-fumRtTFP4XhpUNk_22syN4Datc'
}
,
{
    name: 'Firefox',
    image: 'https://www.shutterstock.com/shutterstock/photos/281363948/display_1500/stock-photo-kiev-ukraine-april-firefox-logotype-printed-on-paper-firefox-operating-system-for-281363948.jpg'
}
,
{
    name: 'Opera',
    image: 'https://cdni.comss.net/logo/opera-new.png'
}


    ],
    phones: []







}

const SocialsComponent = {
    props: ['social'],
    template: `<div class="card" style="width: 200px; padding: 10px; margin: 10px;">
    <h2 class="text-center">{{social.name}}</h2>
    <img v-bind:src="social.image"
    style='width:100px; height: 100px;margin:0 auto;'>
    </div>`
}
const PhoneComponent = {
    props:['phone'] ,
    template: `
    <div class="card" style="width: 18rem;">
            <img 
               v-bind:src="phone.img" 
                class="card-img-top" 
                alt="..."
                style="max-height: 300px; width: fit-content;margin: 0 auto;">
            <div class="card-body">
                <h5 class="card-title">{{phone.name}}</h5>
                <p class="card-text">{{phone.opus}}</p>
                <p class="d-flex justify-content-between">
                  <span>Price:</span>
                  <span>{{phone.price}}</span>
                </p>
              <a href="#" class="btn btn-primary">Add to cart</a>
            </div>
        </div>
    `
}



const app = {
    data(){
return data

    },
    methods: {


    },
    components: {
        SocialsComponent,
        PhoneComponent

    },
mounted(){
    db.collection('tovari').get().then(res => {
        res.forEach(docum => {
            let tovar = docum.data();
            tovar.id = docum.id;
            this.phones.push(tovar)
        })
    })
}




}
Vue.createApp(app).mount('#app');























