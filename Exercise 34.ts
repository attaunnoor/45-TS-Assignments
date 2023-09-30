// Store your favorite pizza names in an array
const favoritePizzas: string[] = ['Pepperoni', 'Margherita', 'Supreme'];

//print piza names using for loop
for (let i=0; i < favoritePizzas.length; i++) {
    console.log(favoritePizzas[i]);
}

// Loop through the array and print each pizza name and a related statement
//for (const pizza of favoritePizzas) 
for (let i=0; i < favoritePizzas.length; i++) {
    console.log(`I like " ${favoritePizzas[i]} " pizza.`);
}

// Print a concluding sentence
console.log(`I really love pizza!`);
