import request from '@/utils/request'

export function req_simple() {
    return request({
        url: '/salesData/simple',
        method: 'get',
    })
}

export function req_sales() {
    return request({
        url: '/salesData/sales',
        method: 'get',
    })
}

export function req_category() {
    return request({
        url: '/salesData/category',
        method: 'get',
    })
}

export function req_orders() {
    return request({
        url: '/salesData/orders',
        method: 'get',
    })
}

