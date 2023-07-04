<template>
  <div>
    <h1>Home</h1>
    <HelloWorld />
    <!-- <HelloWorld :parentCount="parentCount" /> -->
  </div>
</template>

<script setup lang="ts">
const parentCount = ref(5);
function updateParentCount(count: number) {
  parentCount.value = count;
}
</script>

<style scoped></style>
