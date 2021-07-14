<template>
    <div class="home__item">
        <img class="home__image" :src="require('./../../assets/images/' + main.image)" :alt="main.title">
        <div class="home__content">
            <h1 class="h1 home__title">{{main.title}}</h1>
            <h2 class="h2 home__subtitle">{{main.subtitle}}</h2>
        </div>
    </div>
</template>
<script>
export default {   
    props: ['main'],
}
</script>
<style lang="scss">
@import '../../css/variables.scss';
.home {
    &__item{ 
        width: 100%;
        height: calc(100vh - 100px);
    }
    &__image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        top: 0;
        left: 0;
        z-index: 1;
        @media (max-width:$sm) {
            object-fit: cover;
            object-position: right;
        }
        @media (max-width:$xs) {
            object-fit: cover;
            object-position: right;
        }
    }
    &__content{
        position: absolute;
        z-index: 2;
        top: 40%;
        left: 20%;
        color: #dddddf;
        font-size: 36px;
        @media (min-width:$xl) {
            font-size: 86px;
        }
        @media (min-width:$lg) {
            font-size: 56px;
        }
        @media (max-width:$sm) {
           top: 50%;
           left: 40%;
           font-size: 26px;
        }
        @media (max-width:$xs) {
           top: 50%;
           left: 30%;
           font-size: 26px;
        }
        @media (max-width:$xxs) {
           top: 40%;
           left: 15%;
           font-size: 14px;
        }
    }
    &__subtitle {
        color: $color2;
    }
}
</style>