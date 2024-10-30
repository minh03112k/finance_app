<!-- <template>
  <button
    class="inline-flex items-center gap-4 justify-center rounded-2xl bg-blue-600 p-4 text-white transition-all duration-200 hover:brightness-90 active:translate-y-0.5 active:scale-[0.98] active:brightness-75 focus:outline-none"
    :disabled="disabled"
    :class="{ 'w-full': xl, 'w-fit rounded-full p-2': sm, 'cursor-not-allowed opacity-50': disabled }"
  >
    <div class="inline-flex items-center gap-4">
      <slot></slot>
    </div>
  </button>
</template>

<script setup lang="ts">
  defineProps({
    xl: {
      type: Boolean,
    },
    disabled: {
      type: Boolean,
    },
    sm: {
      type: Boolean,
    },
  });
</script> -->

<template>
  <v-btn :class="[
    'custom-primary-btn',
    variant && `custom-btn-${variant}`,
    size && `custom-btn-${size}`
  ]" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </v-btn>
</template>

<script lang="ts">
export default {
  name: 'Button',
  inheritAttrs: false,
  props: {
    variant: {
      type: String,
      default: 'primary',
      validator: value => ['primary', 'secondary', 'success', 'error', 'warning'].includes(value)
    },
    size: {
      type: String,
      default: 'medium',
      validator: value => ['small', 'medium', 'large'].includes(value)
    }
  }
}
</script>

<style scoped>
/* Base styles */
.custom-primary-btn {
  @apply rounded-2xl transition-all duration-200 !important;
}

/* Variants */
.custom-btn-primary {
  @apply bg-blue-600 text-white hover:bg-blue-700 !important;
}


/* Disabled state */
.custom-primary-btn:disabled {
  @apply opacity-50 cursor-not-allowed !important;
}
</style>