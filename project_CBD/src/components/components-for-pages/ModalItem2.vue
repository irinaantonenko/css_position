<template>
    <div class="modal" @click="close">
        <div class="modal__content" @click.stop>
            <section class="modal__body">
                <slot name="header">
                    <button type="button" class="modal__close" @click="close"><span class="icon-cross"></span>
                    </button>
                </slot>
                <slot name="body">
                    <div class="modal__item">
                        <img src="" alt="">
                    </div>
                    <div class="modal__item">
                        <img src="" alt="">
                    </div>
                </slot>
            </section>
        </div>
    </div>
</template>
<script>
  export default {
    methods: {
        close() {
            this.$emit('close');
        },
    },
  };
</script>

<style lang="scss">
@import '../../css/variables.scss';
.modal {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    @media (max-width:$sm) {
            background-color: transparent;
        }    
    &__content {
        background: $color2;
        box-shadow: 2px 2px 20px 1px;
        display: flex;
        flex-direction: column; 
        width: 100%;
        max-width: 600px;
        height: 20vh;
        position: relative;
        min-height: 400px;
        z-index: 5;  
        @media (max-width:$lg) {
            position: fixed;
        }   
        @media (max-width:$xs) {
            max-width: 400px;
        } 
        @media (max-width:$xxs) {
            max-width: 250px;
        }          
    }
    &__header{
        padding: 15px;
        display: flex;
        background-color: $color5;
        color: $color2;
        justify-content: center;
        display: flex;
        align-items: center;
    }
    &__close {
        border: none;
        padding: 20px;
        cursor: pointer;
        font-weight: bold;
        color: $color2;
        background: transparent;
        position:absolute;
        top: 0.5rem;
        right: 0.5rem;
        @media (max-width:$xs) {
            top: 0;
            right: 0; 
            padding: 10px;
        }
    }
    &__body {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px 0;
        background-color: $main_color;
    }
}
</style>