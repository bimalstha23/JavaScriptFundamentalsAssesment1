function longestWord(str) {
    let result = str.split(' ').sort((a, b) => b.length - a.length); //if the result of b.length-a.length returns negative b is sorted before a and if the result is positive a is sorted before b,
    return result[0]; //returns the first index of an array cuz the array is sorted in assending order accoring to the length of word 
}
let string = 'hello world this is BIMAL SHRESTHA';
console.log(longestWord(string)); //it will return SHRESTHA