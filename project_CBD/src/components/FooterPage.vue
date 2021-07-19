<template>
    <footer class="footer">
        <div class="container footer__container">
            <div class="footer__icons">
                <a class="footer__icon icon-instagram" href='https://www.instagram.com/' target="blank"></a>
                <a class="footer__icon icon-mail3" href="mailto:psycho@example.com" target="_blank"></a>
                <a class="footer__icon icon-whatsapp" href="https://api.whatsapp.com/send/?phone=79785060117&text&app_absent=0" target="_blank"></a>
            </div>
            <div class="footer__policy">
                Privacy Policy &copy; 2021 / All Rights Reserved
            </div>
        </div>
    </footer>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
@import '../css/variables.scss';
@import '../assets/icomoon/style.css';
.footer {
    background-color: $color3;
    min-height: 100px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    &__container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: $color2;
    }
    &__icons {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 50px;
        padding-bottom: 20px;
    }
    &__icon {        
        font-size: 22px;
        cursor: pointer;
        color: $color2;
        text-decoration: none;
    }
    &__icon:hover {
        color:$main_color;
    }
}
</style>

</style>