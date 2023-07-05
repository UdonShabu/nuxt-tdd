<template>
  <div>
    <article>
      <h1>Hello</h1>
      <p id="my-stepper-value">{{ myCount }}</p>
      <button id="my-increment" @click="increment()">increment</button>
    </article>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRef } from "vue";

const myCount = ref<number>(0);
const increment = () => (myCount.value *= 2);

// const name = ref<string>('')
const getFullName = (first: string, last: string) => {
  return `${first} ${last}`;
};
</script>

<style scoped></style>

<!-- const userName = reactive({
  first: "spider",
  last: "girl",
});
const fullname = ref("");
const getfullName = (first: string, last: string) => {
  fullname.value = `${first} ${last}`;
}; -->
