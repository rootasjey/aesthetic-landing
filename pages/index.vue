<template>
  <section class="text-center py-12">
    <h1 class="text-[70px] font-700 mb-4 line-height-20 tracking-[-0.6px]">
      Notion, Styled.
    </h1>

    <p class="sm:text-[21px] font-400 text-[#808080] mb-8">
      Elevate your Notion visual journey with <br/> stylish, customizable heading designs
    </p>

    <UButton 
      to="https://cutt.ly/MeFLNZqu" 
      target="_blank" 
      class="bg-black hover:bg-[#1983F9] text-16px px-20px pt-10px pb-12px font-600 rounded-8px">
      <span class="text-white">Try it, it's magic!</span>
    </UButton>

    <img src="/assets/images/character-1.png" alt="" class="w-[120px] h-[120px] absolute left-1/2 -translate-x-128 top-1/ hidden sm:block5" />
    <img src="/assets/images/character-2.png" alt="" class="w-[120px] h-[120px] absolute left-1/2 translate-x-116 top-1/3 hidden sm:block" />
  </section>

  <section id="features" class="bg-[#FAFAFA] rounded-4 overflow-clip sm:min-h-50em relative">
    <div class="flex flex-col gap-6 sm:gap-0 sm:flex-row justify-between sm:space-x-8 p-4 pt-8 sm:py-12 sm:px-8">
      <div class="sm:w-1/3 sm:p-6 rounded-lg flex items-center justify-center">
        <img src="/assets/images/die-one.svg" alt="die-one" class="mr-4">
        <div>
          <h2 class="text-4 sm:text-xl font-medium mb-2 line-height-2 sm:line-height-4">Curved or Shaped</h2>
          <p class="text-gray-600 text-3 sm:text-5">Style Your Titles with Custom Border Radius</p>
        </div>
      </div>

      <div class="sm:w-1/3 sm:p-6 rounded-lg flex items-center justify-center">
        <img src="/assets/images/double-square.svg" alt="double-square" class="mr-4">
        <div>
          <h2 class="text-4 sm:text-xl font-medium mb-2 line-height-4">Solid or Dashed</h2>
          <p class="text-gray-600 text-3 sm:text-5">Personalize your headings with borders that match your mood</p>
        </div>
      </div>

      <div class="sm:w-1/3 sm:p-6 rounded-lg flex items-center justify-center">
        <img src="/assets/images/square-paragraph.svg" alt="square-paragraph" class="mr-4">
        <div>
          <h2 class="text-4 sm:text-xl font-medium mb-2 line-height-4">
            Vague or Balanced 
            <span class="absolute ml-2 -mt-1 px-1 py-0.4 text-sm bg-[#F0EEED] text-color-[#050505] rounded-1">Soon</span>
          </h2>
          <p class="text-gray-600 text-3 sm:text-5">Align your headings in the center for a clean look</p>
        </div>
      </div>
    </div>

    <img 
      src="/assets/images/styled-pages.png" 
      alt="styled pages" srcset="" 
      class="mx-auto mt-8 right-40 bottom-18 scale-130"
    >
  </section>
</template>

<script setup>
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Mandali&display=swap');
</style>