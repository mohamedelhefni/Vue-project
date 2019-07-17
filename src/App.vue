<template>
  <div id="app">
    <nav class="nav-extended">
      <div class="nav-wrapper">
        <a href class="brand-logo">Our App</a>

        <ul id="nav-mobile" class="right">
          <router-link to="/" exact tag="li" class="nav-item">
            <a class="nav-link">Home</a>
          </router-link>
          <router-link to="/news" tag="li" class="nav-item">
            <a class="nav-link">News</a>
          </router-link>
          <router-link to="/recipes" tag="li" class="nav-item">
            <a class="nav-link">Recipes</a>
          </router-link>
          <router-link to="/weather" tag="li" class="nav-item">
            <a class="nav-link">Weather</a>
          </router-link>
          <router-link to="/about" tag="li" class="nav-item">
            <a class="nav-link">About</a>
          </router-link>
        </ul>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  components: {}
};
</script>
