<!-- layout -->
<template>
  <div>
    <!-- 🛣 -->
    <!-- <AppNav/> -->
    <navigation/>
    <Matt/>
    <Scrolling/>

  </div>
</template>


<!-- style -->
<style lang="scss">
  @import '@/assets/mq.scss';

  .homeFade-enter-active { transition: all 1600ms ease; }
  .homeFade-leave-active { transition: all 100ms ease; }
  .homeFade-enter, .homeFade-active { opacity: 0; }

</style>


<!-- logic -->
<script>
  // import AppNav from '@/components/AppNav.vue'
  import navigation from '@/components/navigation.vue'
  import Scrolling from '@/components/Scrolling.vue'
  import Matt from '@/components/Matt.vue'

  export default {
    transition: {
      name: 'homeFade',
      mode: 'out-in'
    },
    components: { navigation, Scrolling, Matt },
    mounted() {

    }
  }

</script>
