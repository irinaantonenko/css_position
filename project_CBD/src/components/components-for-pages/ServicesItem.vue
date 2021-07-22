<template>
    <div class="servicespage__item">
        <div class="servicespage__wrap">
            <img class="servicespage__image" :src="require('./../../assets/images/' + therapy.image)" :alt="therapy.title">
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
        width: 100%;
    }
    &__wrap {
        position: relative;
        width: 100%;
    }
    &__image{
        top: 0;
        height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: center;
    }
}
</style>