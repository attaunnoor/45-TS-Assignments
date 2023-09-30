//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

let person = {
    name:"John",
    age: 30,
    occupation: "Developer"
};  
let persons: Array<typeof person> =[]

persons.push(
    {
        name:"Faisal",
        age: 55,
        occupation: "Senior Manager"
    },
    {
        name:"Atta",
        age: 45,
        occupation: "Manager DC"
    },
    {
        name:"Shahid",
        age: 50,
        occupation: "Officer"
    }

);
//console.log(persons);
function getPerson(persons: Array<typeof person>)
     {
         return persons[0];
     }
for (let details of persons){
    console.log(`Name=${details.name}, age=${details.age},occupation=${details.occupation}`);
}
getPerson(persons);



