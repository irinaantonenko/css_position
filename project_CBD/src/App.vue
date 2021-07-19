<template>
  <div id="app">
    <HeaderPage/>
    <router-view/>
    <FooterPage/>
  </div>
</template>

<script>
import FooterPage from './components/FooterPage'
import HeaderPage from './components/HeaderPage'


export default {
  name: 'App',
  components: {
    HeaderPage,
    FooterPage
  }
}
</script>

<style>
</style>
