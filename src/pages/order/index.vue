<template>
    <el-button @click="saveAsCsv" style="margin-bottom: 20px;">导出数据为csv文件</el-button>

    <el-table v-if="state_order.data_order" :data="state_order.data_order" border stripe>
        <el-table-column prop="id" align="center" label="ID">
        </el-table-column>
        <el-table-column prop="mobile" align="center" label="mobile">
        </el-table-column>
        <el-table-column prop="name" align="center" label="name">
        </el-table-column>
        <el-table-column prop="a" align="center" label="a">
        </el-table-column>
        <el-table-column prop="b" align="center" label="b">
        </el-table-column>
    </el-table>
</template>

<script setup>
import { order } from '@/pinia/order.js'
import { toRaw } from 'vue'


const state_order = order()


state_order.get_order()
function saveAsCsv() {
    var data_file = toRaw(state_order.data_order)
    var data_file_byte = ''
    for (const iterator of data_file) {
        for (const key in iterator) {
            data_file_byte += iterator[key] + ','
        }
        data_file_byte = data_file_byte.slice(0, -1)
        data_file_byte += '\r\n'
    }
    const data = new Blob([data_file_byte], { type: 'text/csv' });
    const url = window.URL.createObjectURL(data);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'order_data.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

</script>

<style scoped></style>