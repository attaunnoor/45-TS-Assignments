"use strict";
/* Seeing the World: Think of at least five places in the world you’d like to visit.

• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.destinations = void 0;
//Step1: Create an array to store destinations for visit
let destinations = ["Sydney", "New York", "London", "Paris", "Tokyo"];
exports.destinations = destinations;
//Step2: Print the array in its original order
console.log("print the array simply");
console.log(destinations);
//Step3: Print the array in alphabetical order without modifying the actual list
console.log("\n print in alphabetical order");
console.log([...destinations].sort());
//Step4: Show that your array is still in its original order by printing it
console.log("\n print in original order");
console.log(destinations);
//Step5: Print the array in reverse alphabetical order without changing the order of the original list
console.log("\n print in reverse alphabetical order");
console.log([...destinations].sort().reverse());
//Step6: Show that your array is still in its original order by printing it again
console.log("\n print in original order again");
console.log(destinations);
//Step7: Reverse the order of your list. Print the array to show that its order has changed
console.log("\n reverse the order of your list");
console.log(destinations.reverse());
//Step8: Reverse the order of your list again. Print the list to show it’s back to its original order
console.log("\n reverse the order of your list again");
console.log(destinations);
//Step9: Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed
console.log("\n sort your array");
console.log(destinations.sort());
//Step10: Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed
console.log("\n sort to change your array");
console.log(destinations.sort().reverse());
