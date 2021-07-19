<template>
    <section class="contactspage">
        <div class="container">
            <h2 class="contactspage__title">Get in Touch</h2>
            <h3 class="contactspage__subtitle">Jane Roberts is heighly verified and certificated practicing psychologist</h3>     
        </div>
        <Map/>
        <contacts-item/>
    </section>
</template>
<script>
import ContactsItem from './components-for-pages/ContactsItem.vue'
import Map from './components-for-pages/Map.vue';

export default {
  components: {
    ContactsItem,
    Map
  },
};
</script>
<style lang="scss">
@import '../css/variables.scss';
.contactspage {
    padding-top: 50px;
    &__title {
        font-size: 36px;
        font-weight: bold;
        font-style: normal;
        color: $color3;
        letter-spacing: 1px;
        padding-bottom: 20px;
        line-height: 40px;
        text-align: center;
    }
    &__subtitle {
        font-size: 20px;
        font-weight: bold;
        font-style: italic;
        color: $color5;
        padding-bottom: 20px;
        line-height: 24px;
        text-align: center;
    }
}
</style>