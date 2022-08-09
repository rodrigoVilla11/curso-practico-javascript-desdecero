const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const mobileMenu = document.querySelector('.mobile-menu')
const iconMenuMobile = document.querySelector('.menu')
const shoppingCart = document.querySelector('.product-detail')
const iconShoppingCart = document.querySelector('.navbar-shopping-cart')
const cardsContainer = document.querySelector('.cards-container')
const productDetailsCar = document.querySelector('.product-details')


menuEmail.addEventListener('click', toggleDesktopMenu)
iconMenuMobile.addEventListener('click', toggleMobileMenu)
iconShoppingCart.addEventListener('click', toggleShoppingCart)
/*productList[1, 3, 5, 7].addEventListener('click', toggleDetailsCar)*/



function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');

    const isShoppingCartClosed = shoppingCart.classList.contains('inactive');

    if(!isShoppingCartClosed){
        shoppingCart.classList.add('inactive');
    }
}
function toggleMobileMenu(){
    const isShoppingCartClosed = shoppingCart.classList.contains('inactive');

    if(!isShoppingCartClosed){
        shoppingCart.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}        
function toggleShoppingCart(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }
    
    shoppingCart.classList.toggle('inactive');

}        
/*function toggleDetailsCar(){
    productDetailsCar.classList.toggle('inactive');
    toggleDesktopMenu()
    toggleShoppingCart()
    toggleMobileMenu()
}*/

const productList = [];
productList.push({
    name: 'Bike',
    price: '12.000,00',
    image: 'https://images.pexels.com/photos/2393816/pexels-photo-2393816.jpeg?auto=compress&cs=tinysrgb&w=400'
})
productList.push({
    name: 'Car',
    price: '20.000,00',
    image: 'https://images.pexels.com/photos/9993539/pexels-photo-9993539.jpeg?auto=compress&cs=tinysrgb&w=400'
})
productList.push({
    name: 'Bike',
    price: '12.000,00',
    image: 'https://images.pexels.com/photos/2393816/pexels-photo-2393816.jpeg?auto=compress&cs=tinysrgb&w=400'
})
productList.push({
    name: 'Car',
    price: '20.000,00',
    image: 'https://images.pexels.com/photos/9993539/pexels-photo-9993539.jpeg?auto=compress&cs=tinysrgb&w=400'
})
productList.push({
    name: 'Bike',
    price: '12.000,00',
    image: 'https://images.pexels.com/photos/2393816/pexels-photo-2393816.jpeg?auto=compress&cs=tinysrgb&w=400'
})
productList.push({
    name: 'Car',
    price: '20.000,00',
    image: 'https://images.pexels.com/photos/9993539/pexels-photo-9993539.jpeg?auto=compress&cs=tinysrgb&w=400'
})
productList.push({
    name: 'Bike',
    price: '12.000,00',
    image: 'https://images.pexels.com/photos/2393816/pexels-photo-2393816.jpeg?auto=compress&cs=tinysrgb&w=400'
})
productList.push({
    name: 'Car',
    price: '20.000,00',
    image: 'https://images.pexels.com/photos/9993539/pexels-photo-9993539.jpeg?auto=compress&cs=tinysrgb&w=400'
})

function renderProducts(arr){
    for(product of productList){
    const productCards = document.createElement('div');
    productCards.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;

    productInfoDiv.append(productPrice, productName);

    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCards.appendChild(productImg);
    productCards.appendChild(productInfo);

    cardsContainer.appendChild(productCards);
}
}

renderProducts(productList);

