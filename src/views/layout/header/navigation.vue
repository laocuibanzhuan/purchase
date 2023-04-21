<template>
    <el-breadcrumb :separator-icon="ArrowRight">
        <transition-group name="breadcrumb">
            <el-breadcrumb-item v-for="item in matchRouteList" :key="item.path">
                {{ item.meta.title }}
            </el-breadcrumb-item>
        </transition-group>
    </el-breadcrumb>
</template>

<script setup>
import { ArrowRight } from '@element-plus/icons-vue'
import { useRoute } from 'vue-router';
import { reactive, watch } from "vue"

const route = useRoute()
const matchRouteList = reactive(route.matched.filter((item) => item.meta && item.meta.title))

watch(() => route.path, () => {
    do {
        matchRouteList.pop()
    } while (matchRouteList.length > 0);
    const newMatchRouteList = route.matched.filter((item) => item.meta && item.meta.title)
    do {
        matchRouteList.push(newMatchRouteList.shift())
    } while (newMatchRouteList.length > 0);
})
</script>

<style scoped>
.breadcrumb-enter-from {
    opacity: 0;
    transform: translateX(100px);
    position: absolute;
}

.breadcrumb-enter-active{
    transition: all .5s;
}
</style>