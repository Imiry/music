<template>
  <div id="app">
    <MainHeader></MainHeader>
    <Tabbar></Tabbar>
    <router-view></router-view>
  </div>
</template>
<script>
import MainHeader from './components/MainHeader'
import Tabbar from './components/Tabbar'
export default {
  name: 'App',
  components: {
    MainHeader,
    Tabbar
  }
}
</script>
<style  lang="scss">

</style>
