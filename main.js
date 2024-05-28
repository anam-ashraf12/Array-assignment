//question1//
//create an array named fruits that contains the following string elements "apple","mango","banana","ornage"
//let fruits:string[]=[ "apple","mango","banana","ornage"];
//console.log(fruits);
//question2//
//declare and array named numbers that can contain only number elements and initilaize it with tha value of 10,20,30 and 40
//let numbers:number[]=[10,20,30,40];
//console.log(numbers);
//question3//
// access the third element of the fruits array and assign it to a variable name third fruit.
// let fruits: string[]=["peach","kiwi","grapes","guava"];
//  let thirdFruit=fruits[2];
//  console.log(thirdFruit);
//question4//
// change the second element of the numbers array to 25.
// let numbers:number[]=[10,20,30,40];
// numbers[1]=25;
// console.log(numbers);
//question5//
// Add the elements "grapes" to the end of the fruits array using Method
// let fruits:string[]=["apple","mango","banana","ornage"];
//  fruits.push ("grapes");
//  console.log(fruits);
//question6//
// remove the last elemnt from the fruits arry using the method and assign it to a variable named last fruit
// let fruits:string[]=["apple","mango","banana","ornage"];
// let lastFruit=fruits.pop();
// console.log(lastFruit);
//question7//
// remove the first elemnt from the fruits array using the method and assign it to a variable named first fruit
// let fruits:string[]=["apple","mango","banana","ornage"];
// let firstFruit=fruits.shift();
// console.log(firstFruit);
// question8
// at the elmenent "kiwi"to the begining of the fruit array using the
// let fruits:string[]=["apple","mango","banana","ornage"];
// fruits.unshift("kiwi");
// console.log(fruits);
// question9
// remove two elements from fruit array starting from index 1 using the method 
// let fruits:string[]=["apple","mango","banana","ornage"];
// fruits.splice(1,2);
// console.log(fruits);
// question10
// insert the elemnts "pineapple" and "pear" at index 2 of the fruits array using the method
// let fruits:string[]=["apple","mango","banana","ornage"];
// fruits.splice(2,0,"pineapple","pear");
// console.log(fruits);
// question11
// create a new array named citrus fruit that contain the first two elements of the fruits array using the method
// let fruits:string[]=["apple","mango","banana","ornage"];
// let citrusFruits:string[]=fruits.slice(0,2);
// console.log(citrusFruits);
// question12
// create a new array named last two fruit that contain the last two elements of the fruits array using the method
var fruits = ["apple", "mango", "banana", "ornage"];
var lastTwofruits = fruits.slice(-2);
console.log(lastTwofruits);
