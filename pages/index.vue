<!-- layout -->
<template>
  <main>
    <nav>
      <nuxt-link to="/test">Test</nuxt-link>
    </nav>

    <List/>

  </main>
</template>


<!-- style -->
<style scoped lang="scss">
  @import '@/assets/mq.scss';

  nav {
    position: relative;
    z-index: var(--zmax);
  }

</style>


<!-- logic -->
<script>
  import List from '@/components/List.vue';

  export default {
    transition: {
      name: 'pageFade',
      mode: 'out-in'
    },
    components: { List },
    mounted() {

    }
  }

</script>
