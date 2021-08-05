<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
  export default {
    name: "default",
    mounted() {
      this.$nextTick(() => {
        this.$nuxt.$loading.start();
        window.onload = ()  => {
          this.$nuxt.$loading.finish();
        }
      });
    },
  };
</script>

<style>
</style>