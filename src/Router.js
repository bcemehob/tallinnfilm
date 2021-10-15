import Vue from 'vue'
import VueRouter from 'vue-router'

import Videos from "./components/Videos"
import Info from "./components/Info"
import Review from "./components/Review"
import Mid from "./components/Mid"

Vue.use(VueRouter)

const routes = [
    {path: '/', components: {main: Mid}},
    {path: '/video', components: {main: Videos}},
    {path: '/info', components: {main: Info}},
    {path: '/review', components: {main: Review}},
]

const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;
