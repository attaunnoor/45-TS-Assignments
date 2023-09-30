"use strict";
/* More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.guestList = void 0;
//step 1: Informing people that you have a bigger dinner table
let guestList = ["Farooq", "Shahid", "Jarray"];
exports.guestList = guestList;
for (let guest of guestList) {
    console.log(`Hello ${guest} we found a bigger dinner table`);
}
//step 2: Adding one new guest to the beginning of your array 
guestList.unshift("Faisal Anaari");
console.log(guestList);
//step 3: Adding one new guest to the middle of your array
//let midleGuest = "Faraz"
//let midleIndex = (guestList.length/2);
//console.log(midleIndex)
guestList.splice((guestList.length / 2), 0, "Fazaar");
console.log(guestList);
//step 4: Use append() to add one new guest to the end of your list.
let endGuest = "Inam";
guestList.push(endGuest);
console.log(guestList);
//step 5: Print a new set of invitation messages, one for each person in your list.
console.log("New set of invitation messages");
for (let guest of guestList) {
    console.log(`Hello ${guest} , I would like to invite you to dinner`);
}
console.log(guestList);
