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
                            <h4 class="about__subtitle">Expert Clinical Psychologist in Manhattan</h4>
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
                <h4 class="certificates__subtitle">Jane Roberts is highly verified and certificated practicing psychologist</h4>
                <VueSlickCarousel v-bind="settings1" :style="{height: '150px'}">
                    <certificates-item v-for="(verification, n) in verifications"
                    :key="n"
                    :verification = "verification"/>
                </VueSlickCarousel>
            </div>
        </div>
        <div class="services">
            <div class="container services__container">
                <div class="services__item">
                    <img src="./../assets/images/therapy1.jpg" alt="therapy" class="services__image">
                </div>
                <div class="services__item">
                    <img src="./../assets/images/therapy2.jpg" alt="therapy" class="services__image">
                </div>
                <div class="services__item">
                    <img src="./../assets/images/therapy3.jpg" alt="therapy" class="services__image">
                </div>
                <div class="services__item">
                    <div class="services__content">
                        <div class="services__block">
                            <div class="services__icon">
                                <span class="icon icon-power"></span>
                            </div>
                            <h3 class="services__title">Stress Management</h3>
                        </div>
                        <p class="services__text">
                            {{'The symptoms of stress are very different and depend on both the circumstances and the characteristics of the care itself. Serious traumatic events can cause acute stress disorder.' | truncate(200, '...')}}
                        </p>
                        <a href="/my_project/project_CBD/index.html#/servicespage" class="button">Read more</a>
                    </div>
                </div>
                <div class="services__item">
                    <div class="services__content">
                        <div class="services__block">
                            <div class="services__icon"><span class="icon icon-sad"></span></div>
                            <h3 class="services__title">
                                Depression
                            </h3>
                        </div>
                        <p class="services__text">
                            {{'Depression is a common mental health problem. Their prevalence in adults is about 12%, in children and youth - about 4-8%.' | truncate(200, '...')}}
                        </p>
                        <a href="/my_project/project_CBD/index.html#/servicespage" class="button">Read more</a>
                    </div>
                </div>
                <div class="services__item">
                    <div class="services__content">
                        <div class="services__block">
                            <div class="services__icon"><span class="icon icon-heart-broken"></span></div>
                            <h3 class="services__title">
                                Relationships
                            </h3>
                        </div>
                        <p class="services__text">
                            {{'There are a number of problems that hinder the normal development of the family: low income; low material level, lack of free time, poor living conditions, unsettled life, difficulties related to the birth and upbringing of children, etc.' | truncate(200, '...')}}
                        </p>
                        <a href="/my_project/project_CBD/index.html#/servicespage" class="button">Read more</a>
                    </div>
                </div>
                <div class="services__item">
                    <div class="services__content">
                        <div class="services__block">
                            <div class="services__icon"><span class="icon icon-bullhorn"></span></div>
                            <h3 class="services__title">
                                Anxiety
                            </h3>
                        </div>
                        <p class="services__text">
                            {{'Anxiety is a vague, long-lasting and vague fear about future events. It occurs in situations where there is not (and may not be) a real danger to man, but he is waiting for it, and does not yet know how to deal with it. According to some researchers, anxiety is a combination of several emotions - fear, sadness, shame and guilt.' | truncate(200, '...')}}
                        </p>
                        <a href="/my_project/project_CBD/index.html#/servicespage" class="button">Read more</a>
                    </div>
                </div>
                <div class="services__item">
                    <div class="services__content">
                        <div class="services__block">
                            <div class="services__icon"><span class="icon icon-bubbles4"></span></div>
                            <h3 class="services__title">
                                Executive Coaching
                            </h3>
                        </div>
                        <p class="services__text">
                            {{'The coach helps the leader understand their current competencies, see how they’re perceived by others, and focus on identifying and clarifying current goals as well as the appropriate action steps to reach those goals.' | truncate(200, '...')}}
                        </p>
                        <a href="/my_project/project_CBD/index.html#/servicespage" class="button">Read more</a>
                    </div>
                </div>
                <div class="services__item">
                    <div class="services__content">
                        <div class="services__block">
                            <div class="services__icon"><span class="icon icon-users"></span></div>
                            <h3 class="services__title">
                                Support Group
                            </h3>
                        </div>
                        <p class="services__text">
                            {{'Psychotherapeutic groups are small temporary associations of people led by a psychologist or social worker, who have a common network of interpersonal research, personal growth and self-disclosure. These groups, in which there is a holistic deep development of personality and self-actualization of a healthy person, accelerates the process of mental maturation.' | truncate(200, '...')}}
                        </p>
                        <a href="/my_project/project_CBD/index.html#/servicespage" class="button">Read more</a>
                    </div>
                </div>
            </div>
        </div>
        <contacts-item/>
        
    </section>
</template>
<script>
import HomeItem from './components-for-pages/HomeItem.vue'
import CertificatesItem from './components-for-pages/CertificatesItem.vue'
import ContactsItem from './components-for-pages/ContactsItem.vue'
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
                dots: false,
                infinite: true,
                slidesToShow: 5,
                slidesToScroll: 1,
                autoplay: true,
                speed: 2500,
                autoplaySpeed: 2000,
                vertical: false,
                pauseOnDotsHover: true,
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
        document.documentElement.clientWidth > 900 ? 5 : 3;        
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
        CertificatesItem,
        ContactsItem
    },   
}
</script>
<style lang="scss">
@import '../css/variables.scss';
@import '../assets/icomoon/style.css';
.home {
   width: 100%; 
   min-height: calc(100vh - 6.25em); 
   height: 100%;
   @media (min-width:$lg) {
       min-height: calc(100vh - 12.5em);
   }
}
.slick-slider[data-v-3d1a4f76]{
   height: calc(100vh - 6.25em);
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
    @media (max-width: $xs) {
        z-index: 0;
    }
}
.slick-dots {
    bottom: 10px;
}
.slick-dots li button {
    bottom: 10px;
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
.services {
    background-color: $main_color;
    padding: 50px 0;
    @media (max-width: $xs) {
        margin-top: 200px;
    }
    &__container {
    display: grid;
    grid-template-columns: repeat(3, 0.5fr);
    grid-template-rows: repeat(3, 0.5fr);
    gap: 50px;
    @media (max-width: $sm) {
        grid-template-columns: repeat(1, 1fr);
        }
    }
    &__item {
        position: relative;
    }
    &__image {
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        object-fit: cover;
        object-position: center;
    }
    &__content {
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    &__block{
        display: flex;
        justify-content: center;
        flex-direction: row;
        align-items: center;
    }
    &__icon {
        width: 50px;
        height: 50px;
        border-width: 0px;
        border-radius: 50%;
        background-color: $color2;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    &__title {
        padding-left: 20px;
        color: $color3;
    }
    &__text {
        font-size: 18px;
        font-weight: 400;
        line-height: 24px;
        font-style: normal;
        color: $color3;
        padding: 20px 0;
    }
}
.icon {
    font-size: 20px;
    line-height: 55px;
    color: $color3;    
}
</style>