let mas = [4, 2, 88, 1, 75, 53, 43]
let min = mas[0];
let max =  mas[0];
for(i=0; i < mas.length;i++){


if(max < mas[i]){
max = mas[i];
}


if(min < mas[i]){
    min = mas[i];
    }


}
console.log(mas);
console.log(`MAX - ${max}`);
console.log(`MIN - ${min}`);





