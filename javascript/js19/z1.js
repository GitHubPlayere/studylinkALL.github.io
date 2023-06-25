
function napisatu(){
let test = document.getElementById(`test`).value
document.getElementById(`zagovolok`).innerHTML = test;

}


function local(){
    let test = document.getElementById(`test`).value
localStorage.setItem(`slovo`, test);
}


function getlocal(){
    document.getElementById(`zagovolok`).innerHTML = 
localStorage.getItem(`slovo`)

}