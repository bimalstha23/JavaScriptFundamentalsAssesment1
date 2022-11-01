function convert(string){
    if(string.length<3){
        return string.toUpperCase();
    }else{
        return string.slice(0,3).toLowerCase()+string.slice(3,string.length); //slice method will return the string from 0 to 3 index and convert it into lower case and add the rest of the string
    }
}

console.log(convert('hi'))