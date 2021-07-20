<template>
    <div class="modal" @click="close">
        <div class="modal__content" @click.stop>
            <header class="modal__header">
                <slot name="header">
                    <button type="button" class="modal__close" @click="close"><span class="icon-cross"></span>
                    </button>
                </slot>
            </header>
            <section class="modal__body">
                <slot name="body">
                </slot>
            </section>
            <footer class="modal__footer">
                <slot name="footer">
                    <button type="button" class="button button--price">Contact me</button>
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
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    &__content {
        background: #FFFFFF;
        box-shadow: 2px 2px 20px 1px;
        display: flex;
        flex-direction: column; 
        width: 100%;
        max-width: 500px;
        position: relative;
        min-height: 300px;
        z-index: 5;        
    }
    &__header{
        padding: 15px;
        display: flex;
        color: #4AAE9B;
        justify-content: space-between;
    }
    &__footer{
        padding: 15px;
        display: flex;
        justify-content: center;
    }
    &__close {
        border: none;
        padding: 20px;
        cursor: pointer;
        font-weight: bold;
        color: $main_color;
        background: transparent;
        position:absolute;
        top: 0.5rem;
        right: 0.5rem;
    }
}
</style>