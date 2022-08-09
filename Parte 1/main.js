const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const mobileMenu = document.querySelector('.mobile-menu')
const iconMenuMobile = document.querySelector('.menu')
const shoppingCart = document.querySelector('.product-detail')
const iconShoppingCart = document.querySelector('.navbar-shopping-cart')

menuEmail.addEventListener('click', toggleDesktopMenu)
iconMenuMobile.addEventListener('click', toggleMobileMenu)
iconShoppingCart.addEventListener('click', toggleShoppingCart)

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