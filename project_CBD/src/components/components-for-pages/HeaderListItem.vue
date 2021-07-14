<template>
        <li class="list__item"><router-link :to="link.link" class="link" target="blank">{{ link.title }}</router-link></li>
</template>
<script>
export default {   
    props: ['link'],
}
</script>
<style lang="scss">
@import '../../css/variables.scss';
.router-link-exact-active{
    color: $color2;    
    font-weight: 700;
}
</style>