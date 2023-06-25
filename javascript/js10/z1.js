let imya = prompt(`Введіть свое їмя`);
let gmail = prompt(`Введіть свое gmail`);
let username = document.getElementById('username');
username.innerHTML = `<a>${imya}</a>`;

let text = document.getElementById('text')
text.innerHTML= `<h2 align="center">Вітаю петро іванов на вашу скриньку почтову<br> vlad@gmail.com відправили листь із пітвердженям</h2>`;