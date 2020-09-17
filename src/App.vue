<template>
  <div id="app">
    <div class="container">
      <pp-header></pp-header>
    </div>
    <div class="container">
      <pp-admin></pp-admin>
    </div>
    <div class="container">
      <pp-footer></pp-footer>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Home from './components/Home.vue'
import Menu from "./components/Menu";
import Admin from './components/Admin';

export default {
  components: {
    ppHeader: Header,
    ppFooter: Footer,
    ppHome: Home,
    ppMenu: Menu,
    ppAdmin: Admin
  }
}
</script>

<style>

</style>
