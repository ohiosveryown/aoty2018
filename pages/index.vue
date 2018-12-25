<!-- layout -->
<template>
  <main>

    <List/>

  </main>
</template>


<!-- style -->
<style scoped lang="scss">
  @import '@/assets/mq.scss';

</style>


<!-- logic -->
<script>
  import List from '@/components/List.vue';

  export default {
    components: { List },
    mounted() {

    }
  }

</script>
