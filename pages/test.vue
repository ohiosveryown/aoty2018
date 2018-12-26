<!-- layout -->
<template>
  <main>

    <nuxt-link to="/">Home</nuxt-link>
    <h1>Test</h1>

  </main>
</template>


<!-- style -->
<style scoped lang="scss">
  @import '@/assets/mq.scss';

</style>


<!-- logic -->
<script>

  export default {
    transition: {
      name: 'pageFade',
      mode: 'out-in'
    },
    mounted() {

    }
  }

</script>
