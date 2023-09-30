"use strict";
const cityCountry = (city, country) => {
    return `${city}, ${country}`;
};
// Call the function with three city-country pairs and print the results
const location1 = cityCountry("Lahore", "Pakistan");
const location2 = cityCountry("New York", "USA");
const location3 = cityCountry("Paris", "France");
console.log(location1);
console.log(location2);
console.log(location3);
