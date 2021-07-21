<template>
    <div>
        <div class="prices__item">
            <div class="prices__block">
                <div class="prices__header">
                    <h3 class="prices__name">{{pricing.name}}</h3>
                    <p class="prices__value">{{'$' + pricing.value}}</p>
                    <p class="prices__time">{{pricing.time}}</p>
                </div>
                <div class="prices__content">
                    <span class="prices__text">Depression Therapy</span> 
                    <span class="prices__text">Stress Management</span> 
                    <span class="prices__text">Anxiety Treatment</span> 
                    <span class="prices__text">Individual Coaching</span> 
                    <span class="prices__text">Post-Divorce Recovery</span> 
                </div>
                <div class="prices__button">
                    <button @click="showModal" class="button button--price">Book now</button>
                </div>
            </div>        
        </div>
        <ModalItem
            v-show="isModalVisible"
            @close="closeModal"/>
    </div>    
</template> 
<script>
import ModalItem from './ModalItem';
export default {   
    props: ['pricing'],
    components: {
      ModalItem,
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
.prices {
    &__item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        height: 100%;
        padding: 0;
        border: 1px solid $main_color;
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
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
    &__block {
        display: inherit;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        width: 100%;
        height: 100%;
        position: relative;
    }
    &__header {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: $main_color;
        width: 100%;
        height: 100%;
        padding: 20px;
        color: $color3;
    }
    &__value{
        color:$color4;
        font-weight: 600;
    }
    &__content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
        padding: 20px;
        color:$color5;
    }
    &__button {
        padding: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
.button--price{
    bottom:10px;
}

</style>