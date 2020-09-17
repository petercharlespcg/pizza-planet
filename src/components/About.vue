<template>
  <div>
    <p>Click on the links beow for more info:</p>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <router-link to="/history" tag="li">
            <a class="nav-link">
              our history
              <span class="sr-only">(current)</span>
            </a>
          </router-link>
          <router-link to="/contact" tag="li">
            <a class="nav-link">
              contact us
              <span class="sr-only">(current)</span>
            </a>
          </router-link>
                    <router-link to="/ordering-guide" tag="li">
            <a class="nav-link">
              Ordering Guide
              <span class="sr-only">(current)</span>
            </a>
          </router-link>
                    <router-link to="/delivery" tag="li">
            <a class="nav-link">
              delivery
              <span class="sr-only">(current)</span>
            </a>
          </router-link>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>
