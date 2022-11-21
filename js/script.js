const nKm = parseFloat(prompt('Type the amount of kilometers to run'));
const age = parseInt(prompt('Type your age'));
const pricePerKm = 0.21
const minorSale = 0.2;
const overSixtyFiveSale = 0.4;

let finalPrice;
let discount = 1;

//check user age
if(age < 18){
    //minor
    discount -= minorSale;
}
else if(age >= 65){
    //over65
    discount -= overSixtyFiveSale;
}
// calculate final price
finalPrice = (nKm * pricePerKm) * discount;
// add to element
document.getElementById('price').innerHTML = "Price : &euro; "+finalPrice.toFixed(2);