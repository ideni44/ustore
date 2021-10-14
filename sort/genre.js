
import display from "../display.js";
import { getElement } from "../utili.js";

const setupGenre = (store) =>{
    let genres = ['all',...new Set(store.map((product)=>product.genre))]
    const companies = getElement('.companies')
    companies.innerHTML = genres.map(genre=>{
        return `<button class="company-btn">${genre}</button>`
    }).join('')

    companies.addEventListener('click',(event)=>{
        console.log(event.target.classList)
        if(event.target.classList.contains('company-btn')){
            let newStore = []
            if(event.target.textContent === 'all'){
                newStore = [...store]
            }
            else{
                newStore = store.filter(product=>product.genre === event.target.textContent)
            }
            display(newStore,getElement('.products-container'),true)
        }
    })
}


export default setupGenre