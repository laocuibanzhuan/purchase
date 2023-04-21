<template>
    <div class="chartsContainer">
        <div class="item sales">
            <div>
                <span>销售额:</span>
                <h1>{{ state_sales.data_simple?.sales }}</h1>
            </div>
            <div>
                <span>今日销售:</span>
                <h1>{{ state_sales.data_simple?.today_sales }}</h1>
            </div>
        </div>
        <div class="item visits">
            <div>
                <span>访问量:</span>
                <h1>
                    {{ state_sales.data_simple?.today_sales }}
                </h1>
            </div>
            <div>
                <span>今日访问:</span>
                <h1>{{ state_sales.data_simple?.today_visits }}</h1>
            </div>
        </div>
        <div class="item orders">
            <div>
                <span>订单数:</span>
                <h1>{{ state_sales.data_simple?.orders }}</h1>
            </div>
            <div>
                <span>今日订单:</span>
                <h1>{{ state_sales.data_simple?.today_orders }}</h1>
            </div>
        </div>
        <div class="item join">
            <div>
                <span>商家数量:</span>
                <h1>{{ state_sales.data_simple?.joined }}</h1>
            </div>
            <div>
                <span>今日加入:</span>
                <h1>{{ state_sales.data_simple?.today_join }}</h1>
            </div>
        </div>
        <div class="item chart-sales">
            <chart_sales v-if="state_sales.data_sales" :data="state_sales.data_sales" />
        </div>
        <div class="item chart-category">
            <chart_category v-if="state_sales.data_category" :data="state_sales.data_category" />
        </div>
        <div class="item chart_orders">
            <chart_orders v-if="state_sales.data_orders" :data="state_sales.data_orders" />
        </div>
        <div class="item hot_product">
            <div>
                <span>今日热销:</span>
                <h1>{{ state_sales.data_simple?.hot_product }}</h1>
            </div>
        </div>
        <div class="item hot_adv">
            <div>
                <span>最优广告:</span>
                <h1>{{ state_sales.data_simple?.hot_adv }}</h1>
            </div>
        </div>
    </div>
</template>

<script setup>
import { sales } from '@/pinia/sales';
import chart_sales from './sales.vue'
import chart_category from './category.vue'
import chart_orders from './order.vue'


const state_sales = sales()


state_sales.get_simple()
state_sales.get_sales()
state_sales.get_category()
state_sales.get_orders()

</script>

<style scoped lang="scss">
.chartsContainer {
    height: 670px;
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    grid-template-areas:
        'a b c d'
        'e e f f'
        'e e f f'
        'g g h i';

    div.item {
        border-radius: 10px;
        padding: 20px;
        background-color: rgb(243, 240, 235);

        div {
            height: 60px;
        }

        span {
            font-size: small;
        }

        h1 {
            font-size: large;
            text-align: center;
        }
    }

    .chart-sales {
        grid-area: e;
    }

    .chart-category {
        grid-area: f;
    }

    .chart_orders {
        grid-area: g;
    }
}
</style>