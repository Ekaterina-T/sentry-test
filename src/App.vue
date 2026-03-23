<template>
  <div id="app">
    <nav class="navigation">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script setup lang="ts">
// Router components are automatically available
</script>

<style>
#app {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.navigation {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-bottom: 30px;
  padding: 15px;
  background-color: #f5f5f5;
  border-radius: 8px;
}

.navigation a {
  text-decoration: none;
  color: #42b983;
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.navigation a:hover {
  background-color: #e0e0e0;
}

.navigation a.router-link-active {
  background-color: #42b983;
  color: white;
}

h1 {
  text-align: center;
  color: #42b983;
  margin-bottom: 30px;
}
</style>
