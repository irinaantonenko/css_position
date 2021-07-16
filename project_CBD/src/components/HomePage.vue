<template>
    <section class="home">
        <VueSlickCarousel v-bind="settings">
            <home-item v-for="(main, j) in mains"
            :key="j"
            :main = "main"/>
        </VueSlickCarousel>
        <div class="about">
            <div class="about__background">
                <div class="container about__container">                    
                    <div class="about__item">
                        <div class="about__content">
                            <h2 class="about__title">Hello, I’m Doctor Roberts</h2>
                            <h3 class="about__subtitle">Expert Clinical Psychologist in Manhattan</h3>
                            <p class="about__text">Glad to see you on my website!
                                I am a practicing certified Gestalt therapist. I have been practicing psychotherapy since 2011, specializing in individual consultations, leading groups and seminars.
                            </p>
                            <p class="about__text">Oh yeah! Therapy! This is where I invite you! I know exactly from personal experience and many years of training how to work with requests for interpersonal relationships and adaptation, I can help to deal with difficult conditions, feel personal boundaries, feel what happens to you when you are overwhelmed by anxious and incomprehensible states. We will touch your soul and body!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="certificates">
            <div class="container">
                <h2 class="certificates__title">Certificates &amp; Verifications</h2>
                <h3 class="certificates__subtitle">Jane Roberts is highly verified and certificated practicing psychologist</h3>
                <VueSlickCarousel v-bind="settings1" :style="{height: '150px'}">
                    <certificates-item v-for="(verification, n) in verifications"
                    :key="n"
                    :verification = "verification"/>
                </VueSlickCarousel>
            </div>
        </div>
    </section>
</template>
<script>
import HomeItem from './components-for-pages/HomeItem.vue'
import CertificatesItem from './components-for-pages/CertificatesItem.vue'
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
            verifications: [
                {
                    title: 'certificate1',
                    image: 'certificate1.jpg'
                },
                {
                    title: 'certificate2',
                    image: 'certificate2.jpg'
                },
                {
                    title: 'certificate3',
                    image: 'certificate3.jpg'
                },
                {
                    title: 'certificate4',
                    image: 'certificate4.jpg'
                },
                {
                    title: 'certificate1',
                    image: 'certificate1.jpg'
                },
                {
                    title: 'certificate3',
                    image: 'certificate3.jpg'
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
            settings1: {
                arrows: false,
                dots: true,
                infinite: true,
                slidesToShow: 5,
                slidesToScroll: 1,
                autoplay: true,
                speed: 3000,
                autoplaySpeed: 2000,
                vertical: false,
                pauseOnDotsHover: true,
                pauseOnFocus: true,
                pauseOnHover: true,
            },
        }
    },
    methods: {
        onResize() {
        this.settings1.vertical =
        document.documentElement.clientWidth > 768 ? false : true;
        this.settings1.dots =
        document.documentElement.clientWidth > 768 ? true : false;
        this.settings1.slidesToShow =
        document.documentElement.clientWidth > 768 ? 5 : 3;        
        }
    },
        created() {
        if (process.browser) {
        window.addEventListener("resize", this.onResize);
        this.onResize();
        }
    },
        beforeDestroy() {
        window.removeEventListener("resize", this.onResize);
    },
    components: {
        HomeItem,
        VueSlickCarousel,
        CertificatesItem
    },   
}
</script>
<style lang="scss">
@import '../css/variables.scss';
.home {
   width: 100%; 
   min-height: calc(100vh - 100px); 
   height: 100%;
   @media (min-width:$lg) {
       min-height: calc(100vh - 200px);
   }
}
.slick-slider[data-v-3d1a4f76]{
   height: calc(100vh - 100px);
}
.slick-list[data-v-3d1a4f76], .slick-track[data-v-e4caeaf8]:after, .slick-track[data-v-e4caeaf8]:before {
    max-width: 100vw;
    width: 100%;
}
.slick-track[data-v-e4caeaf8] {
    width: 100%;    
}
.slick-prev {
    left: 30px;
    z-index: 99;
    @media (max-width: $xs){
        left: 10px;
    }
}
.slick-next {
    right: 30px;
    @media (max-width: $xs){
        right: 10px;
    }
}
.slick-arrow{
    @media (min-width: $lg) {
    height: 150px;
    width: 150px;
    }
}
.about {
    width: 100%;
    min-height: 60vh;
    height: 100%;
    &__background{
        background-image: url("./../assets/images/about.jpg");
        background-repeat: no-repeat;
        width: 100%;
        height: 100%;
        min-height: inherit;
        object-fit: cover;
        object-position: left; 
        background-size: 100%;
        @media (max-width:$sm) {
           background-image: none;
           background: $main_color;
        }
    }
    &__container {
        display: flex;
        align-items: center;
        min-height: inherit;
    }
    &__item {
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        @media (max-width:$md) {
            width: 70%;
        }
        @media (max-width:$sm) {
           width: 100%;
        }
    }
    &__content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        padding: 20px 20px 20px 0;
    }
    &__title {
        font-size: 36px;
        font-weight: bold;
        font-style: normal;
        color: $color3;
        letter-spacing: 1px;
        padding-bottom: 20px;
        line-height: 40px;
    }
    &__subtitle {
        font-size: 20px;
        font-weight: bold;
        font-style: italic;
        color: $color5;
        padding-bottom: 20px;
        line-height: 24px;
        @media (max-width:$sm){
            color:$color2;
        }
    }
    &__text{
        font-size: 20px;
        font-weight: 400;
        line-height: 24px;
        font-style: normal;
        color: $color6;
        padding-bottom: 20px;
        @media (max-width:$sm){
            color:$color3;
        }
    }
}
.certificates {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 50px;
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