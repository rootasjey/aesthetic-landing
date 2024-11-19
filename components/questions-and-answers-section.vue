<template>
  <section id="questions-and-answers" class="rounded-4 overflow-clip px-12 pt-12 mt-16 relative">
    <h2 class="text-45px font-600 text-center tracking-[-1px]">
      Questions & answers
    </h2>

    <img 
      src="/assets/images/character-4.png" 
      alt="character-4.png" 
      class="w-[140px] h-[140px] absolute left-1/2 -translate-x-146 top-1/3 hidden sm:block" 
    />

    <hr class="w-604px mx-auto mt-8" />
    <Accordion
      class="w-604px mx-auto"
      :items="items"
    />
  </section> 
</template>

<script setup lang="ts">
const items = [
  {
    label: 'What does this extension do?',
    content: 'This extension lets you customize your Notion workspace by adding style to your headings, for now. You can add borders, border style and border radius making your pages look more polished and aesthetic.',
    defaultOpen: true,
  },
  {
    label: 'How do I install and use the extension?',
    content: "Install it from the <u><a href='https://chrome.google.com/webstore/detail/npgghjedpchajflknnbngajkjkdhncdo' target='_blank'>Chrome Web Store</a></u>. Once added, click on the extension icon in your browser’s toolbar to access customization options for your Notion pages.",
  },
  {
    label: "Is the extension free?",
    content: "Yes, the extension is free to use. However, styles cannot be saved and will need to be re-applied each time you open a new session. To enable saved styles and access advanced features, consider upgrading to the <u>aesthetic Plus</u> version.",
  },
  {
    label: "Can others see my customizations on shared Notion pages?",
    content: "No, customizations are only visible on your own browser and won’t affect how others see shared pages.",
  },
  {
    label: "How can I get help or suggest features?",
    content: "Contact us through the <u><a href='https://cutt.ly/OeFLLGiX'>help center</a></u>. We’re happy to help and always open to suggestions!",
  },
]
</script>
