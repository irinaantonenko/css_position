<template>
    <section class="about">
        <div class="container">
            <div class="about__item">
                <div class="about__content">
                    <h2 class="h2 about__title">Hello, I’m Doctor Roberts</h2>
                    <p class="about__subtitle">Expert Clinical Psychologist in Manhattan</p>
                    <p class="about__text">Lorem Ipsum is simply text of the Lorem Ipsum is  simply my text of the printing and Ipsum is simply text of the Ipsum is simply text of thetypesetting Ipsum is simply text of the stry simply dummy text of the printing and typesetting industry.  Lorem Ipsum is simply text of the Lorem Ipsum is  simply my text of the printing and Ipsum is simply text of the Ipsum is simply text of thetypesetting Ipsum is simply text.</p>
                </div>
            </div>
            <div class="about__item">
                <img class="about__image" src="./../assets/images/about1.jpg" alt="about_image">
            </div>
        </div>
    </section>
</template>

<script>
export default {
    
}
</script>
<style lang="scss">
    .about {
        width: 100%;
        height: calc(100vh - 100px);
        &__item {
            width: 50%;
            height: 100%;
            min-height: calc(100vh - 100px);
        }
        &__image{
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
        }
        &__content {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
        }
        &__title {
            font-size: 36px;
            font-weight: bold;
            font-style: normal;
        }
    }
</style>