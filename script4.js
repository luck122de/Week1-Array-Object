/*4. Assignment: Building a Student Management System

Description:
You are tasked with building a student management system using JavaScript.
The system should allow you to perform various operations on a list of students,
including adding, updating, deleting, and displaying student information.

Requirements: Here is an initial array of students. Each student is represented as
an object with the following properties: id, firstName, lastName, age,and grade.

const students = [ 
 { id: 1, firstName: "John", lastName: "Doe", age: 20, grade: "A" },
 { id: 2, firstName: "Jane", lastName: "Smith", age: 22, grade: "B" },
 { id: 3, firstName: "Bob", lastName: "Johnson", age: 19, grade: "A" },
 // Add more students as needed ];
*/
const students = [
  { id: 1, firstName: "John", lastName: "Doe", age: 20, grade: "A" },
  { id: 2, firstName: "Jane", lastName: "Smith", age: 22, grade: "B" },
  { id: 3, firstName: "Bob", lastName: "Johnson", age: 19, grade: "A" },
  // Add more students as needed
];

/*a. Add a Student: Create a function to add a new student to the array.*/

const addStudent = (id, firstName, lastName, age, grade) => {
  if ((!id, !firstName, !lastName, !age, !grade)) {
    console.error(
      "Error:All student details require(id,firstName,lastName,age,grade)"
    );
    return false;
  }
  const idExists = students.some((student) => student.id === id);
  if (idExists) {
    console.error(`student with ID ${id} already exits`);
    return false;
  }
  const newStudent = {
    id: id,
    firstName: firstName,
    lastName: lastName,
    age: age,
    grade: grade,
  };

  students.push(newStudent);
  console.log(`Answer 1 -----------------`);
  console.log(JSON.stringify(students, null, 1));
  return true;
};

addStudent(9, "Abhishek", "ID", 23, "C");

/*b. Update Student Information: Create a function to update a student's
information based on their id.*/
const updateInformation = (id, update) => {
  const index = students.findIndex((student) => student.id === id);
  if (index === -1) {
    console.error(`Id ${id} does not exist in students details`);
    return false;
  }
  const studentToUpdate = students[index];
  console.log(studentToUpdate);

  const updateDetail = {
    ...studentToUpdate,
    ...update,
  };
  console.log(updateDetail);
  students[index] = updateDetail;
  console.log(`Answer 2---------------------------`);
  console.log(students);
  return true;
};
updateInformation(2, { firstName: "luck" });

//c. Delete a Student: Create a function to delete a student based on their id.
const deleteStudent = (id) => {
  const index = students.findIndex((student) => student.id === id);
  if (index === -1) {
    console.error(`student does not exit with ${id} ID`);
    return false;
  }
  students.splice(index, 1);
  console.log(`Answer 3---------------------------`);
  console.log(`Student with ID ${id} deleted successfully.`);
  return true;
};
console.log(JSON.stringify(students, null, 1));
const del1 = deleteStudent(1);
console.log(del1);
console.log(JSON.stringify(students, null, 0));

// d. List All Students: Create a function to display a list of all students.
const listOfStudents = (students) => {
  console.log(`Answer 4---------------------------`);
  students.forEach((student) => {
    console.log(
      `ID: ${student.id}, Name: ${student.firstName} ${student.lastName}, Age: ${student.age}, Grade: ${student.grade}`
    );
  });
};
listOfStudents(students);

// e.Find Students by Grade: Create a function to find all students who have a
//  specific grade.

const specificGrade = (grade) => {
  let studentDetail=[]
  for (const element of students) {
    if (element.grade === grade) {
      studentDetail.push(element);
    }
  }
  if(!studentDetail[0]){
    console.log(`Answer 5--------------`)
    console.error(`no such student record existing with ${grade} grade`)
    return false;
  }
  console.log(`Answer 5--------------`)
  console.log(`Details of Student with ${grade} Grade:`)
  console.log(JSON.stringify(studentDetail,null,1));
}
specificGrade('A');


// f. Calculate Average Age: Create a function to calculate the average age of all
//  students using array method.
 const avgAge=(students)=>{
  if(students.length===0){
    console.error(`no records present`)
    return false;
  }
  let sumOfAge=0;
      students.forEach((student)=>{
        sumOfAge+=student.age
      })
      console.log(`Answer 6-------------`)
    console.log(`avg. age of student is ${sumOfAge/students.length}`)
    return true;
 }
avgAge(students);
