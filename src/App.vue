<template>
  <header>
    <div class="wrapper">
      <AppTitle msg="Tbilisi transport" />

      <nav>
        <RouterLink to="/favorites">Favorites</RouterLink>
        <RouterLink to="/routes">Routes</RouterLink>
        <RouterLink to="/stops">Stops</RouterLink>
      </nav>
    </div>
    <ThemeModeButton class="theme-mode-toggle" />
  </header>
  <main>
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import AppTitle from "./components/AppTitle.vue";
import ThemeModeButton from "@/components/ThemeModeButton.vue";
</script>

<style scoped>
header {
  display: flex;
  line-height: 1.5;
  max-height: 100vh;
}

.wrapper {
  flex: 1;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
}

.theme-mode-toggle {
  align-self: start;
  margin: 10px 0px 10px 10px;
}
</style>
