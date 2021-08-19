<template>
    <footer class="footer">
        <div class="container footer__container">
            <div class="footer__icons">
                <a class="footer__icon icon-instagram" href='https://www.instagram.com/' target="blank"></a>
                <a class="footer__icon icon-mail3" href="mailto:psycho@example.com" target="_blank"></a>
                <a class="footer__icon icon-whatsapp" href="https://api.whatsapp.com/send/?phone=79785060117&text&app_absent=0" target="_blank"></a>
            </div>
            <div class="footer__policy">
                <span class="footer__text">Privacy Policy &copy; 2021 /</span> 
                <span class="footer__text">All Rights Reserved</span>
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
        @media (hover) {
        &:hover {
        color:$main_color;
        }
        }
    }
    &__policy {
        @media (max-width: $xs) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        }
    }
    &__text{
       @media (max-width: $xs) {
        text-align: center;
        }
    }      
}
</style>