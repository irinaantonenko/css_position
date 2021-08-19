<template>
    <div class="modal modal--services" @click="close">
        <slot class="modal__content" @click.stop>           
            <button type="button" class="modal2__close" @click="close"><span class="icon-cross"></span>
             </button>              
        </slot>
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
.modal{    
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index: 3;
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
}