function splitVowelsorconsonant(string) {
    const defulaVowels = ['a', 'e', 'i', 'o', 'u','A','E','I','O','U'];
    let vowels = [];
    let consonant = [];
    for (let i = 0; i < string.length; i++) {
        if (defulaVowels.includes(string[i])) vowels.push(string[i]);//INCLUDE FUNCTION RETURNS TRUE IF IT FINDS THE LETTER IN DEFAULTVOWELS
        else consonant.push(string[i]);
    }
    console.log(vowels);
    console.log(consonant);

}
const string = "hello infodevelopers";
splitVowelsorconsonant(string)