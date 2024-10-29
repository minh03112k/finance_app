<script setup lang="ts">
  import Button from "./components/common/Button.vue";
  import { Icons } from "./components/icons";
</script>

<template>
  <div>
    <div class="flex min-h-svh items-center justify-center flex-col space-y-12 px-5">
      <div class="flex items-center justify-center shadow-[0_4px_8px_0_rgba(0,0,0,0.16)] p-8 rounded-full">
        <img
          src="./assets/shoppe_logo.svg"
          alt="shoppe_logo"
        />
      </div>
      <h1 class="text-5xl font-bold">Shoppe</h1>
      <p class="font-thin text-center text-lg">
        Beautiful eCommerce UI Kit <br />
        for your online store
      </p>
      <Button xl> Let's get started! </Button>

      <span class="inline-flex items-center gap-4">
        I already have an account
        <Button sm> <Icons.Arrow /> </Button>
      </span>
    </div>
  </div>
</template>

<style scoped></style>
