// //program to generate conbination of string
function combination(str) {
    let result = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length + 1; j++) { //j = i + 1 because we dont want to include the same string
            result.push(str.slice(i, j)); //slice method will return the string from i to j index and push it into result array
        }
    }
    return result;
}
console.log(combination('apple'));