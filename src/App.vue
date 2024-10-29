<script setup lang="ts">
import Button from './components/common/Button.vue';
import { Icons } from './components/icons';
</script>

<template>
  <div>
    <div class="flex min-h-svh items-center justify-center flex-col space-y-12 px-5">
      <img src="./assets/shoppe_logo.svg" alt="shoppe_logo" />
      <h1 class="text-5xl font-bold">
        Shoppe
      </h1>
      <p class="font-thin text-center text-lg">Beautiful eCommerce UI Kit <br /> for your online store</p>
      <Button xl>
        Let's get started!
        <Icons.Arrow />
      </Button>

      <p>I already have an account
      </p>

    </div>
  </div>
</template>

<style scoped></style>
