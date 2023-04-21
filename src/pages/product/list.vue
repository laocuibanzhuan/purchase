<template>
    <div v-show="!addProductShow">
        <div class="search-container">
            <el-input v-model="input" placeholder="查询名称" clearable />
            <el-button @click="search">搜索</el-button>
        </div>
        <div class="add-product">
            <el-button @click="addShow">添加产品</el-button>
        </div>
        <el-table v-if="state_product.data_product" :data="state_product.data_product" border max-height="600px">
            <el-table-column type="index" label="序号" width="60px" align="center">
            </el-table-column>
            <el-table-column prop="id" label="ID" width="60px" align="center">
            </el-table-column>
            <el-table-column prop="name" label="名称" width="80px" align="center">
            </el-table-column>
            <el-table-column prop="price" label="价格" width="60px" align="center">
            </el-table-column>
            <el-table-column prop="category" label="类别" width="60px" align="center">
            </el-table-column>
            <el-table-column prop="time" label="创建时间" align="center" width="105px">
            </el-table-column>
            <el-table-column prop="sale" label="卖点" align="center">
            </el-table-column>
            <el-table-column prop="describe" label="描述" align="center">
            </el-table-column>
            <el-table-column label="可选操作" width="200px" align="center">
                <template v-slot="{ row }">
                    <el-button style="margin: 5px" type="warning" size="small" @click="modifiedShow(row)">修改
                    </el-button>
                    <el-button style="margin: 5px" type="danger" size="small" @click="delete_(row.id)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>

    <div v-show="addProductShow">
        <el-form v-model="addProductData">
            <el-form-item label="属性名称" label-width="100px">
                <el-input placeholder="请输入属性名" clearable v-model="addProductData.name"></el-input>
            </el-form-item>
            <el-form-item label="价格" label-width="100px">
                <el-input placeholder="请输入价格" type="number" v-model="addProductData.price"></el-input>
            </el-form-item>
            <el-form-item label="产品描述" label-width="100px">
                <el-input placeholder="请输入产品描述" type="textarea" v-model="addProductData.describe"></el-input>
            </el-form-item>
            <el-form-item label="卖点" label-width="100px">
                <el-input placeholder="请输入卖点" type="textarea" v-model="addProductData.sale"></el-input>
            </el-form-item>
            <el-form-item label="所属类别" label-width="100px">
                <el-select v-model="addProductData.category" placeholder="选择类别">
                    <el-option v-for="item in [0, 1, 2, 3, 4, 5]" :key="item" :label="item" :value="item">
                    </el-option>
                </el-select>

            </el-form-item>
        </el-form>
        <el-button @click="save">保存</el-button>
        <el-button @click="cancel">取消</el-button>
    </div>
</template>

<script setup>
import { ref, reactive, toRaw } from "vue";
import { product } from '@/pinia/product.js'


const input = ref('')
const addProductShow = ref(false)
const addProductData = reactive({
    id: undefined,
    name: undefined,
    price: undefined,
    time: undefined,
    describe: undefined,
    sale: undefined,
    category: undefined
})
const state_product = product()


state_product.get_product()
function resetData() {
    addProductShow.value = false
    Object.assign(addProductData, {
        name: undefined,
        price: undefined,
        time: undefined,
        describe: undefined,
        sale: undefined,
        category: undefined
    })
}
function search() {
    state_product.search_product(input.value)
}
function addShow() {
    addProductShow.value = true
}
function add() {
    addProductData.time = new Date().toLocaleString().replaceAll('/', '-')
    state_product.add_product(toRaw(addProductData))
}
function delete_(id) {
    state_product.delete_product(id)
}
function modifiedShow(data) {
    addProductShow.value = true
    Object.assign(addProductData, data)
}
function modified(id) {
    addProductData.time = new Date().toLocaleString().replaceAll('/', '-')
    state_product.modified_product(id, toRaw(addProductData))
}
function save() {
    if (addProductData.id) {
        modified(addProductData.id)
    } else {
        add()
    }
    resetData()
}
function cancel() {
    resetData()
}

</script>

<style scoped>
.el-input {
    width: 200px;
}

.el-button {
    margin-left: 20px;
}

.search-container {
    margin-bottom: 10px;
}

.el-form {
    margin-top: 20px;
}
</style>