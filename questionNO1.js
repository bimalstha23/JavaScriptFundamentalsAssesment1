//question number 1 

let student = {
    name: "bimal",
    class: "BCA V",
    rollno: 15,
}
console.log(student);

//keys of object
const keys  = Object.keys(student);
console.log(keys);
delete student.rollno;
const lengthofObject = Object.keys(student).length;
console.log(lengthofObject);

