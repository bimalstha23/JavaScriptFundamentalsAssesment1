//js program to create a clock in console

setInterval(() => {
    let date = new Date()
    console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
    // let hours = date.getHours();
    // let minutes = date.getMinutes();
    // let seconds = date.getSeconds();
    // console.log(`${hours}:${minutes}:${seconds}`);

}, 1000)