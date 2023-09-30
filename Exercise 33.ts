// Store the numbers 1 through 9 in an array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Loop through the array
for (const number of numbers) {
    let ordinal;

    // Use an if-else chain to determine the proper ordinal ending
    if (number === 1) {
        ordinal = 'st';
    } else if (number === 2) {
        ordinal = 'nd';
    } else if (number === 3) {
        ordinal = 'rd';
    } else {
        ordinal = 'th';
    }

    // Print the result with the proper ordinal ending
    console.log(`${number}${ordinal}`);
}
