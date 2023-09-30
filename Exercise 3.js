"use strict";
//Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personName = "muhammad atta un noor";
let nameLowerCase = personName.toLocaleLowerCase();
console.log(nameLowerCase);
let nameUpperCase = personName.toUpperCase();
console.log(nameUpperCase);
let words = personName.split(" ");
console.log(words);
let titleCase = " ";
for (let i = 0; i < words.length; i++) {
    titleCase += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + "  ";
}
console.log(titleCase);
