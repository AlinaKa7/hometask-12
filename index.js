seasonList = ['winter', 'summer'];
categoryList = ['vegetables', 'fruits'];
vegetables = ['cabbage', 'avocado', 'tomato'];
fruits = ['grapes', 'raspberry', 'coconut'];
vegetablesPrice = [8, 30, 10];
fruitsPrice = [20, 25, 50];

finalPrice = 0;

do {
    season = prompt('In which season would you like to purchase: winter or summer?').toLowerCase().replaceAll(' ', '') ; 
} while (!seasonList.includes(season));

if (season === 'winter') {
    multiplier = 2;
} else {
    multiplier = 0.8;
}

do {
    category = prompt('Choose category in which you want to buy products: vegetables or fruits').toLowerCase().replaceAll(' ', '');

    if (category === 'vegetables') {
        product = prompt('Choose product from category of vagetables: cabbage, avocado, tomato').toLowerCase().replaceAll(' ', '');
        vegetablesType = vegetables.indexOf(product);
        priceOfProduct = vegetablesPrice[vegetablesType];
    } else {
        product = prompt('Choose product from category of vagetables: grapes, raspberry, coconut').toLowerCase().replaceAll(' ', '');
        fruitsType = fruits.indexOf(product);
        priceOfProduct = fruitsPrice[fruitsType];
    }

} while (!categoryList.includes(category));

do {
    count = parseInt(prompt('Enter count of product').replaceAll(' ', ''));
} while (count <= 1 || isNaN(count));

finalPrice = priceOfProduct * count * multiplier;

productImg = `<img src="images/${category}/${product}.svg" alt="${product}" width="100" height="100" />`;

document.write(`
    <div class="product" align="center">
    ${productImg}
    <p>Selected product: <b>${product}</b></p>
    <p>Count of ${category}: <b>${count}</b></p>
    <p>Selected period: <b>${season}</b></p>
    <p>Selected category: <b>${category}</b></p>
    <p>Final sum: <b>${finalPrice} UAH</b></p>
    </div>`
    );