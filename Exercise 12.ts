//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

let names:string[] = ["Farooq", "Shahid", "Inam", "Maaz" ]

for (let name of names) {
//print a personalzed message for each name
console.log(`Good Morning ${name}`)
}export{}