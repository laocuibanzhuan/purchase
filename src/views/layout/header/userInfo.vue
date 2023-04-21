<template>
    <el-dropdown trigger="click">
        <el-button>
            {{ userLogin?store_user.userName:'login' }}<el-icon class="el-icon--right"><arrow-down /></el-icon>
        </el-button>
        <template #dropdown>
            <el-dropdown-menu class="user-dropdown">
                <router-link to="/">
                    <el-dropdown-item> 回到首页 </el-dropdown-item>
                </router-link>
                <el-dropdown-item @click.native="logout">
                    <span v-if="!userLogin" style="display: block">去登录</span>
                    <span v-else style="display: block">退出登录</span>
                </el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>

<script setup>
import { user } from '@/pinia/user.js'
import { useRouter } from 'vue-router'
import {ref} from 'vue'


const store_user = user()
let userLogin = store_user.token ? ref(true) : ref(false)
const router = useRouter()


function logout() {
    store_user.logOut()
    router.push('/login')
}

</script>
