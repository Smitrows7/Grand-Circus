"use strict";
var products = [
    { name: 'Motor', price: 10.50 },
    { name: 'Sensor', price: 30.00 },
    { name: 'LED', price: 5.00 }
];
var mountains = [
    { name: 'Kilimanjaro', height: 19431 },
    { name: 'Everest', height: 29029 },
    { name: 'Denali', height: 20310 }
];
var inventory = [
    { name: 'motor', price: 10.00, quantity: 10 },
    { name: 'sensor', price: 12.50, quantity: 4 },
    { name: 'LED', price: 1.00, quantity: 20 }
];
function findNameOfTallestMountain(mountain) {
    let highMountainHeight = 0;
    let highMountainName = '';
    if (mountain != undefined) {
        for (let i = 0; i < mountain.length; i++) {
            let temp = mountain[i];
            if (highMountainHeight === 0 || highMountainHeight < mountain[i].height) {
                highMountainHeight = mountain[i].height;
                highMountainName = mountain[i].name;
            }
        }
    }
    return highMountainName;
}
const highestMountain = findNameOfTallestMountain(mountains);
console.log("Highest Mountain :", highestMountain);
function calcAverageProductPrice(prod) {
    let averagePrice = 0;
    let totalPrice = 0;
    if (prod != undefined) {
        for (let i = 0; i < prod.length; i++) {
            let tempProd = prod[i];
            totalPrice += prod[i].price;
        }
        averagePrice = totalPrice / prod.length;
    }
    return averagePrice;
}
const avgProdPrice = calcAverageProductPrice(products);
console.log("Average Product Price :", avgProdPrice);
function calcInventoryValue(inventoryProd) {
    let inventoryPrice = 0;
    if (inventoryProd != undefined) {
        for (let i = 0; i < inventoryProd.length; i++) {
            let tempInventory = inventoryProd[i];
            inventoryPrice += inventoryProd[i].price * inventoryProd[i].quantity;
        }
    }
    return inventoryPrice;
}
const totalInventoryPrice = calcInventoryValue(inventory);
console.log("Total Inventory Price :", totalInventoryPrice);
