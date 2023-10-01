import Vue from 'vue'
import Router from 'vue-router'

import SalesOrderManager from "./components/listers/SalesOrderCards"
import SalesOrderDetail from "./components/listers/SalesOrderDetail"
import Manager from "./components/listers/Cards"
import Detail from "./components/listers/Detail"


Vue.use(Router);

export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        { 
            path: '/sales/orders',
            name: 'SalesOrderManager',
            component: SalesOrderManager,
        },
        {
            path: '/sales/orders/:id',
            name: 'SalesOrderDetail',
            component: SalesOrderDetail,
        },
        { 
            path: '/sales/',
            name: 'SalesManager',
            component: SalesManager,
        },
        {
            path: '/sales//:id',
            name: 'SalesDetail',
            component: SalesDetail,
        },
    ]
})
