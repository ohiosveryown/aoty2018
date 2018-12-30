<!-- layout -->
<template>
  <div>
    <!-- 🛣 -->
    <AppNav/>
    <Matt/>
    <Scrolling/>

  </div>
</template>


<!-- style -->
<style scoped lang="scss">
  @import '@/assets/mq.scss';

  .homeFade-enter-active, .homeFade-leave-active { transition: all 1600ms ease; }
  .homeFade-enter, .homeFade-active { opacity: 0; }

</style>


<!-- logic -->
<script>
  import AppNav from '@/components/AppNav.vue'
  import Scrolling from '@/components/Scrolling.vue'
  import Matt from '@/components/Matt.vue'

  export default {
    transition: {
      name: 'homeFade',
      mode: 'out-in'
    },
    components: { AppNav, Scrolling, Matt },
    mounted() {

    }
  }

</script>
