<template>
  <div class="flex flex-col gap-4 bg-[#eee] p-8 rounded-lg max-w-300px mx-auto">
    <header>
      <div class="flex items-center justify-between">
        <span 
          class="font-600" 
          :class="{ 'text-[#1983F9]': !enabled, 'opacity-50': enabled }"
          @click="onClickMonthly">
          Monthly
        </span>
        
        <ElegantSwitch v-model="enabled" color="#1983F9" />
        
        <span 
          class="font-600" 
          :class="{ 'text-[#1983F9]': enabled, 'opacity-50': !enabled }"
          @click="onClickYearly">
          Yearly
        </span>
      </div>
      <hr class="my-4" />

      <img src="/assets/images/aesthtetic-styled-pages.png" alt="illustration" class="w-full mb-4">
      <h1 class="font-600 text-5 mb-2">aesthetic ⁺</h1>
      <h3 class="opacity-50 text-[14px]">✔️ Elevate your Notion visual journey with stylish, customizable heading designs</h3>
    </header>
    <div class="content flex flex-col gap-4">
      <div class="flex items-center justify-between">
        <div class="flex items-start gap-1 pt-3"
          :class="{ 'opacity-20': enabled }"
          @click="onClickMonthly">
          <h2 class="font-700 text-[36px] line-height-[36px]"
            :class="{ 'color-[#1983F9]': !enabled, 'opacity60': enabled }">€5</h2>
          <div>
            <p class="text-gray-600 line-height-4 text-[13px] opacity60">per</p>
            <p class="text-gray-600 line-height-4 text-[13px] opacity60">month</p>
          </div>
        </div>

        <div class="flex items-start gap-1 pt-3"
          :class="{ 'opacity-20': !enabled }"
          @click="onClickYearly">
          <h2 class="font-700 text-[36px] line-height-[36px]"
            :class="{ 'color-[#1983F9]': enabled, 'opacity60': !enabled }">€65</h2>
          <div>
            <p class="text-gray-600 line-height-4 text-[13px] opacity60">per</p>
            <p class="text-gray-600 line-height-4 text-[13px] opacity60">year</p>
          </div>
        </div>
      </div>

      <UButton 
        :to="enabled ? 'https://checkout.stripe.com/c/pay/cs_live_a1ueNWxMd922KSFcT2auSC5FJITp4Q5zhhlYCEoSx2Uf7itgatre8V4caa#fidkdWxOYHwnPyd1blppbHNgWjA0VX1AbG9JMUFLbERPQTN%2FYE4xM0dtSl9oQnNmcGJtY0ZWfFNDT2xVTEtgTH82NV1yb3w9VEhSd21obERscjJhUTZuSUdjb09rVTZsX0ZXY0QxM2ZyNUBJNTVCc090UlJgNicpJ3ZwZ3Zmd2x1cWxqa1BrbHRwYGtgdnZAa2RnaWBhJz9jZGl2YHgl' 
                     : 'https://buy.stripe.com/bIY8xIalf9rveqIfYY'" 
        target="_blank" 
        class="bg-[#1983F9] text-16px px-20px pt-10px pb-12px font-600 rounded-8px text-center"
      >
        <span class="text-white">Subscribe</span>
      </UButton>

      <div class="features mt-2 text-[14px]">
        <p class="mb-2">This includes:</p>
        <ul>
          <li class="flex gap-3 mb-2">
            <span>•</span>
            <p>Style Your titles with custom border radius</p>
          </li>
          <li class="flex gap-3 mb-2">
            <span>•</span>
            <p>Personalize your headings with borders that match your mood</p>
          </li>

          <li class="flex gap-3 mb-2">
            <span>•</span>
            <p>Align your headings in the center for a clean look that stands out</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import ElegantSwitch from '~/components/elegant-switch.vue'

const enabled = ref(false)
const onClickMonthly = () => {
  enabled.value = false
}
const onClickYearly = () => {
  enabled.value = true
}

</script>
