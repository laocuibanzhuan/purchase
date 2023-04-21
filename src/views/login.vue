<template>
    <el-form label-width="80px" :inline="false">
        <div class="title">
            <h3>请登录</h3>
        </div>
        <el-form-item label="用户名">
            <el-input v-model="data_login.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
            <el-input v-model="data_login.password" :type="passwordType"></el-input>
            <span class="show-pwd" @click="showPwd">
                show
            </span>
        </el-form-item>
        <el-button @click="login_">登录</el-button>
        <div class="tips">
            <span style="margin-right: 20px">username: laocuibanzhuan</span>
            <span> password: laocuibanzhuan</span>
        </div>

    </el-form>
</template>

<script setup>
import { ref, reactive, toRaw } from 'vue'
import { login } from '@/api/user.js'
import { useRouter } from 'vue-router'
import { user } from '@/pinia/user';


const data_login = reactive({
    username: 'laocuibanzhuan',
    password: 'laocuibanzhuan'
})
const passwordType = ref('password')
const router = useRouter()
const state_user = user()


function showPwd() {
    if (passwordType.value == 'password') {
        passwordType.value = 'text'
    } else {
        passwordType.value = 'password'
    }
}
function login_() {
    login(toRaw(data_login)).then(res => {
        state_user.update(res.token)
        router.push('/')
    })
}

</script>

<style scoped></style>