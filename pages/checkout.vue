<template>
  <stripe-pricing-table 
    pricing-table-id="prctbl_1Q1ZKkL4DNiAJD6zjLiC9Xmw"
    publishable-key="pk_live_51PxEijL4DNiAJD6zeK46BhOZmGvcughfCSyVFJiPINeIz30Xwjy8QMWrhmiAiw7dT3kLBfjJnP3iZCRfA46cw0EL00GvJqWWe3">
  </stripe-pricing-table>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'

onMounted(() => {
  const script = document.createElement('script')
  script.src = 'https://js.stripe.com/v3/pricing-table.js'
  script.async = true
  document.head.appendChild(script)
})
</script>

<style>
</style>