//Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName: string = "muhammad atta un noor";

let nameLowerCase:String = personName.toLocaleLowerCase();

console.log(nameLowerCase)

let nameUpperCase:string =personName.toUpperCase();

console.log(nameUpperCase)

let words:string [] = personName.split(" ");

console.log(words)

let titleCase:string = " "

for (let i=0; i < words.length; i++) {
    titleCase +=words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() +"  ";
}
console.log(titleCase)