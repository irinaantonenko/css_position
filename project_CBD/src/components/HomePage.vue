<template>
    <section class="home">
        <VueSlickCarousel v-bind="settings">
            <home-item v-for="(main, j) in mains"
            :key="j"
            :main = "main"/>
        </VueSlickCarousel>
    </section>
</template>
<script>
import HomeItem from './components-for-pages/HomeItem.vue'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
    data: ()=>{
        return{
            mains: [
                {
                    title: 'Think Positive',
                    subtitle: 'Attitude is Everything',
                    image: 'main2.jpg'
                },
                {
                    title: 'Experiencing',
                    subtitle: 'Relationship Problems?',
                    image: 'main3.jpg'
                },
                {
                    title: 'Happy Family',
                    subtitle: 'Impossible Without Trust',
                    image: 'main1.jpg'
                },
            ],
            settings: {
                lazyLoad: "ondemand",
                fade: true,
                infinite: true,
                speed: 1500,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
               
            },
        }
    },
    components: {
        HomeItem,
        VueSlickCarousel
    },   
}
</script>
<style lang="scss">
@import '../css/variables.scss';
.home, .slick-slider[data-v-3d1a4f76], .slick-list[data-v-3d1a4f76], .slick-track[data-v-e4caeaf8] {
   width: 100%; 
   min-height: calc(100vh - 100px); 
   height: 100%;
   @media (min-width:$lg) {
       min-height: calc(100vh - 200px);
   }
}
.slick-track[data-v-e4caeaf8]:after, .slick-track[data-v-e4caeaf8]:before {
    width: 100vw;
}
.slick-prev {
    left: 30px;
    z-index: 99;
}
.slick-next {
    right: 30px;
}
.slick-arrow{
    @media (min-width: $lg) {
    height: 150px;
    width: 150px;
    }
}
</style>