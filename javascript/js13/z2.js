let imena = [`Nikita`,`Artem`,`Maks`,`Mark`,`Kiril`,`Andrey`];

let ol = document.getElementById(`spisok`);
let dani2 = ``;
for(i=0; i<6; i++){
dani2 += `<li>${imena[i]}</li>`;
}
ol.innerHTML = dani2;
