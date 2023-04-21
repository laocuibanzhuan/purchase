import { defineStore } from "pinia";
import api from '@/api/index.js'


const state = () => {
    return {
        data_simple: undefined,
        data_sales: undefined,
        data_category: undefined,
        data_orders: undefined
    }
}

const actions = {
    async get_simple() {
        const res = await api.sales.req_simple();
        this.data_simple = res.data
    },
    async get_sales() {
        const res = await api.sales.req_sales();
        this.data_sales = res.data
    },
    async get_category() {
        const res = await api.sales.req_category();
        this.data_category = res.data
    },
    async get_orders() {
        const res = await api.sales.req_orders();
        this.data_orders = res.data
    }
}


export const sales = defineStore('sales', {
    state,
    actions
})