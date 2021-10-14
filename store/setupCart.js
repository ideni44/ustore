// import
import {
    getStorageItem,
    setStorageItem,
    getElement,
  } from '../utili.js';
  import { openCart } from '../import/toggleCart.js';
  import { findProduct } from './store.js';
  import addToCartDOM from './addCartDOM.js';
  import { display } from '../display.js';
  // set items
  
  const cartItemCountDOM = getElement('.cart-item-count')
  const cartItemsDOM = getElement('.cart-items')
  const cartTotalDOM = getElement('.cart-total')
  
  let cart = getStorageItem('cart')

export const addToCart = (id) =>{
    let item = cart.find(cartItem => cartItem.id === id)
    if(!item){
        let product = findProduct(id)
        product = {...product, amount:1}
        cart = [...cart, product]
        addToCartDOM(product)
        console.log(cart)
    }
    else{

    }
    displayCartItemCount()
    displayCartTotal()
    setStorageItem('cart',cart)
    openCart()
}

function displayCartItemCount(){
    const amount = cart.reduce((total,i)=>{
        return (total += i.amount)
    },0)
    console.log(amount)
    cartItemCountDOM.textContent = amount
}

function displayCartTotal(){
    let total = cart.reduce((total,i)=>{
        return (total += i.price * i.amount)
    },0)
    cartTotalDOM.textContent = `Total ${total}$`
}

function setupCartFunctionality(){

}

function displayCartItemsDOM(){
    cart.forEach(i=>{
        addToCartDOM(i)
    })
}

  const init = () =>{
    // console.log(cart)
    displayCartItemCount()
    displayCartTotal()
    displayCartItemsDOM()
    setupCartFunctionality()
  }

  init()