<template>
    <div class="inline-flex items-center justify-between w-full my-8">
        <h2 class="text-xl font-bold">Category</h2>

        <Button size="small">
            <Icons.Arrow />
        </Button>
    </div>
    <v-row>
        <v-col cols="6">
            <v-card title="Clothing" text="..." elevation="4"></v-card>
        </v-col>
        <v-col cols="6">
            <v-card title="Shoes" text="..." elevation="4"></v-card>
        </v-col>
        <v-col cols="6">
            <v-card title="Bags" text="..." elevation="4"></v-card>
        </v-col>
        <v-col cols="6">
            <v-card title="Lingerie" text="..." elevation="4"></v-card>
        </v-col>
        <v-col cols="6">
            <v-card title="Watch" text="..." elevation="4"></v-card>
        </v-col>
        <v-col cols="6">
            <v-card title="Hoodies" text="..." elevation="4"></v-card>
        </v-col>
    </v-row>

</template>

<script lang="ts" setup>
import { Icons } from "../../icons";
import Button from "../../components/common/Button.vue";

</script>