<template>
    <div @click="showModal" class="servicespage__item">
        <div class="servicespage__wrap">
            <div class="servicespage__hover"><p>Read more</p></div>
            <img class="servicespage__image" :src="require('./../../assets/images/' + therapy.image)" :alt="therapy.title">
        </div>
        <h4 class="servicespage__title servicespage__title--small">{{therapy.title}}</h4>
        <h5 class="servicespage__subtitle servicespage__subtitle--small">{{therapy.subtitle}}</h5>
        <ModalItem2
            v-show="isModalVisible"
            @close="closeModal"/>
    </div>    
</template>
<script>
import ModalItem2 from './ModalItem2';
export default {   
    props: ['therapy'],
    components: {
      ModalItem2,
    },
    data () {
      return {
        isModalVisible: false,
      };
    },
    methods: {
      showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      }
    },
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
        overflow: hidden;
        position: relative;
        width: 100%;
        cursor: pointer;
        @media (hover) {
            &:hover {
            background-color: $color2;
            opacity: 0.8;
            }
        }
    }
    &__hover {
        position:absolute; 
        visibility:hidden; 
        background: $color2;
        opacity: 0.8; 
        font-size:20px;
        color: #000;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-transform: uppercase;
        font-weight: 600;
    }
    &__wrap:hover &__hover {
        visibility: visible;
        transition: 1s;
    }
    &__wrap:hover{
        transition:0.6s;
    }
    &__image{
        top: 0;
        height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: center;
    }
    &__title--small {
        font-size: 18px;
        padding: 5px;
        cursor: pointer;
        @media (hover) {
            &:hover {
            background-color: $color2;
            opacity: 0.8;
            }
        }
    }
    &__subtitle--small {
        font-size: 16px;
        cursor: pointer;
        @media (hover) {
            &:hover {
            background-color: $color2;
            opacity: 0.8;
            }
        }
    }
}
</style>