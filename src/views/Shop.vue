<script setup lang="ts">
import { Icons } from "../icons";
import Button from "../components/common/Button.vue";
</script>

<template>
    <div class="min-h-svh flex flex-col px-5">
        <div class="inline-flex items-center gap-8 p-3">
            <h1 class="text-4xl font-bold">Shop</h1>
            <div class="inline-flex items-center">
                <input placeholder="Search" class="text-base" />
                <Button size="small" flat variant="plain">
                    <Icons.CameraIcon />
                </Button>
            </div>
        </div>
        <v-carousel class="my-5" continuous :show-arrows="false" hide-delimiter-background interval=2000 height="180">
            <v-carousel-item>
                <div class="flex justify-center w-full">
                    <img src="../assets/big_sale_banner.png" />
                </div>

            </v-carousel-item>

            <v-carousel-item>
                <div class="flex justify-center w-full">
                    <img src="../assets/big_sale_banner.png" />
                </div>

            </v-carousel-item>

            <v-carousel-item>
                <div class="flex justify-center w-full">
                    <img src="../assets/big_sale_banner.png" />
                </div>

            </v-carousel-item>
        </v-carousel>
        hiiii
    </div>
</template>