import {createRouter,createWebHistory} from 'vue-router'
import {isAuthenticated} from './functions/useFirebase'

import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Adoptions from './pages/Adoptions.vue'
import Contact from './pages/Contact.vue'
import Messages from './pages/Messages.vue'
import CatData from './pages/CatData.vue'



const routes = [
    {
        path: '/', component: Home
    },
    {
        path: '/About', component: About
    },
    {
        path: '/Adoptions', component: Adoptions
    },
    {
        path: '/Contact', component: Contact
    },
    {
        path: '/CatData', component: CatData
    },
    {
        path: '/Messages', 
        component: Messages,
        beforeEnter: (to, from) => {
            if(isAuthenticated.value) return true
            return '/'
        }
    },
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})
