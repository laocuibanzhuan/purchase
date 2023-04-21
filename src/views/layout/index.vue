<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="180px">
        <layoutAside />
      </el-aside>
      <el-container>
        <el-header height="40px">
          <layoutHeader />
        </el-header>
        <el-main>
          <layoutMain />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import layoutAside from '@/views/layout/aside/index.vue'
import layoutHeader from '@/views/layout/header/index.vue'
import layoutMain from '@/views/layout/main/index.vue'
</script>

<style lang="scss" scoped>
.el-header{
  padding: 10px 10px 0 10px;
}
.el-main {
  padding: 10px;
}
</style>