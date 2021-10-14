import display from "../display.js";
import { getElement } from "../utili.js";


function priceProduct(store){
    const priceInput = getElement('.price-filter')
    const priceValue = getElement('.price-value')
    let maxPrice = store.map(product=>product.price)
    maxPrice = Math.max(...maxPrice)
    priceInput.value = maxPrice
    priceInput.max = maxPrice
    priceInput.min = 0
    priceValue.textContent = `$${maxPrice}`

    priceInput.addEventListener('input',()=>{
       const value = parseInt(priceInput.value)
       priceValue.textContent = `$${value}`
       let newStore = store.filter(product=> product.price <= value)
       display(newStore,getElement('.products-container'),true)
       if(newStore.length < 1){
            const products = getElement('.products-container')
            products.innerHTML = `<h3 class='filter-error'>Sorry, no products matched</h3>`
       }
    })
}


export default priceProduct