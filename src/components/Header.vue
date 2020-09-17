<template>
  <header class="row">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">PIZZA PLANNET</a>
      <ul class="navbar-nav mr-auto">
        <router-link :to="{ name: 'homeLink' }" tag="li">
          <a class="nav-link">
            home
            <span class="sr-only">(current)</span>
          </a>
        </router-link>
        <router-link :to="{ name: 'menuLink' }">
          <a class="nav-link">
            menu
            <span class="sr-only">(current)</span>
          </a>
        </router-link>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {

};
</script>

<style scoped>
header {
  margin-bottom: 20px;
}

.navbar-brand {
  font-size: 1.5em;
}
</style>
