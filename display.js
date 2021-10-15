
import { addToCart } from './store/setupCart.js';
const display = (products, element, filter) => {
  // display products
  element.innerHTML = products
    .map((product) => {
      const { id, title, img, price } = product;
      return ` <article class="product">
          <div class="product-container">
            <img src="${img}" class="product-img img" alt="${title}" />
           
            <div class="product-icons">
              <button class="product-cart-btn product-icon" data-id="${id}">
                <i class="fas fa-shopping-cart"></i>
              </button>
            </div>
          </div>
          <footer>
            <p class="product-name">${title}</p>
            <h4 class="product-price">${price}$</h4>
          </footer>
        </article> `;
    })
    .join('');
    if(filter)return
  element.addEventListener('click', function (e) {
    const parent = e.target.parentElement;
    if (parent.classList.contains('product-cart-btn')) {
      addToCart(parent.dataset.id);
    }
  });
};

export default display;
