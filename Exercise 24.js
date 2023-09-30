"use strict";
const str1 = "Hello";
const str2 = "hello";
console.log(str1 === str2); //false
console.log(str1 !== str2); //false
//test using lower case
const text1 = "Hello World";
const text2 = "hello world";
console.log(text1.toLowerCase() === text2); //true
const num1 = 10;
const num2 = 5;
console.log(num1 === num2); //false
console.log(num1 !== num2); //false
console.log(num1 > num2); //true
console.log(num1 < num2); //false
console.log(num1 >= num2); //True
console.log(num1 <= num2); //false
//test using and and or operators
const x = 5;
const y = 10;
const z = 15;
console.log(x < y && y < z); //true- both values are correct
console.log(x < y || y > z); //true- one values are correct
console.log(x > y && y < z); //False  both conditions are false
console.log(x > y || y > z); //False  both conditions are false
//test wheather an item is in an array
const fruits = ["apple", "banana", "grape"];
console.log(fruits.includes("banana")); //true
console.log(fruits.includes("kiwi")); //false
//test wheather an item is NOT in an array
const color = ["red", "blue", "green"];
console.log(!color.includes("purple")); //false
console.log(!color.includes("red")); //false
