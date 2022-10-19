
function convertObject(obj) {
    // return Object.keys(obj).map((key) => [key, obj[key]]); 
    return Object.entries(obj); // can be done in either way returns the same result.
}
const name = {
    firstName: 'bimal',
    lastName: 'shrestha'
}

console.log(convertObject(name));
