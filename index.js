const coffeeMenu = require("./coffee_data.js");

coffeeMenu.forEach((ele) => ele.price = Number(ele.price));

// console.log(coffeeMenu);

// Print an array of all the drinks on the menu.
const drinks = coffeeMenu.map((ele) => {
    return ele.name});
console.log(drinks);

// Print an array of drinks that cost 5 and under.
const inexpensive = coffeeMenu.filter((ele) => {
    return ele.price <= 5;
})
console.log(inexpensive);

// Print an array of drinks that are priced at an even number.
const even = coffeeMenu.filter((ele) => {
    return ele.price % 2 === 0;
})
console.log(even);

// Print the total if you were to order one of every drink.
const initialVal = 0;
const totalPrice = coffeeMenu.reduce((acc, currentVal) => acc + currentVal.price, initialVal)
console.log(totalPrice);

// Print an array with all the drinks that are seasonal.
const seasonal = coffeeMenu.filter((ele) => {
    return ele.seasonal === true;
})
console.log(seasonal);

// Print all the seasonal drinks with the words "with imported beans" after the item name. For example: "affogato with imported beans".

const imported = seasonal.map((ele) => {
    return ele.name += " with imported beans";
})
console.log(imported);