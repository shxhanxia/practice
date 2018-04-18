<template>

</template>

<script>
  import NP from 'number-precision';
    export default {
        name: "number",
      data() {
          return {

          }
      },
      created() {

      },
      mounted() {
          console.log(0.305.toFixed(16), 0.3049999999999999933386618522490607574582099914550781250000000000000000000000000000000000000000000000.toFixed(16), (0.1 + 0.2).toFixed(16));
      }
    }
</script>

<style scoped>

</style>
