import { getElement } from "../utili.js";

const addToCartDOM = ({id,price,img,amount,title}) => {
    const cartItems = getElement('.cart-items')
    const article = document.createElement('article')
    article.classList.add('cart-item')
    article.setAttribute('data-id',id)
    console.log(article)
    article.innerHTML = `<img
    src="${img}"
    class="cart-item-img"
    alt="${title}"
    />
    <div>
    <h4 class="cart-item-name">${title}</h4>
    <p class="cart-item-price">${price}$</p>
    <button class="cart-item-remove-btn" data-id='${id}'>remove</button>
  </div>
  <div>
    <button class="cart-item-increase-btn" data-id='${id}'>
      <i class="fas fa-chevron-up"></i>
    </button>
    <p class="cart-item-amount" data-id='${id}'>${amount}</p>
    <button class="cart-item-decrease-btn" data-id='${id}'>
      <i class="fas fa-chevron-down"></i>
    </button>
  </div>`
  cartItems.append(article)
}

export default addToCartDOM