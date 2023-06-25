let user = {
    name:`Vasya`,
    lastname:`Solidniy`,
    age:'8',
    email:`vasya8@gmail.com`, 
    Misto:`Khmelnitskiy`,
}

function showUser(){
    document.getElementById(`table`).innerHTML = `    <table>
    <tr>
        <th>Ім'я</th>
        <th>Прізвище</th>
        <th>Вік</th>
        <th>Емейл</th>
        <th>Місто</th>

    </tr>
    <tr>
        <td>${user.name}</td>
        <td>${user.lastname}</td>
        <td>${user.age}</td>
        <td>${user.email}.</td>
        <td>${user.Misto}</td>
    </tr>
</table>`;

}


function changeName(name){
user.name = name;
showUser()
}
function changelastname(name){
user.lastname = name;
showUser()
}
function changeage(name){
user.age = name;
showUser()
}
function changeemail(name){
user.email = name;
showUser()
}
function changeMisto(name){
user.Misto = name;
showUser()
}
function changeUserData(a, b, c ,d ,f){
user.name = a;
user.lastname = b;
user.age = c;
user.email = d;
user.Misto = f;
showUser()
}

console.log()
function delUser(){
document.getElementById(`table`).innerHTML = ``;
}





