"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function makeShirt(size = "Large", message = "I love TypeScript") {
    console.log(`The shirt is size ${size} and it has the message: "${message}".`);
}
// Create a large shirt with the default message
makeShirt();
// Create a medium shirt with the default message
makeShirt("Medium");
// Create a small shirt with a custom message
makeShirt("Small", "Custom message for a small shirt.");
