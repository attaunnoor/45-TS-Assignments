//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let favouriteTransport: Array <[transport:string, brand:string]> = []

favouriteTransport.push(["MoterCycle", "Honda"]);

favouriteTransport.push(["Car", "Toyota"]);

favouriteTransport.push(["Rikshaw", "SuperPower"]);

console.log(favouriteTransport);

//Dispplay "I would like to own a Honda motorcycle" using For Loop

favouriteTransport.forEach(([transport, brand]) => {console.log(`I would like to own ${brand} ${transport} `)});
