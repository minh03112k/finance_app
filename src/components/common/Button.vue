<template>
    <button class="rounded-2xl bg-blue-600 py-4 px-11 text-white 
        transition-all duration-300
        hover:brightness-90
        active:translate-y-0.5 active:scale-[0.98] active:brightness-75
        focus:outline-none 
        " :class="{ 'w-full': xl, 'cursor-not-allowed opacity-50': disabled }">
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
defineProps({
    xl: {
        type: Boolean
    },
    disabled: {
        type: Boolean
    }

})
</script>