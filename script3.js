/*3. Object Extensibility and Sealing*/
const obj={
    name:"Ankit",
    age:"25",
}
/*a) Use the Object.preventExtensions method to prevent any further additions
 of properties to the student object.*/
Object.preventExtensions(obj);
obj.city="Jaipur"
obj.name="Ank"
delete obj.age;

console.log(`we trying above to add the element in existing object which prevent 
for Extension and trying to update the value which will get update 
as it is not seal ${JSON.stringify(obj)}`);

// console.log("we trying above to add the element in existing object which prevent for Extension and trying to update the value which will get update as it is not seal", obj)

/*b) Use the Object.isExtensible method to check if the student object is extensible.
 Store the result in a variable called extensibleStatus.*/
console.log(Object.isExtensible(obj));
/*c) Create a new object called teacher with a subject property set to 'Math'.
*/
const teacher={
    subject:"Math"
}
/*
d) Use the Object.seal method to seal the teacher object, preventing any additions or
 deletions of properties.*/
 Object.seal(teacher);
 teacher.subject="Science";
 delete teacher.subject;
 console.log(teacher);
/*
e) Use the Object.isSealed method to check if the teacher object is sealed. Store
 the result in a variable called sealedStatus.
 */
console.log(Object.isSealed(teacher));

/*f) Print the extensibleStatus and sealedStatus to the console.*/
const extensibleStatus=Object.isExtensible(obj)
const sealedStatus=Object.isSealed(teacher);

console.log("Extensibility status of student object:", extensibleStatus);
console.log("Sealed status of teacher object:", sealedStatus);






