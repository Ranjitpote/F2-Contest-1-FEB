/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentbyMap() {
  const passedStudents = arr.filter((students) => {
    if (students.marks > 50) {
      console.log(students);
    }
  });
}
//PrintStudentbyMap();

function PrintStudentbyForEach() {
  arr.forEach((students) => {
    if (students.marks > 50) {
      console.log(students);
    }
  });
}
//PrintStudentbyForEach();

function addData() {
  let newStudent = { id: 4, name: "susan", age: "20", marks: 45 };
  arr.push(newStudent);
  console.log(arr);
}

function removeFailedStudent() {
  let updatedArray = arr.filter((students) => {
    return students.marks < 50;
  });
  console.log(updatedArray);
}

function concatenateArray() {
  let newArray = [
    { id: 4, name: "marie", age: "19", marks: 90 },
    { id: 5, name: "jim", age: "20", marks: 70 },
    { id: 6, name: "lily", age: "18", marks: 60 },
  ];
  let concatenatedArray = arr.concat(newArray);
  console.log(concatenatedArray);
}
