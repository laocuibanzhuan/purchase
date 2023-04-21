import request from '@/utils/request'

export function req_order() {
    return request({
        url: '/orderData',
        method: 'get',
    })
}

