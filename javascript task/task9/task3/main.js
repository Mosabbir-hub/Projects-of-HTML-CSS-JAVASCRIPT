const products = [
    {name: 'laptop', price: 35000},
    {name: 'tablet', price: 15000},
    {name: 'mobile', price: 20000}
]

function getShoppingTotal(products){
    let total = 0;
    for(const product of products){
        // console.log(product);
        total = total + product.price;
    }
    return total;
}

const total = getShoppingTotal(products);
console.log('total element price:',total);