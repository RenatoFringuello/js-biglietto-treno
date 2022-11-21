const nKm = 0;
const age = 0;
// so che in genere questo è un dato che non viene gestito dall'utente direttamente
const premium = "no";
// check is a premium user or not
const isPremium = (premium === "yes") ? true : false;

const pricePerKm = 0.21
const minorDiscount = 0.2;
const overSixtyFiveDiscount = 0.4;
const premiumDiscount = 0.05;

let finalPrice = 0.00;
let realPrice = 0.00;
let discount = {
    isMinor : 'Minor : none',
    isOver : 'Over 65 : none',
    isPre200 : '>200km : none',
    isPre300 : '>300km : none',
    total : 1
};

function BuyTickets(){
    // insert data
    nKm = parseFloat(prompt('Type the amount of kilometers to run'));
    age = parseInt(prompt('Type your age'));
    premium = prompt('Are you a premium user? (type \'yes\' or \'no\')');

    //check user age
    if(age < 18){
        //minor
        discount.isMinor = 'Minor : 20%';
        discount.total -= minorDiscount;
    }
    else if(age >= 65){
        //over65
        discount.isOver = 'Over 65 : 40%';
        discount.total -= overSixtyFiveDiscount;
    }
    // check premium discounts
    if(isPremium){
        if(nKm >= 200){
            discount.isPre200 = '>200km : 5%';
            discount.total -= premiumDiscount;
            if(nKm >= 300){
                discount.isPre300 = '>300km : 5%';
                discount.total -= premiumDiscount;
            }
        }
    }

    // calculate real price
    realPrice = (nKm * pricePerKm);
    // calculate final price
    finalPrice = realPrice * discount.total;
}

// add to element
document.getElementById('age').innerHTML = `${age} y/o`;
document.getElementById('n-km').innerHTML = `${nKm} Kilometers`;
document.getElementById('real-price').innerHTML = `&euro; ${realPrice.toFixed(2)}`;
document.getElementById('is-premium').innerHTML = `${isPremium}`;
    // discounts
document.getElementById('minor').innerHTML = discount.isMinor;
document.getElementById('over').innerHTML = discount.isOver;
document.getElementById('premium-200').innerHTML = discount.isPre200;
document.getElementById('premium-300').innerHTML = discount.isPre300;

document.getElementById('final-price').innerHTML = `&euro; ${finalPrice.toFixed(2)}`;
