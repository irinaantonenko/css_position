<template>
    <section class="servicespage">
        <div class="container">
            <h2 class="servicespage__title">Services &amp; Therapy</h2>
            <h3 class="servicespage__subtitle">Jane Roberts is heighly verified and certificated practicing psychologist</h3> 
            <div class="servicespage__container">
                <ServicesItem v-for="(therapy, j) in therapies"
                :key="j"
                :therapy = "therapy"/>
            </div>            
        </div>
    </section>
</template>
<script>
import ServicesItem from './components-for-pages/ServicesItem.vue'
export default {
    data: () => {
        return {
    therapies: [
                {
                    title: 'Anxiety Treatment',
                    subtitle: 'Group, Therapy',                    
                    image: 'therapy1.jpg'
                },
                {
                    title: 'Couples Therapy',
                    subtitle: 'Family',
                    image: 'therapy2.jpg'
                },
                {
                    title: 'Depression Therapy',
                    subtitle: 'Individual, Therapy',
                    image: 'therapy4.jpg'
                },
                {
                    title: 'Family Practice',
                    subtitle: 'Family',
                    image: 'therapy5.jpg'
                },
                {
                    title: 'Group Therapy',
                    subtitle: 'Group, Therapy',
                    image: 'therapy3.jpg'
                },
                {
                    title: 'Individual Coaching',
                    subtitle: 'Individual, Coaching',
                    image: 'therapy6.jpg'
                },
            ],
        }
    },
    components: {
        ServicesItem
    }
}
</script>
<style lang="scss">
@import '../css/variables.scss';
.servicespage {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px 0;
    &__container{
        display: grid;
        grid-template-columns: repeat(3, 0.5fr);
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
