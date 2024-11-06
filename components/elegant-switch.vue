
<template>
  <label class="toggle-switch">
    <input 
      type="checkbox"
      :checked="modelValue"
      @change="toggle"
    >
    <div class="toggle-switch-background" :style="{ '--switch-color': switchColor }">
      <div class="toggle-switch-handle"></div>
    </div>
  </label>
</template>

<script lang="ts" setup>
const props = defineProps<{
  modelValue: boolean,
  color?: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

// Default color if none provided
const switchColor = props.color || '#05c46b'

const toggle = () => {
  emit('update:modelValue', !props.modelValue)
}
</script>

<style scoped>
  .toggle-switch {
    position: relative;
    display: inline-block;
    width: 80px;
    height: 40px;
    cursor: pointer;
    scale: 0.6;
  }

  .toggle-switch input[type="checkbox"] {
    display: none;
  }

  .toggle-switch-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #ddd;
    border-radius: 20px;
    box-shadow: inset 0 0 0 2px #ccc;
    transition: background-color 0.3s ease-in-out;
  }

  .toggle-switch-handle {
    position: absolute;
    top: 5px;
    left: 5px;
    width: 30px;
    height: 30px;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease-in-out;
  }

  .toggle-switch::before {
    content: "";
    position: absolute;
    top: -25px;
    right: -35px;
    font-size: 12px;
    font-weight: bold;
    color: #aaa;
    text-shadow: 1px 1px #fff;
    transition: color 0.3s ease-in-out;
  }

  .toggle-switch input[type="checkbox"]:checked + .toggle-switch-handle {
    transform: translateX(45px);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 0 0 3px var(--switch-color);
  }

  .toggle-switch input[type="checkbox"]:checked + .toggle-switch-background {
    background-color: var(--switch-color);
    box-shadow: inset 0 0 0 2px color-mix(in srgb, var(--switch-color) 90%, black);
  }

  .toggle-switch input[type="checkbox"]:checked + .toggle-switch:before {
    color: var(--switch-color);
    content: "On";
    right: -15px;
  }

  .toggle-switch input[type="checkbox"]:checked + .toggle-switch-background .toggle-switch-handle {
    transform: translateX(40px);
  }
</style>
