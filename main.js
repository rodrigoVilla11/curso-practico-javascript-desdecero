const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const mobileMenu = document.querySelector('.mobile-menu')
const iconMenuMobile = document.querySelector('.menu')
const shoppingCart = document.querySelector('.product-detail')
const iconShoppingCart = document.querySelector('.navbar-shopping-cart')
const cardsContainer = document.querySelector('.cards-container')
const productDetailsCar = document.querySelector('.product-details')
const productDetailsCarClosed = document.querySelector('.product-details-close')
const shoppingCartArrow = document.querySelector('.title-container')


menuEmail.addEventListener('click', toggleDesktopMenu)
iconMenuMobile.addEventListener('click', toggleMobileMenu)
iconShoppingCart.addEventListener('click', toggleShoppingCart)
productDetailsCarClosed.addEventListener('click', closeProductDetailCar)
/*shoppingCartArrow.addEventListener('click', closeShoppingCart)*/


function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');

    const isShoppingCartClosed = shoppingCart.classList.contains('inactive');

    if(!isShoppingCartClosed){
        shoppingCart.classList.add('inactive');
    }

    const isProductDetailsCarClosed = productDetailsCar.classList.contains('inactive');

    if(!isProductDetailsCarClosed){
        productDetailsCar.classList.add('inactive');
    }
}
function toggleMobileMenu(){
    const isShoppingCartClosed = shoppingCart.classList.contains('inactive');

    if(!isShoppingCartClosed){
        shoppingCart.classList.add('inactive');
    }

    const isProductDetailsCarClosed = productDetailsCar.classList.contains('inactive');

    if(!isProductDetailsCarClosed){
        productDetailsCar.classList.add('inactive');
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

    const isProductDetailsCarClosed = productDetailsCar.classList.contains('inactive');

    if(!isProductDetailsCarClosed){
        productDetailsCar.classList.add('inactive');
    }

    shoppingCart.classList.toggle('inactive');

    shoppingCartArrow.addEventListener('click', closeShoppingCart);
   
    function closeShoppingCart(){
        shoppingCart.classList.add('inactive');
    }

}        
/*function closeShoppingCart(){
    productDetailsCar.classList.remove('inactive');
    desktopMenu.classList.add('inactive');
    shoppingCart.classList.add('inactive');
    mobileMenu.classList.add('inactive');
}*/
function openProductDetailCar(){
    productDetailsCar.classList.remove('inactive');
    desktopMenu.classList.add('inactive');
    shoppingCart.classList.add('inactive');
    mobileMenu.classList.add('inactive');
}
function closeProductDetailCar(){
    productDetailsCar.classList.add('inactive');

    const isShoppingCartClosed = shoppingCart.classList.contains('inactive');

    if(!isShoppingCartClosed){
        shoppingCart.classList.add('inactive');
    }

    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }

}

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
    productImg.addEventListener('click', openProductDetailCar)


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

