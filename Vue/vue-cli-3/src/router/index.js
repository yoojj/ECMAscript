import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

Vue.use(VueRouter);

const routes = [
    {
        path : '/',
        name : Index.name,
        component : Index,
    },
    {
        path: '/page',
        name: 'Page',
        component : function () {
            return import('../views/Page.vue');
        }
    }
]

const router = new VueRouter({
    mode : 'history',
    base : process.env.BASE_URL,
    routes
})

export default router;
