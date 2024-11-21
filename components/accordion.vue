<template>
  <div class="flex flex-col" :class="class">
    <div v-for="(item, index) in items" :key="index" class="border-b">
      <div
        @click="toggleItem(index)"
        class="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-50 transition-all rounded-3"
      >
        <span class="font-500 mr-4">{{ item.label }}</span>
        <span 
          class="transform transition-transform duration-200 text-6" 
          :class="{ 'rotate-45': openItems[index], 'mr--0.2': openItems[index] }"
          style="transform-origin: center center"
        >
          +
        </span>
      </div>
      <transition
        name="accordion"
        @enter="startTransition"
        @after-enter="endTransition"
        @before-leave="startTransition"
        @after-leave="endTransition"
      >
        <div
          v-show="openItems[index]"
          class="overflow-hidden transition-all duration-300"
        >
          <div class="p-4 pt-0 font-sans font-320 text-16px opacity-80" v-html="item.content">
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  items: {
    type: Array,
    required: true,
    default: () => [],
    validator: (items) => {
      return items.every(item => 
        'label' in item && 
        'content' in item && 
        'defaultOpen' in item
      )
    }
  },
  class: {
    type: [String, Object, Array],
    default: ''
  }
})

const openItems = ref([])

onMounted(() => {
  openItems.value = props.items.map(item => item.defaultOpen || false)
})

const toggleItem = (index) => {
  openItems.value[index] = !openItems.value[index]
}

const startTransition = (el) => {
  const height = el.scrollHeight
  el.style.height = `${height}px`
  // Force repaint
  el.offsetHeight
}

const endTransition = (el) => {
  el.style.height = ''
}
</script>

<style scoped>
.accordion-enter-active,
.accordion-leave-active {
  transition: height 0.3s ease;
  overflow: hidden;
}

.accordion-enter-from,
.accordion-leave-to {
  height: 0 !important;
}

.accordion-enter-to,
.accordion-leave-from {
  height: var(--auto-height);
}
</style>
