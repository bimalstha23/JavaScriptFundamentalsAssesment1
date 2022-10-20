//question number 1 

let student = {
    name: "bimal",
    class: "BCA V",
    rollno: 15,
}
console.log(student);
delete student.rollno;
const lengthofObject = Object.keys(student).length;
console.log(lengthofObject);

