<template>
    <div class="modal" @click="close">
        <div class="modal__content" @click.stop>
            <header class="modal__header">
                <slot name="header">
                    <h3 class="modal__title">make an appointment</h3> 
                    <button type="button" class="modal__close" @click="close"><span class="icon-cross"></span>
                    </button>
                </slot>
            </header>
            <section class="modal__body">
                <slot name="body">
                    <div class="modal__icons">
                        <a class="modal__icon icon-instagram" href='https://www.instagram.com/' target="blank"><span class="modal__text">Instagram</span></a>
                        <a class="modal__icon icon-mail3" href="mailto:psycho@example.com" target="_blank"><span class="modal__text">Gmail</span></a>
                        <a class="modal__icon icon-whatsapp" href="https://api.whatsapp.com/send/?phone=79785060117&text&app_absent=0" target="_blank"><span class="modal__text">Whatsapp</span></a>
                    </div>
                </slot>
            </section>
            <footer class="modal__footer">
                <slot name="footer">
                    <a href="tel:879-332-9375" class="button modal__button modal__icon icon-phone"><span class="modal__text">Contact me</span></a>
                </slot>
            </footer>
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
    &__footer{
        padding: 15px;
        background-color: $color4;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
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
    &__title {
        font-size: 22px;
        font-weight: bold;
        font-style: normal;
        color: $color3;
        letter-spacing: 1px;
        line-height: 40px;
        text-align: center;
        text-transform: uppercase;
    }
    &__body {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px 0;
        background-color: $main_color;
    }
    &__icons {
        display: flex;
        flex-direction: column;
    }
    &__text {
        padding-left: 15px;
        font-family: $font_family1;
    }
    &__icon {   
        margin: 5px 0;     
        font-size: 22px;
        cursor: pointer;
        text-decoration: none;
        padding: 15px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        border: 1px solid $main_color;
        color: $main_color;
        background-color: $color2;
        border-radius: 10px;
        @media (hover) {
            &:hover {
                color: $color2;
                background-color: $color3;
                transition: color .3s ease-in-out, background-color.3s ease-in-out;
            }
        }
    }
    &__button{
        bottom: 15px;
        color: $color2;
        background-color: $color3;
        @media (hover) {
            &:hover {
                background-color: $color6;
                transition: background-color .3s ease-in-out;
                box-shadow: 0 0 10px rgba(0,0,0,0.5);
            }
        }
    }
}
</style>