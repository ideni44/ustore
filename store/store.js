import { getStorageItem, setStorageItem } from '../utili.js';

let store = getStorageItem('store');

const findProduct = (id) => {
    let product = store.find(product=>product.id === id)
    return product
};


export { store, findProduct };
