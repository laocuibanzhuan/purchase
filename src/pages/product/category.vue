<template>
    <div class="category-container">
        <div class="tree" v-if="state_product.data_category">
            <el-tree :data="state_product.data_category" default-expand-all node-key="id"
                @node-click="showModified" />
        </div>
        <div class="optionExist" v-if="optionExist">
            <el-card shadow="always" :body-style="{ padding: '20px' }">
                <el-form>
                    <el-form-item label="类名">
                        <el-input v-model="category_Data.label" @blur="changeLabel"></el-input>
                    </el-form-item>
                    <el-form-item label="子类" v-if="category_Data.children?.length">
                        <el-button size="small" v-for="(item, index) in category_Data.children" :key="index">{{ item.label
                        }}</el-button>
                    </el-form-item>
                    <el-button size="default" @click="showAdd">添加子类</el-button>
                    <el-button size="default" @click="delete_">删除此类</el-button>
                </el-form>
                <el-form v-if="addExist" style="margin-top: 20px;">
                    <el-form-item>
                        <el-input v-model="addChildrenData"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button @click="add">添加</el-button>
                        <el-button @click="cancel">取消</el-button>
                    </el-form-item>
                </el-form>
            </el-card>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, toRaw } from 'vue'
import { product } from '@/pinia/product.js'


const optionExist = ref(false)
const addExist = ref(false)
const state_product = product()
const addChildrenData = ref('')
var arrayCategory = []
const category_Data = reactive({
    id: undefined,
    label: undefined,
    children: undefined
})


state_product.get_category()
function resetData() {
    Object.assign(category_Data, {
        id: undefined,
        label: undefined,
        children: undefined
    })
}
function showModified(params) {
    resetData()
    optionExist.value = true
    Object.assign(category_Data, params)
}
function showAdd() {
    addExist.value = true
}
function treeToArray(data, result = [], pid = 0) {
    for (const item of data) {
        result.push({ 'id': item.id, 'label': item.label, 'pid': pid })
        if (item.children.length) {
            treeToArray(item.children, result, item.id)
        }
    }
    return result
}
function arrayToTree(list, result = [], pid = 0) {
    var item_ = {}
    for (const item of list) {
        if (item.pid == pid) {
            item_ = {
                'id': item.id,
                'label': item.label,
                'children': []
            }
            result.push(item_)
            arrayToTree(list, item_.children, item_.id)
        }
    }
    return result
}
function changeLabel() {
    arrayCategory = treeToArray(toRaw(state_product.data_category))
    for (let index = 0; index < arrayCategory.length; index++) {
        if (category_Data.id == arrayCategory[index].id) {
            arrayCategory[index].label = category_Data.label
            break
        }
    }
    submit()
}
function add() {
    arrayCategory = treeToArray(toRaw(state_product.data_category))
    arrayCategory.push({
        id: Math.floor(Math.random() * 1000),
        label: addChildrenData.value || 'undefined',
        pid: category_Data.id
    })
    Object.assign(state_product.data_category, arrayToTree(arrayCategory))
    addChildrenData.value = ''
    submit()
};
function delete_() {
    optionExist.value = false
    addExist.value = false
    arrayCategory = treeToArray(toRaw(state_product.data_category))
    for (let index = 0; index < arrayCategory.length; index++) {
        if (category_Data.id == arrayCategory[index].id) {
            arrayCategory.splice(index, 1)
            break
        }
    }
    submit()
}
function cancel() {
    addExist.value = false
    optionExist.value = false
    resetData()
}
function submit() {
    var treeCategory = arrayToTree(arrayCategory)
    state_product.modified_category(treeCategory)
}

</script>

<style scoped>
.category-container {
    display: flex;
    overflow: hidden;
}

.tree {
    width: 300px;
}

.optionExist {
    flex: 1;
}
</style>