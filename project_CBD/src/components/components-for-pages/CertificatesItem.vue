<template>
    <div class="certificate__item">
        <img class="certificate__image" :src="require('./../../assets/images/' + verification.image)" :alt="verification.title">
    </div>
</template>
<script>
export default {   
    props: ['verification'],
}
</script>
<style lang="scss">
@import '../../css/variables.scss';
.certificate {
    &__item{ 
        width: 30%;
        height: 100px;
        padding: 10px;
        border: 1px solid #e8e8e8;
        overflow: hidden;
        display: flex;
        cursor: pointer;
        @media (max-width:$sm) {
            width: 10%;
        }
    }
    &__image {
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center;
        top: 0;
        left: 0;
    }
}
</style>