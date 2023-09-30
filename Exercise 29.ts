/* Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
*/
const favouriteFruit:string[] = ["apple", "banana", "mango"];

//check if the fruit in included in array or not
if (favouriteFruit.includes("apple")) {
    console.log(`Yes it is availabe in array  `);
}

if (favouriteFruit.includes("Orange")) {
    console.log(`Oh Ho it is NOT availabe in array  `);
}

if (favouriteFruit.includes("banana")) {
    console.log(`Yes it is availabe in array  `);
}

if (favouriteFruit.includes("mango")) {
    console.log(`Yes it is availabe in array  `);
}

if (favouriteFruit.includes("strabery")) {
    console.log(`it is NOT availabe in array  `);
}
