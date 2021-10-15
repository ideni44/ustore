// import
import {
    getStorageItem,
    setStorageItem,
    getElement,
  } from '../utili.js';
  import { openCart } from '../import/toggleCart.js';
  import { findProduct } from './store.js';
  import addToCartDOM from './addCartDOM.js';
    import display from '../display.js';

  // set items
  
  const cartItemCountDOM = getElement('.cart-item-count')
  const cartItemsDOM = getElement('.cart-items')
  const cartTotalDOM = getElement('.cart-total')
  
  let cart = getStorageItem('cart')

  export const addToCart = (id) => {
    let item = cart.find(cartItem => cartItem.id == id)
    if(!item){
      //add value
      let product = findProduct(id)
      //add to cart
      product = {...product,amount:1}
      cart = [...cart,product]
  
      //add item to the DOM
      addToCartDOM(product)
    }
    else{
      //update values
        const amount = increaseAmount(id);
        const items = [...cartItemsDOM.querySelectorAll('.cart-item-amount')];
        const newAmount = items.forEach(i=>{
            if(i.dataset.id == id){
                i.textContent = amount;
            }
        })
    }
  
    //add one two to the item count
    displayCartItemCount()
    //calculate total
    displayCartTotal()
    //set cart
    setStorageItem('cart',cart)
  
    openCart()
  };
  
  
  function displayCartItemCount(){
    const amount = cart.reduce((sum,cartItem)=>{
      return (sum += cartItem.amount)
    },0)
    cartItemCountDOM.textContent = amount
  }
  
  function displayCartTotal(){
    const amount = cart.reduce((sum,cartItem)=>{
      return (sum += cartItem.price * cartItem.amount)
    },0)
    cartTotalDOM.textContent = `Total : ${amount}$`
  }
  
  function increaseAmount(id){
    let newAmount;
    cart = cart.map((i)=>{
      if(i.id == id){
        newAmount = i.amount + 1
        console.log(newAmount)
        i = {...i,amount: i.amount+1}
        console.log(i)
      }
      return i
    })
    return newAmount
  }
  
  function decreaseAmount(id){
    let newAmount;

    cart = cart.map((i)=>{
      if(i.id == id){
        newAmount = i.amount - 1
        i = {...i,amount: newAmount}
      }
      return i
    })
    return newAmount
  }
  
  function remove(id){
    cart = cart.filter(cart=>cart.id != id)
  }
  
  function setupCartFunctionality(){
    cartItemsDOM.addEventListener('click',(event)=>{
      const element = event.target
      const parent = event.target.parentElement
      const id = event.target.dataset.id
      const parentID = event.target.parentElement.dataset.id
  
      //remove
      if(element.classList.contains('cart-item-remove-btn')){
        remove(id)
        parent.parentElement.remove()
      }
      //increase
      if(parent.classList.contains('cart-item-increase-btn')){
        console.log(true)
        const newAmount = increaseAmount(parentID)
        parent.nextElementSibling.textContent = newAmount;
      }
      //decrease
      if(parent.classList.contains('cart-item-decrease-btn')){
        const newAmount = decreaseAmount(parentID)
        if(newAmount === 0){
        console.log(parentID)
          remove(parentID)
          parent.parentElement.parentElement.remove();
          setStorageItem('cart',cart)
        }
        else{
          parent.previousElementSibling.textContent = newAmount;
        }
      }
  
      displayCartItemCount()
      displayCartTotal()
      setStorageItem('cart',cart)
    })
  }
  
  function displayCartItemsDOM(){
    cart.forEach(i=>{
      addToCartDOM(i)
    })
  }
  
  const init = () => {
    //display amount cart items
    displayCartItemCount();
    //display total
    displayCartTotal()
    //add all cart items to the DOM
    displayCartItemsDOM()
    //setup cart fucn 
    setupCartFunctionality()
  }
   init()