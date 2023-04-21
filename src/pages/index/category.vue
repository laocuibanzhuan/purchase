<template>
    <div id="chartCategory"></div>
</template>

<script setup>
import { onMounted } from 'vue'
import * as echarts from 'echarts';


const data = defineProps(['data'])


onMounted(() => {
    var chartDom = document.getElementById('chartCategory');
    var myChart = echarts.init(chartDom);
    var option;
    option = {
        title: {
            text: '各大类销售比例',
            subtext: 'Fake Data',
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'left'
        },
        series: [
            {
                type: 'pie',
                radius: '60%',
                data: data.data,
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    myChart.setOption(option);
})

</script>

<style scoped>
#chartCategory{
    height: 290px;
    width: 100%;
}
</style>