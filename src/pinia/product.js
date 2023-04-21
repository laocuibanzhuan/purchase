import { defineStore } from "pinia";
import api from '@/api/index.js'


const state = () => {
    return {
        data_product: undefined,
        data_category:undefined
    }
}

const actions = {
    async get_product() {
        const res = await api.product.req_product();
        this.data_product = res.data
    },
    async search_product(name) {
        const res = await api.product.search_product(name);
        this.data_product = res.data
    },
    async add_product(data) {
        await api.product.add_product(data)
        this.get_product()
    },
    async delete_product(id) {
        await api.product.delete_product(id)
        this.get_product()
    },
    async modified_product(id, data) {
        await api.product.modified_product(id, data)
        this.get_product()
    },
    async get_category() {
        const res = await api.product.req_category();
        this.data_category = res.data
    },
    async modified_category(data) {
        await api.product.modified_category(data);
        this.get_category()
    },
}


export const product = defineStore('product', {
    state,
    actions
})