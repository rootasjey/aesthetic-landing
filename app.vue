<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
useHead({
  title: 'aesthetic',
  meta: [
    { name: 'description', content: 'Make your Notion pages pop!' },
    { name: 'keywords', content: 'Notion, aesthetic, chrome extension' },
  ],
})
</script>

<style>
body {
  background-attachment: fixed;
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

.dark body {
  /* Dark mode styles */
}
</style>
