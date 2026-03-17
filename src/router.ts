import Home from './components/Home.vue'
import SignUp from './components/Signup.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
    name:'Home',
    component: Home,
    path: '/'
    },
    {
        name:'SignUp',
        component: SignUp,
        path: '/signup'
    }
]

const router = createRouter ({
    history : createWebHistory(),
    routes
})

export default router