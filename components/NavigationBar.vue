<template>
  <nav>
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/login">Login</NuxtLink>
    <NuxtLink to="/receipt">receipt</NuxtLink>
  </nav>
</template>

<script setup></script>
<style lang="scss" scoped>
nav {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
</style>
