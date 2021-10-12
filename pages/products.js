import '../import/toggleSidebar.js';
import '../import/toggleCart.js';
import '../import/setupCart.js'
import { getElement, getStorageItem } from '../utili.js';
import { display } from '../display.js';
import setupGenre from '../sort/genre.js';


const productsContainer = getElement('.products-container')
const store = getStorageItem('store')
const loading = getElement('.page-loading')

function generateProd(){
    store.map(prod => {display(store,productsContainer,false)})
}

window.addEventListener('DOMContentLoaded',generateProd())
loading.style.display = 'none'

setupGenre(store)