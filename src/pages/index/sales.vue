<template>
    <div id="chartSales"></div>
</template>

<script setup>
import { onMounted } from 'vue'
import * as echarts from 'echarts';


const data = defineProps(['data'])


onMounted(() => {
    var chartDom = document.getElementById('chartSales');
    var myChart = echarts.init(chartDom);
    var option;
    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top:'3%',
            containLabel: true
        },
        legend: {
            data: ['a', 'b', 'c', 'd']
        },
        xAxis: [
            {
                type: 'category',
                axisTick: { show: false },
                data: ['2012', '2013', '2014', '2015', '2016']
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: data.data
    };
    myChart.setOption(option);
})

</script>

<style scoped>
#chartSales {
    height: 290px;
    width: 100%;
}
</style>