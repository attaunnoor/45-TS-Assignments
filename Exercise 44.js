"use strict";
/*Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.*/
function makeSandwich(...items) {
    console.log(`Making sandwich with folowing items:`);
    // for (let item of items) {
    //     console.log(`- ${item}`)
    // }
    if (items.length === 0) {
        console.log(`you order an empty sandwitch`);
    }
    else {
        items.forEach((item, index) => {
            console.log(`  ${index + 1}. ${item}`);
        });
    }
}
// Call the function with different numbers of arguments
makeSandwich();
makeSandwich("Turkey", "Swiss cheese", "Lettuce", "Tomato");
makeSandwich("Ham", "Cheddar cheese");
makeSandwich("Peanut butter", "Jelly");
