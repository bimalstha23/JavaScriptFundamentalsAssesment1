function reverseNumber(number) {
    const reverseString = num.toString().split('').reverse().join('');
    return parseFloat(reverseString);

}

const num = 12347649;
console.log(reverseNumber(num))
//lets break down what happend in reverseString Function

//num.toString()  converts the number into string  so the result will be '12347649'
//split('') converts the string into array so that we can perfom array.reverse method, output:['1','2','3','4','7','6','4','9']
//reverse() operation reverse the array output:['9', '4', '6','7', '4', '3','2', '1']
//join('') it will join all the elements in array into single string. output '94674321'
//parseFloat(reverseString) at last it will convert the reversed string into float.

//can be done in another wayy without converting into string

function reverseNumberwithoutstring(number) {
    let reversenum = 0;
    while (number > 0) {
        reversenum = (reversenum * 10) + (number % 10);
        number = Math.floor(number / 10);
    }
    return reversenum;
}

console.log(reverseNumberwithoutstring(2149734));
//  it will not work in case the number end with 0 while reversing it will return with out 0
//  for example if you try to reverse 137420 this number it will return 24731 not excludes 0 as basically numbers does not starts with 0;
