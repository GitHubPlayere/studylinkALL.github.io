let suma = 0;
let kilkist = 0;
let yu = true;

while(yu == true){
suma = suma + Number(prompt(`Введіть ціну товару`));
kilkist++
yu = confirm(`Ви будете ще щось купляти?`);
}

console.log(`Ви придбали ${kilkist} товарів на загальну вартість - ${suma} grn`);