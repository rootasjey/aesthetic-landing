<template>
  <div class="min-h-screen flex flex-col font-sans">
    <header class="bg-white">
      <div class="bg-[#F6F5F4] text-center text-sm py-4">
        <span>We just launched on <b>Product Hunt</b></span>
      </div>
      <div class="px-8 p-4 mx-auto flex justify-center sm:justify-between items-center">
        <div class="flex items-center">
          <ULink href="/">
            <img 
              src="/assets/images/app-icon/aesthetic-logo-black.png" 
              alt="aesthetic" 
              class="h-8 mt-1 hidden sm:block">
          </ULink>

          <nav class="sm:ml-8">
            <ul class="flex space-x-4 text-gray-600 font-semibold">
              <li><a href="/#features" class="hover:text-black">Features</a></li>
              <li><a href="/#plans-and-features" class="hover:text-black">Pricing</a></li>
              <li><a href="/#questions-and-answers" class="hover:text-black">Q&A</a></li>
              <li><a href="https://www.notion.so/templates/mindful-toolkit" target="_blank" class="hover:text-black">Gallery</a></li>
            </ul>
          </nav>
        </div>
        <UButton 
          to="https://cutt.ly/MeFLNZqu" 
          target="_blank" 
          class="bg-[#121212] hover:bg-[#333333] text-white py-2 px-4 rounded-12 hidden sm:block">
          Download on Chrome
        </UButton>
      </div>
    </header>
    <main class="flex-grow p-6 md:p-8 lg:p-10">
      <slot />
    </main>

    <footer class="py-0 mb-12">
      <div class="container mx-auto text-center mb-6">
        <div class="flex justify-center items-center text-[20px] pt-[40px] pb-[72px] gap-[17px] font-600">
          <ULink href="https://cutt.ly/MeFLNZqu" target="_blank">
            <span class="px-6 py-1 bg-[#FAFAFA] rounded-8 flex items-center">review <img class="ml-[10px] mt-[2px]" src="/assets/images/arrow-top-right.svg" /></span>
          </ULink>

          <ULink href="https://cutt.ly/OeFLLGiX" target="_blank">
            <span class="px-6 py-1 bg-[#FAFAFA] rounded-8 flex items-center">help center <img class="ml-[10px] mt-[2px]" src="/assets/images/arrow-top-right.svg" /></span>
          </ULink>
        </div>

        <ULink to="/">
          <img src="/assets/images/app-icon/aesthetic-logo-color.png" alt="aesthetic" class="h-20 mx-auto">
        </ULink>
        <!-- <p class="text-gray-600">© 2023 Aesthetic. All rights reserved.</p> -->
      </div>
    </footer>
  </div>
</template>

<script setup>

</script>
<style scoped>
.container {
  max-width: 1200px;
}
</style>

<style>
:root {
  scroll-behavior: smooth;
}
</style>
