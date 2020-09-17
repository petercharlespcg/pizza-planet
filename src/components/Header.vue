<template>
  <header class="row">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">PIZZA PLANNET</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link to="/">
          <a class="nav-link">home <span class="sr-only">(current)</span></a>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/menu">
          <a class="nav-link">menu <span class="sr-only">(current)</span></a>
        </router-link>
      </li>
    </ul>
  </div>
</nav>
  </header>
</template>

<style scoped>
  header {
    margin-bottom: 20px;
  }

  .navbar-brand {
    font-size: 1.5em;
  }
</style>
