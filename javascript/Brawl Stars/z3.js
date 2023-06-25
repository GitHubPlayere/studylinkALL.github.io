let user = {
    name:"Петро",
    lastname:"Іванов",
    age:14,
    email:"petro007@gmail.com",
    city:"Lviv",
}

let body = document.getElementById(`body`);

function showUser(){
    body.innerHTML = `<tr>
    <td>${user.name}</td>
    <td>${user.lastname}</td>
    <td>${user.age}</td>
    <td>${user.email}</td>
    <td>${user.city}</td>
    </tr>`;
}
function changeName(x){
    user.name = x;
    showUser()
}
function changeLastName(x){
    user.lastname = x;
    showUser()
}
function changeAge(x){
    user.age = x;
    showUser()
}
function changeEmail(x){
    user.email = x;
    showUser()
}
function changeCity(x){
    user.city = x;
    showUser()
}