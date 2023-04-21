<template>
    <template v-if="notHasChild">
        <router-link :to="toPath">
            <el-menu-item :index="props.index">
                <template #title>{{ props.item.meta.title }}</template>
            </el-menu-item>
        </router-link>
    </template>

    <el-sub-menu v-else :index="props.index">
        <template #title>
            {{ props.item.meta.title }}
        </template>
        <menuItem v-for="(item, index) in props.item.children" :key="index" :index="props.index + index" :item="item"
            :fatherRoute="toPath">
        </menuItem>
    </el-sub-menu>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps(['item', 'index', 'fatherRoute'])
let notHasChild = (function () {
    if (props.item.children == undefined) {
        return true
    } else {
        return false
    }
})()
let toPath = (function () {
    if (!props.fatherRoute) {
        return '/' + props.item.path
    } else {
        return props.fatherRoute + '/' + props.item.path
    }
})()
</script>

<style scoped></style>