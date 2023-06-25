function addCards(){
let skiko_yabluk = document.getElementById(`cards_num`).value;
let mishok = document.getElementById(`cards`);
let korzinka = ``;
for(i=0;i<skiko_yabluk;i++){
korzinka += `
<div class="card">
		  <div class="card-body my-2">
			<h5 class="card-title">Card ${i+1}</h5>
		  </div>
		</div>
`
}
mishok.innerHTML = korzinka;
}
function changeBG(){
    let yabluki = document.getElementsByClassName(`card`);
    let cards_fon = document.getElementById(`cards_fon`).value;
Array.from(yabluki).map(function(yabluko){
yabluko.style.background = cards_fon;


})


}



function changecolor(){
	let kaka = document.getElementsByClassName(`card`);
let bgc = document.getElementById(`cards_text`).value;
Array.from(kaka).map(function(yabluko){
yabluko.style.color = bgc;


})


}
function Clear(){
	let yabluki = document.getElementsByClassName(`card`);
	Array.from(yabluki).map(function(yabluko){
		yabluko.style.color = "";
		yabluko.style.background = "";
		})



}
function Delete(){
document.getElementById(`cards`).innerHTML = ``;




}




