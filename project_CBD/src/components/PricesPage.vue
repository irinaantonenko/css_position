<template>
    <section class="prices">
        <div class="container">
            <h2 class="prices__title">Pricing Policy 2021</h2>
            <h3 class="prices__subtitle">Jane Roberts is heighly verified and certificated practicing psychologist</h3>  
            <div class="prices__container">
                <PricesItem v-for="(pricing, m) in pricings"
                :key="m"
                :pricing = "pricing"/>
            </div>
        </div>
    </section>
</template>
<script>
import PricesItem from './components-for-pages/PricesItem.vue'

export default {
    data: () => {
        return {
    pricings: [
                {
                    name: 'PERSONAL HELP',
                    value: '180',
                    time: 'per hour'
                },
                {
                    name: 'FAMILY PRACTICE',
                    value: '120',
                    time: 'per hour'
                },
                {
                    name: 'COUPLES THERAPY',
                    value: '199',
                    time: 'per hour'
                },
                {
                    name: 'GROUP THERAPY',
                    value: '50',
                    time: 'per hour'
                },
            ],
        }
    },
    components: {
        PricesItem
    }
};
</script>
<style lang="scss">
@import '../css/variables.scss';
.prices {
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 100%; 
    min-height: calc(100vh - 12.5em); 
    height: 100%;
    &__container{
        display: grid;
        grid-template-columns: repeat(4, 0.5fr);
        gap: 50px;
        width: 100%;
        padding: 20px 0;
        @media (max-width: $sm) {
        grid-template-columns: repeat(2, 0.8fr);
        }
        @media (max-width: $xs) {
        grid-template-columns: repeat(1, 1fr);
        }        
    }
    &__title {
        font-size: 36px;
        font-weight: bold;
        font-style: normal;
        color: $color3;
        letter-spacing: 1px;
        padding-bottom: 20px;
        line-height: 40px;
        text-align: center;
    }
    &__subtitle {
        font-size: 20px;
        font-weight: bold;
        font-style: italic;
        color: $color5;
        padding-bottom: 20px;
        line-height: 24px;
        text-align: center;
    }
}
</style>