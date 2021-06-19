"use strict"
/*let sum = 0;
let n = +prompt('Введіть початок діапазону');
let b = +prompt('Введіть кінець діапазону');
for(let a = n; a <= b; a++) {
    sum+=a;
}
alert(sum);*/
/*let a = +prompt('Введіть перше число');
let b = +prompt('Введіть друге число');
while (a != 0 && b != 0) {
    if (a > b) {
        a = (a % b);
    } else 
        b = (b % a);
}
alert(a + b);*/
/*let a = +prompt('Enter the number');
for (let i = 1; i <= a; i++) {
  if (a % i == 0 && a ==! a && a ==! 1) {
    console.log(i);
  }
}*/
/*let a = prompt('Enter the number');
console.log(a.length);*/
/*function returnWordProducts(number) {
    if(number === 1 || number%10 == 1){
        return 'товар';
    }
    if(number >= 2 && number <= 4){
        return 'товари';
    }
    if(number >= 5) {
        return 'товарів';
    }
}
let count = 21;

alert(count + ' ' + returnWordProducts(count))
*/
/*let a = 5;
let b = 4;
let min (a, b) => {
    if (a < b) {
      return a;
    } else {
      return b;
    }
}
min(a, b)*/
/*let count = 0;
function counter(){
    return ++count;
}
counter();
console.log(counter());
console.log(counter());
console.log(counter());*/
/*function drawTriangle(str, lines) {
    let starExt = str;
    let blank = '-';
    let blankExt = blank;
    for (let i = 0; i < lines; i++) {
        for (let n = 5 - i; n > 0; n--) {
            blankExt += blank;
        }
        console.log(blankExt + starExt + blankExt);
        starExt = starExt + str + str;
        blankExt = '-';
    }
    return '';
}
drawTriangle('*', 6);*/
function drawTriangle(str, lines) {
    let starExt = str;
    let blank = '-';
    let blankExt = blank;
    for (let i = 0; i < lines; i++) {
        blankExt =getBlanks(i, blankExt, blank)
        console.log(blankExt + starExt + blankExt);
        starExt = starExt + str + str;
        blankExt = '-';
    }
    return '';
}
drawTriangle('*', 6);
function getBlanks(i, blankExt, blank) {
    for (let n = 5 - i; n > 0; n--) {
        blankExt += blank;
    }
    return blankExt;
}

