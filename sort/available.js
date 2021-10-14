import display from "../display.js";
import { getElement } from "../utili.js";


function checkAvailable(store){
    const checkBox = getElement('.input-checkbox')
    checkBox.addEventListener('click',()=>{
        let newStore
        if(checkBox.checked){
            newStore = store.filter(product=>product.available === checkBox.checked)
        }
        else{
            newStore = [...store]
        }
        display(newStore,getElement('.products-container'),true)
    })
}



export default checkAvailable