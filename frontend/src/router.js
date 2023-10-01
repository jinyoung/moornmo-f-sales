import Vue from 'vue'
import Router from 'vue-router'

import SalesOrderManager from "./components/listers/SalesOrderCards"
import SalesOrderDetail from "./components/listers/SalesOrderDetail"


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
        }
    ]
})
