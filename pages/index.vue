<template>
  <div style="max-width: 600px; margin: 80px auto; font-family: sans-serif; text-align: center;">
    <h1>Nuxt Test App</h1>
    <p>Server-rendered at: {{ renderedAt }}</p>
    <p>Count: {{ count }}</p>
    <button @click="count++">Increment</button>
    <NuxtLink to="/about" style="display: block; margin-top: 20px;">About page</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const count = ref(0)
const renderedAt = new Date().toISOString()
</script>
