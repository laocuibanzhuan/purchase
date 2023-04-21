import { defineStore } from "pinia";
import { getToken, setToken, removeToken } from '@/utils/token.js'


const state = () => {
    return {
        token: getToken(),
        userName: 'laocuibanzhuan'
    }
}

const actions = {
    update(newToken) {
        this.token = newToken
        setToken(newToken)
    },
    logOut() {
        this.token = undefined
        removeToken()
    }
}


export const user = defineStore('user', {
    state,
    actions
})
