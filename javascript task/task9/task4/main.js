const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];

function cartTotal(phones){
    let total = 0;
    for(const phone of phones){
        // console.log(product);
        total = total + phone.price;
    }
    return total;
}

const shoppingCost = cartTotal(phones);
console.log('Phones total price:',shoppingCost);

const avg = shoppingCost / phones.length;
console.log('average number is:',avg);