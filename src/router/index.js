import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Cards',
        component: () =>
            import ('../components/Cards.vue')
    },
    {
        path: '/signin',
        name: 'SignIn',
        component: () =>
            import ('../views/SignIn.vue')
    },
    {
        path: '/signup',
        name: 'SignUp',
        component: () =>
            import ('../views/SignUp.vue')
    },
    {
        path: '/photo/:id',
        name: 'Photo',
        component: () =>
            import ('../views/Photo.vue')
    },
    {
        path: '*',
        name: 'Cards',
        component: () =>
            import ('../components/Cards.vue')
    },
    {
        path: '/form',
        name: 'form',
        component: () =>
            import ('../views/Form.vue')
    },
    {
        path: '/Editprofile',
        name: '/Editprofile',
        component: () =>
            import ('../views/EditProfile.vue')
    },
    {
        path: '/Ayuda',
        name: '/Ayuda',
        component: () =>
            import ('../views/Help.vue')
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router