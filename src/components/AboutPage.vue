<template>
  <div class="about-page">
    <h1>About Us</h1>
    <p>
      Welcome to our about page! This is a second page in our Vue application
      with routing enabled.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat.
    </p>
    <p>
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
      eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
      sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <div class="highlight-box">
      <h2>Our Mission</h2>
      <p>
        To create amazing web applications using modern technologies like Vue.js,
        TypeScript, and Vite. We believe in clean code, great user experience,
        and continuous learning.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as Sentry from '@sentry/vue'

try {
    throw new Error("Test catched error in AboutPage.vue - not sent to Sentry");
} catch (error) {
    console.log("Caught an error in AboutPage.vue:", error);
}

try {
    throw new Error("Test catched error in AboutPage.vue - sent to Sentry");
} catch (error) {
    Sentry.captureException(error);
}
</script>

<style scoped>
.about-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  color: #42b983;
  margin-bottom: 20px;
}

p {
  line-height: 1.6;
  margin-bottom: 15px;
  color: #333;
}

.highlight-box {
  background-color: #f5f5f5;
  border-left: 4px solid #42b983;
  padding: 20px;
  margin-top: 30px;
  border-radius: 4px;
}

.highlight-box h2 {
  color: #42b983;
  margin-top: 0;
  margin-bottom: 15px;
}

.highlight-box p {
  margin-bottom: 0;
}
</style>
