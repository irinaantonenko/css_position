<template>
    <div class="contacts">
            <div class="container contacts__container">
                <div class="contacts__item">
                    <span class="contacts__icon icon-location"></span>
                    <h3 class="contacts__title">VISIT ME</h3>
                    <p><a href="/#/contactspage" class="contacts__text">200 Broadway Av<br>Manhattan 5024<br>New York</a></p>
                </div>
                <div class="contacts__item">
                    <span class="contacts__icon icon-clock"></span>
                    <h3 class="contacts__title">OPEN HOURS</h3>
                    <p class="contacts__text">Mon-Fri: 10:00 – 16:00<br>Sat: 10:00 – 14:00<br>Sun: Closed</p>
                </div>
                <div class="contacts__item">
                    <span class="contacts__icon icon-bubble2"></span>
                    <h3 class="contacts__title">LET’S TALK</h3>
                    <p><a class="contacts__text" href="tel:879-332-9375">879-332-9375</a><br>
                    <a class="contacts__text" href="tel:879-332-9376">879-332-9376</a><br>
                    <a class="contacts__text" href="mailto:psycho@example.com">psycho@example.com</a></p>
                </div>
            </div>
        </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
@import '../../css/variables.scss';
@import '../../assets/icomoon/style.css';
.contacts {
    padding: 50px 0;
    &__container{
        display: grid;
        grid-template-columns: repeat(3, 0.5fr);
        gap: 50px;
        @media (max-width: $xs) {
        grid-template-columns: repeat(1, 1fr);
        }
    }
    &__item {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    &__icon {
        color:$main_color;
        font-size: 60px;
    }
    &__title {
        font-size: 22px;
        font-weight: bold;
        font-style: normal;
        color: $color3;
        letter-spacing: 1px;
        padding: 20px 0;
        line-height: 40px;
        text-align: center;
    }
    &__text{
        font-size: 20px;
        font-weight: 400;
        line-height: 24px;
        font-style: normal;
        color: $color6;
        text-decoration: none;
        &:hover {
        color:$main_color;
        }
    }
}
</style>