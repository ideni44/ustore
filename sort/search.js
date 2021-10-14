import display from "../display.js";
import { getElement } from "../utili.js";

function searchProduct(store){
    const inputForm = getElement('.input-form')
    const input = getElement('.search-input')
    inputForm.addEventListener('keyup',()=>{
        let value = input.value
        if(value){
            const newStore = store.filter(product=>{
                let {title} = product
                title = title.toLowerCase()
                if(title.startsWith(value)){
                    return product
                }
            })
            display(newStore,getElement('.products-container'),true)
        }
        else{
            display(store,getElement('.products-container'),true)
        }
    })
}

export default searchProduct