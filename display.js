

export function display(products,elem,filter){
    elem.innerHTML = products.map(product=>{
        const{id,title,price,img,genre} = product
        return `
        <aricle class="product" data-genre='${genre}'>
        <div class="product-container">
          <img src="${img}" alt=""class="product-img img">
          
          <div class="product-icons">
            <button class="product-cart-btn product-icon" data-id="${id}">
              <i class="fas fa-shopping-cart"></i>
            </button>
          </div>
        </div>
        <footer>
          <p class="product-name">${title}</p>
          <h4 class="product-price">${price}</h4>
        </footer>
      </aricle> `
    }).join('')

    if(filter)return;
    elem.addEventListener('click',(event)=>{
        if(event.target.classList.contains('product-cart-btn')){
            console.log(true)
        }
    })
}