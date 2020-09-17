<template>
  <footer class="row">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <router-link to="/" tag="li">
            <a class="nav-link">
              home
              <span class="sr-only">(current)</span>
            </a>
          </router-link>
          <router-link to="/about" tag="li">
            <a class="nav-link">
              about
              <span class="sr-only">(current)</span>
            </a>
          </router-link>
          <router-link to="/admin" tag="li">
            <a class="nav-link">
              admin
              <span class="sr-only">(current)</span>
            </a>
          </router-link>
        </ul>
      </div>
    </nav>
  </footer>
</template>
