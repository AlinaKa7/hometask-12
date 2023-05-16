vegetables = ['cabbage', 'avocado', 'tomato'];
fruits = ['grapes', 'raspberry', 'coconut'];

finalPrice = 0;

do {
    season = prompt('In which season would you like to purchase: winter or summer?'); 

    do {
        category = prompt('Choose category in which you want to buy products: vegetables or fruits');

        if (category.toLowerCase().replaceAll(' ', '') === 'vegetables') {
            product = prompt('Choose product from category of vagetables: cabbage, avocado, tomato');
        } else if (category.toLowerCase().replaceAll(' ', '') === 'fruits') {
            product = prompt('Choose product from category of vagetables: grapes, raspberry, coconut');
        } else {
            product = alert('Try again');
        }

        do {
            count = parseInt(prompt('Enter count of product'));
        } while (count < 1 || isNaN(count));

        roughPrice = 0;

        switch (product.toLowerCase().replaceAll(' ', '')) {
            case 'cabbage':
                price = 8;
                roughPrice = price * count;
                break;
            case 'avocado':
                price = 30;
                roughPrice = price * count;
                break;  
            case 'tomato':
                price = 10;
                roughPrice = price * count;
                break;
            case 'grapes':
                price = 20;
                roughPrice = price * count;
                break;
            case 'raspberry':
                price = 25;
                roughPrice = price * count;
                break;
            case 'coconut':
                price = 50;
                roughPrice = price * count;
                break;
        }

    } while (category.toLowerCase().replaceAll(' ', '') !== 'vegetables' && category.toLowerCase().replaceAll(' ', '') !== 'fruits');

} while (season.toLowerCase().replaceAll(' ', '') 
!== 'winter' && season.toLowerCase().replaceAll(' ', '') !== 'summer');

if (season.toLowerCase().replaceAll(' ', '') === 'winter') {
    finalPrice = roughPrice * 2;
} else if (season.toLowerCase().replaceAll(' ', '') === 'summer') {
    finalPrice = roughPrice * 0.8;
} else {
    finalPrice = 0;
}

imageCabbage = document.createElement("img");
imageCabbage.src = "images/vegetables/cabbage.svg";
imageCabbage.width = "100";
imageCabbage.height = "100";
imageCabbage.alt = 'cabbage';

divCabbage = document.createElement('div');
divCabbage.align = "center";
divCabbage.append(imageCabbage);

imageAvocado = document.createElement("img");
imageAvocado.src = "images/vegetables/avocado.svg";
imageAvocado.width = "100";
imageAvocado.height = "100";
imageAvocado.alt = 'avocado';

divAvocado = document.createElement('div');
divAvocado.align = "center";
divAvocado.append(imageAvocado);

imageTomato = document.createElement("img");
imageTomato.src = "images/vegetables/tomato.svg";
imageTomato.width = "100";
imageTomato.height = "100";
imageTomato.alt = 'tomato';

divTomato = document.createElement('div');
divTomato.align = "center";
divTomato.append(imageTomato);

imageCoconut = document.createElement("img");
imageCoconut.src = "images/fruits/coconut.svg";
imageCoconut.width = "100";
imageCoconut.height = "100";
imageCoconut.alt = 'coconut';

divCoconut = document.createElement('div');
divCoconut.align = "center";
divCoconut.append(imageCoconut);

imageRaspberry = document.createElement("img");
imageRaspberry.src = "images/fruits/raspberry.svg";
imageRaspberry.width = "100";
imageRaspberry.height = "100";
imageRaspberry.alt = 'raspberry';

divRaspberry = document.createElement('div');
divRaspberry.align = "center";
divRaspberry.append(imageRaspberry);

imageGrapes = document.createElement("img");
imageGrapes.src = "images/fruits/grapes.svg";
imageGrapes.width = "100";
imageGrapes.height = "100";
imageGrapes.alt = 'coconut';

divGrapes = document.createElement('div');
divGrapes.align = "center";
divGrapes.append(imageGrapes);


if (product === 'cabbage') {
    insertImage = divCabbage;
} else if (product === 'avocado') {
    insertImage = divAvocado;
} else if (product === 'tomato') {
    insertImage = divTomato;
} else if (product === 'grapes') {
    insertImage = divGrapes;
} else if (product === 'raspberry') {
    insertImage = divRaspberry;
} else {
    insertImage = divCoconut;
};   

document.body.append(insertImage);
document.write(`
    <div class="product" align="center">
    <p>Selected product: <b>${product}</b></p>
    <p>Count of ${category}: <b>${count}</b></p>
    <p>Selected period: <b>${season}</b></p>
    <p>Selected category: <b>${category}</b></p>
    <p>Final sum: <b>${finalPrice} UAH</b></p>
    </div>`
    );