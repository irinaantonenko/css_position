<template>
    <section class="aboutpage">
        <div class="container aboutpage__container">
            <div class="aboutpage__item">
                <div class="aboutpage__content">
                    <h2 class="aboutpage__title">Hello, I’m Doctor Roberts</h2>
                    <p class="aboutpage__subtitle">Expert Clinical Psychologist in Manhattan</p>
                    <p class="aboutpage__text">Glad to see you on my website!I am a practicing certified Gestalt therapist. I have been practicing private psychotherapy since 2011, specializing in individual consultations, leading groups and seminars. I am married and have two children.</p>
                    <p class="aboutpage__text">Frankly, I wonder how life, making intricate zigzags, led me to psychology. How is it possible to enter psychology after graduating from the Mining Academy (engineer) and the State University (finance and credit), having worked in a bank for 12 years in an organizational position - to get into psychology?</p>
                    <p class="aboutpage__text">And I got into it thanks to my children. The first time I met with therapy was when my husband and I adopted our first child, our eldest son. I did not know what to do and how to behave with him! I needed support. Advice, recommendation, how to me (or rather my husband and I) to build a close relationship with him. I began to look for a solution and by chance (I now know that there are no coincidences) I got a specialization in child-parent relations, where I received my first psychological education.</p>
                    <p class="aboutpage__text">Then there were 7 long years of therapy training at MGI (Moscow Gestalt Institute), continued her studies at the French Gestalt Therapy Institute. Of course, let's get acquainted! Many additional specializations, intensives, seminars, conferences and, of course, your own personal therapy. Deep and diverse education makes me a high-level specialist.
                    One of the highlights of my experience as a psychotherapist is working as a military psychologist in the unit. Daily work with soldiers and officers and elaboration of everything they experience during the service.
                    </p>
                    <p class="aboutpage__text">Many thanks to my military leaders for their support and help, because the call of 600 people is another test for a psychologist for strength.My family and I have moved to other countries more than once and returned to Ukraine, practiced abroad. There were many adventures and trials. My family and personal therapist helped me in living and recognizing my emotions and feelings.The adoption of the second child, a daughter, with an already practically formed psyche (she was already 3 years old at that time) - again raised many feelings, and again hours and hours of personal therapy!</p>
                    <p class="aboutpage__text">Oh yeah! Therapy! This is where I invite you! I know exactly from personal experience and many years of training how to work with requests for interpersonal relationships and adaptation, I can help to deal with difficult conditions, feel personal boundaries, feel what happens to you when you are overwhelmed by anxious and incomprehensible states. We will touch your soul and body!</p>

                </div>
            </div>
            <div class="aboutpage__item aboutpage__item--grid">
                <div class="aboutpage__wrap">
                    <img class="aboutpage__image" src="./../assets/images/about1.jpg" alt="about_image">
                </div>
                <div class="aboutpage__wrap">
                    <img class="aboutpage__image" src="./../assets/images/about2.jpg" alt="about_image">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    
}
</script>
<style lang="scss">
@import '../css/variables.scss';
.aboutpage {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%; 
    height: 100%;
    padding: 50px 0;
    &__container {
        display: flex;
        flex-direction: row;
        @media (max-width:$sm) {
            flex-direction: column;
        }
    }
    &__item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 50%;
        @media (max-width:$sm) {
            width: 100%;
        }
        &--grid {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            grid-template-rows: repeat(2, 1fr);
        }
    }
    &__content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 20px 20px 20px 0;
    }
    &__title {
        font-size: 36px;
        font-weight: bold;
        font-style: normal;
        color: $color3;
        letter-spacing: 1px;
        padding-bottom: 20px;
        line-height: 40px;
    }
    &__subtitle {
        font-size: 20px;
        font-weight: bold;
        font-style: italic;
        color: $color5;
        padding-bottom: 20px;
        line-height: 24px;
        @media (max-width:$sm){
            color:$color2;
        }
    }
    &__text{
        font-size: 20px;
        font-weight: 400;
        line-height: 24px;
        font-style: normal;
        color: $color6;
        padding-bottom: 20px;
        @media (max-width:$sm){
            color:$color3;
        }
    }
    &__wrap {
        position: relative;
    }
    &__image {
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        object-fit: cover;
        object-position: center;
    }
}    
</style>
