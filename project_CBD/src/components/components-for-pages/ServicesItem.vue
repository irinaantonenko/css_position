<template>
    <div class="servicespage__item">
        <div class="servicespage__wrap">
            <img :src="require('./../../assets/images/' + therapy.image)" :alt="therapy.title">
        </div>
        <h4 class="servicespage__title">{{therapy.title}}</h4>
        <h5 class="servicespage__subtitle">{{therapy.subtitle}}</h5>
    </div>    
</template>
<script>
export default {   
    props: ['therapy'],
}
</script>
<style lang="scss">
@import '../../css/variables.scss';
.servicespage {
    &__item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        justify-content: space-around;
        width:100%;
        height: 100%;
        padding: 0;
        transform: scale(1,1);
        transition-timing-function: ease-out;
        transition-duration: 550ms;
        @media (min-width:$md) {
            &:hover {
            transform: scale(1.2,1.2);
            transition-timing-function: ease-out;
            transition-duration: 550ms;
            }
        }
    }
    &__wrap {
        position: relative;
        width: 100%;
    }
    &__image{
        position:absolute;
        z-index: 1;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: center;
    }
}
</style>