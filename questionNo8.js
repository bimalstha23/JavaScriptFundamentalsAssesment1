function aphabeticalOrderString(str){
    return str.split('').sort().join(''); //did convert into array and performed sort method of array and convert it back to string 
}
let string = 'zyxwvutsrqponmlkjihgfedcba';
console.log(aphabeticalOrderString(string)); //output:abcdefghijklmnopqrstuvwxyz
