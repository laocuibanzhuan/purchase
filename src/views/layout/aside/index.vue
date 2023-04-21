<template>
    <el-scrollbar>
        <el-menu>
            <meunItem v-for="(item, index) in routes" :key="index" :item="item" :index="index.toString()" />
        </el-menu>
    </el-scrollbar>
</template>

<script setup>
import { useRouter } from 'vue-router'
import meunItem from './menuItem.vue'
const routes = useRouter().options.routes.filter(item => item.name == 'layout')[0].children
</script>

<style scoped></style>