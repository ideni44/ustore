import '../import/toggleSidebar.js';
import '../import/toggleCart.js';
import '../store/setupCart.js'
import { getElement, getStorageItem } from '../utili.js';
import display from "../display.js";
import setupGenre from '../sort/genre.js';
import searchProduct from '../sort/search.js';
import priceProduct from '../sort/price.js';
import checkAvailable from '../sort/available.js';

const productsContainer = getElement('.products-container')
const store = getStorageItem('store')
const loading = getElement('.page-loading')



window.addEventListener('DOMContentLoaded',display(store,productsContainer,false))
// generateProd()
loading.style.display = 'none'

setupGenre(store)
searchProduct(store)
priceProduct(store)
checkAvailable(store)