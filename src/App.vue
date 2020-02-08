<template>
  <router-view />
</template>

<script>
  export default {
    name: "App"
  };
</script>

<style>
  body,
  html {
    padding: 0;
    margin: 0;
    /* overflow: hidden; */
    font-family: "SF Pro SC", "SF Pro Display", "SF Pro Icons", "PingFang SC", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  }

  div {
    transition: .5s all ease-out;
  }
</style>