import { defineStore } from "pinia";
import api from '@/api/index.js'


const state = () => {
    return {
        data_order: undefined,
    }
}

const actions = {
    async get_order() {
        const res = await api.order.req_order();
        this.data_order = res.data
    }
}


export const order = defineStore('order', {
    state,
    actions
})