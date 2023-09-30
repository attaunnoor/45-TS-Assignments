/*Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False. */

function createFruit(name: string, colours: string, taste: string){
    return {
        name,
        colours,
        taste,
    };
}
//create an array of fruits

let fruits = [
    createFruit('Apple', 'Red', 'Sweet'),
    createFruit('Banana', 'Yellow', 'Sweet'),
    createFruit('Orange', 'Orange', 'Sweet'),
    createFruit('Pineapple', 'Orange', 'Sweet'),
    createFruit('Mango', 'Orange', 'Sweet'),
    createFruit('Watermelon', 'Orange', 'Sweet'),
    createFruit('Strawberry', 'Orange', 'Sweet'),
    createFruit('Kiwi', 'Orange', 'Sweet'),
    createFruit('Peach', 'Orange', 'Sweet'),
    createFruit('Cherry', 'Orange', 'Sweet'),
    createFruit('Pineapple', 'Orange', 'Sweet'),
    createFruit('Mango', 'Orange', 'Sweet'),
    createFruit('Watermelon', 'Orange', 'Sweet'),
]
const invlaidIndex=20;
console.log(`Fruit at ${invlaidIndex}:`, fruits[invlaidIndex]);

fruits.forEach((fruit) => {
    console.log(`Name: ${fruit.name}, color: ${fruit.colours}, Taste: ${fruit.taste}`);
});
export {};