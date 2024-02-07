<template>
  <div>
    <h1>couter</h1>
    <input type="button" @click="countStore.increment()" />
    {{ countStore.count }} {{ countStore.doubleCount }}
    {{ countStore.doubleDouble }}
    {{ countStore.doubleDouble2 }}
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from "../store/counter";
const countStore = useCounterStore();
</script>
<style lang="scss" scoped></style>
