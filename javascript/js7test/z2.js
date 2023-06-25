let massiv = [];
massiv.push = (15);
console.log(massiv);

let array = [];
for(i=0; i<10; i++){
array.push(prompt(`Введіть число`));    
}
array.shift();
array.shift();
array.pop();
array.pop();
array.pop();

let index = array.indexOf(1);
if(index == -1){
alert(`Не вгадав слитий бот`)
}else{
alert(`Угадав`);
}

console.log(array);