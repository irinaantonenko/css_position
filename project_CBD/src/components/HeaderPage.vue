<template>
    <header class="header">
        <div class="container header__container">
            <div class="header__item"><a href="/#/homepage" target="blank"><img :src="require('./../assets/images/logo.png')"></a>
            </div>
            <div class="header__item">
                <input id="burger" type="checkbox" class="burger">
                <label for="burger" class="burger__label">
                    <span class="burger__line"></span>
                    <span class="burger__line"></span>
                    <span class="burger__line"></span>
                </label>
                <nav class="header__nav">
                    <ul class="list">
                        <header-list-item v-for="(link, i) in links"
                        :key="i"
                        :link = "link"/>
                    </ul>
                </nav>                   
            </div>
        </div>
    </header>
</template>
<script>
import HeaderListItem from './components-for-pages/HeaderListItem.vue'
export default {
    data: ()=>{
        return{
            links: [
                {
                    link: '/homepage',
                    title: 'Home'
                },
                {
                    link: '/aboutmepage',
                    title: 'About'
                },
                {
                    link: '/servicespage',
                    title: 'Services'
                },
                {
                    link: "/pricespage",
                    title: 'Prices'
                },
                {
                    link: '/contactspage',
                    title: 'Contacts'
                },

            ]
        }
    },
    components: {
        HeaderListItem
    },    
}
</script>
<style lang="scss">
@import '../css/variables.scss';
.header {
    margin: 0;
    padding: 0 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    height: 100%;
    background: $main_color;
    position: sticky; 
    left:0;         
    top:0;            
    z-index:200;
    min-height:100px;
    @media (min-width: $lg){
        min-height: 200px;
    }
    &__container{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    &__item {
    color: $color2;
    font-family: $font_family1;
    font-size: 14px;
    line-height: 20px;
    font-weight: 600;
    text-transform: uppercase;
    cursor: pointer;
    border: none;
    @media (min-width: $lg){
        font-size: 26px;
        line-height: 30px;
        }
    }
}
.list {
    margin: 0;
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: space-evenly;
    padding: 0;
    @media (max-width: $xs) {
        flex-direction: column;
    }
    &__item {
    margin: 0 15px;
    cursor: pointer;
    padding: 10px 0;
    text-decoration: none;
    :hover {
        color: $color2;
        text-decoration: none;
        }
    }
}
.link {
    width: 100%;
    margin: 0;
    text-decoration: none;
    padding: 10px;
    color: $color3;
    &__item:hover{
        color: $color2;
        text-decoration: none;
    }
}
.burger {
    display: none;
    &__label {
    display: none;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    width: 48px;
    height: 48px;
    cursor: pointer;
    }
    &__line {
    width: 80%;
    height: 3px;
    background: $color3;    
    }
}
.burger:hover{
    color:$color2;
}
.burger:checked ~ .header__nav {
    transform: translateY(50%);
    @media (max-width: $sm) {
        transform: translateY(30%);
    }
    @media (max-width: $xs) {
        transform: translateY(10%);
    }
    @media (max-width: $xxs) {
        transform: translateY(14%);
    }
}
@media (max-width: $sm) {
    .burger__label {
        display: flex;
    }
    .header__nav {
        max-height: 100vh;
        overflow: auto;
        position: absolute;
        background-color: $main_color;
        width: 100vw;
        top: 50px;
        left: 0;
        z-index: 1333;
        transform: translateY(-200%);
        transition: transform 0.3s ease;
        &__list{
        height: auto;
        overflow: auto;
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        }
    }
    .list__item {
        display: block;
        margin: 10px 0;
    }
    .link {
        padding: 5px;
        color: $color3;

    }
}
</style>
