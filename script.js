function reverseThisString(string){
    let reverseStr = string.split("");
    reverseStr.reverse();
    return reverseStr.join("");
}
console.log(reverseThisString("Yellow"));

function swapCase(string){
    let str = string.split("");
    for(let i=0; i<str.length; i++){
        let char = str[i];
        if(char == char.toUpperCase()){
            str[i] = char.toLowerCase();
        }
        else{
            str[i] = char.toUpperCase();
        }

    }
    return str.join("");
}
console.log(swapCase("Orange Goose"));

function toCelsius(array){
    const calc = num => (num - 32) * (5/9);
    return array.map(calc);
}
const arr = [23, 32, 41, 50, 59];
console.log(toCelsius(arr));

function passOrFail(array){
    const grade = num => {
        if(num >= 75){
            return true;
        }
        else{
            return false;
        }
    };
    return array.map(grade);
}
const arr2 = [20, 30, 50, 80, 90, 100];
console.log(passOrFail(arr2));

function germanNumbers(){
    const cardinalNumbers = [2,3,4,5,6];
    const germanNumbers = ['zwei', 'drei', 'vier', 'fünf', 'sechs'];
    let arr = [];
    for(let i=0; i<cardinalNumbers.length; i++){
        let str = `${cardinalNumbers[i]} is ${germanNumbers[i]}`;
        arr.push(str);
    }
    return arr;
}
console.log(germanNumbers());

function returnPrimeNumbers(){
    const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    const isPrime = num => {
        if(num == 1){
            return false;
        }
        else if(num == 2){
            return true;
        }
        else{
            for(let i=2; i<num; i++){
                if(num % i == 0){
                    return false;
                }
            }
            return true;
        }
    };
    return numbers.filter(num => isPrime(num));
}
console.log(returnPrimeNumbers());

function oneToHunnid(){
    for(let i=1; i<=100; i++){
        if(i % 3 == 0 && i % 5 == 0){
            console.log("CSC225 RULES I LOVE JAVASCRIPT");
        }
        else if(i % 3 == 0){
            console.log("CSC225 RULES");
        }
        else if(i % 5 == 0){
            console.log("I LOVE JAVASCRIPT");
        }
        else{
            console.log(i);
        }
    }
}
oneToHunnid();

