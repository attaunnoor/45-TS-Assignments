//Create an array of magician's names
const magicianNames: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

function showMagicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

// Call the function to show the magicians
showMagicians(magicianNames);

function make_great(megicians:string[]):void {
    for (let i=0; i < magicianNames.length; i++){
        console.log(`The Great ${megicians[i]}`)
    }
}
make_great(magicianNames)
// Start with a copy of your program from Exercise 40. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.