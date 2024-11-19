<template>
  <div v-if="isVisible" class="fixed bottom-4 right-4 w-400px h-300px bg-#eee rounded-2xl shadow-2xl">
    <iframe src="https://www.loom.com/embed/af628c9bc6264fa08406ffaaeeaca2f6?sid=1957f438-891e-4718-afe4-f4e9f27c816a"
      frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen
      style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 12px;">
    </iframe>
    <div class="top--10 relative z-1 shadow-2xl">
      <button @click="closeVideo"
        class="text-16px bg-#eee px-2 py-1 rounded-xl font-600 shadow-2xl hover:px-3 active:bg-[#1983F9] active:color-white transition-all">
        close
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 3000)
})

const closeVideo = () => {
  isVisible.value = false
}
</script>

<style>
</style>