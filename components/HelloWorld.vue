<template>
  <div>
    <h1>Hello</h1>
    <p id="stepper-value">{{ count }}</p>
    <button id="increment" @click="decrement">Increment</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const count = ref(2);
const increment = () => count.value++;
const decrement = () => count.value--;
</script>

<style scoped></style>
