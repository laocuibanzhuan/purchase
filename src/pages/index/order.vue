<template>
    <div id="chartOrders"></div>
</template>

<script setup>
import { onMounted } from 'vue'
import * as echarts from 'echarts';


const data = defineProps(['data'])


onMounted(() => {
    var chartDom = document.getElementById('chartOrders');
    var myChart = echarts.init(chartDom);
    var option;
    option = {
        title: {
            text: '订单数',
            left: 'center'
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top:'6%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: data.data,
                type: 'line'
            }
        ]
    };
    myChart.setOption(option);
})

</script>

<style scoped>
#chartOrders {
    height: 120px;
}
</style>