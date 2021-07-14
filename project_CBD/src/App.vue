<template>
  <div id="app">
    <HeaderPage/>
    <router-view/>
  </div>
</template>

<script>
import HeaderPage from './components/HeaderPage'


export default {
  name: 'App',
  components: {
    HeaderPage
  }
}
</script>

<style>
</style>
