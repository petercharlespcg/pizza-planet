<template>
  <header class="row">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">PIZZA PLANNET</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <router-link :to="homeLink" tag="li">
          <a class="nav-link">home <span class="sr-only">(current)</span></a>
      </router-link>
      <router-link :to="menuLink" tag="li">
          <a class="nav-link">menu <span class="sr-only">(current)</span></a>
      </router-link>
    </ul>
  </div>
</nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      homeLink: '/',
      menuLink: '/menu',
    }
  }
}
</script>

<style scoped>
  header {
    margin-bottom: 20px;
  }

  .navbar-brand {
    font-size: 1.5em;
  }
</style>
