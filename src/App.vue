<template>
  <div>
    <app-contadores></app-contadores>
  </div>
</template>

<script>



export default {
  el: "app",
  name: "contador",
  data(){
    return {
      contador: 0,
    }
  }
}
</script>

<style scoped>
</style>