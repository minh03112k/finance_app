<template>
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
</script>
