// global imports
import './import/toggleSidebar.js';
import './import/toggleCart.js';
import './store/setupCart.js'

import display from '../display.js';
import { getElement,setStorageItem,getStorageItem } from './utili.js';


const goods = [
    {
        id:'a1',
        feature:true,
        available: true,
        price:80,
        img:'/goods/farcry6.jpg',
        title:'Far cry 6',
        genre:'Action-adventure'
    },
    {
        id:'a2',
        feature:false,
        available: true,
        price:20,
        img:'/goods/portal2.jpg',
        title:'Portal 2',
        genre:'Puzzle-platform'
    },
    {
        id:'a3',
        feature:false,
        available: true,
        price:5,
        img:'/goods/lostark.png',
        title:'Lost Ark',
        genre:'MMORPG'
    },{
        id:'a4',
        feature:true,
        available: true,
        price:70,
        img:'/goods/cyberpunk2077.jpg',
        title:'Cyberpunk 2077',
        genre:'Action-adventure'
    },
    {
        id:'a5',
        feature:false,
        available: false,
        price:30,
        img:'/goods/metro.jpg',
        title:'Metro:Last Night',
        genre:'Action-adventure'
    },
    {
        id:'a6',
        feature:false,
        available: true,
        price:5,
        img:'/goods/dota.jpg',
        title:'Dota 2',
        genre:'Moba'
    },
    {
        id:'a7',
        feature:false,
        available: true,
        price:10,
        img:'/goods/civilization6.jpg',
        title:`Sid Meier's Civilization VI`,
        genre:'Turn-based strategy'
    },
    {
        id:'a8',
        feature:false,
        available: true,
        price:30,
        img:'/goods/crysis3.jpg',
        title:'Crysis 3',
        genre:'Action-adventure'
    },
    {
        id:'a9',
        feature:false,
        available: true,
        price:30,
        img:'/goods/farcry4.jpg',
        title:'Far cry 4',
        genre:'Action-adventure'
    },
    {
        id:'a10',
        feature:false,
        available: true,
        price:5,
        img:'/goods/valorant.jpg',
        title:'valorant',
        genre: 'Tactical shooter'
    },
    {
        id:'a11',
        feature:true,
        available: true,
        price:100,
        img:'/goods/battlefield.jpeg',
        title:'battlefield 2042',
        genre: 'Tactical shooter'
    },
    {
        id:'a12',
        feature:false,
        available: true,
        price:20,
        img:'/goods/mine.jpg',
        title:'Minecraft',
        genre:'Sandbox'
    },
    {
        id:'a13',
        feature:false,
        available: true,
        price:40,
        img:'/goods/gta5.jpg',
        title:'grand theft auto v',
        genre: 'Action-adventure'
    },
    {
        id:'a14',
        feature:false,
        available: true,
        price:20,
        img:'/goods/rs6.jpeg',
        title:'Raindow Six Siege',
        genre: 'Tactical shooter'
    }
]


window.addEventListener('DOMContentLoaded',()=>{
    console.log(true)
    setStorageItem("store", goods)
    const store = getStorageItem('store')
    const featured = store.filter(product=>product.feature)
    display(featured,getElement('.featured-center'),false)
})


