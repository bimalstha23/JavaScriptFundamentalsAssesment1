
function getObjectProporties(obj) {
    return Object.getOwnPropertyNames(obj).filter((prop) => {
        return typeof obj[prop] === 'function' //returns only functions of an object
    });
}

const proporties = getObjectProporties(Math);
console.log(proporties);
console.log(Object.getOwnPropertyNames(Math)); //returns everything including functions and variables