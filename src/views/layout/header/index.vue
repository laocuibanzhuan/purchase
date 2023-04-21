<template>
    <div class="header">
        <navigation class="navigation" />
        <userInfo class="userInfo" />
    </div>
</template>

<script setup>
import navigation from './navigation.vue';
import userInfo from './userInfo.vue';
</script>

<style scoped>
.header {
    position: relative;
    height: 40px;
}

.navigation {
    position: absolute;
    margin: 5px 0 0 50px;
}

.userInfo {
    position: absolute;
    right: 0;
}
</style>