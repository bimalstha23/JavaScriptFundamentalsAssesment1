function checkConditions(a,b){
    const result = a===50||b===50||a+b===50?true:false;
    return result;
    // -----or-----
    // if(a===50||b===50||a+b===50) return true;
    // else return false;
}

console.log(checkConditions(25,50));

