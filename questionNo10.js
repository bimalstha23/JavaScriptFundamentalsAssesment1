function coutVowels(string){
    const vowels = ['a','e','i','o','u'] 
    let count = 0;
    for(i=0;i<string.length;i++){
        if(vowels.includes(string[i])) count++ //returs true and increase the count by 1 if it finds the letter in vowels array else false and does nout increase the count
    }
    return count;
}
const string  = "hello world";
console.log(coutVowels(string))