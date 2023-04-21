import request from '@/utils/request'

export function req_product() {
    return request({
        url: '/productData',
        method: 'get',
    })
}

export function search_product(id) {
    return request({
        url: `/productData/${id}`,
        method: 'get',
    })
}

export function add_product(data) {
    return request({
        url: '/productData',
        method: 'post',
        data
    })
}

export function delete_product(id) {
    return request({
        url: `/productData/${id}`,
        method: 'delete',
    })
}

export function modified_product(id, data) {
    return request({
        url: `/productData/${id}`,
        method: 'post',
        data
    })
}

export function req_category() {
    return request({
        url: '/category',
        method: 'get'
    })
}

export function modified_category(data) {
    return request({
        url: '/category',
        method: 'post',
        data
    })
}

