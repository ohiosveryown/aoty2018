<!-- layout -->
<template>
  <div>
    <AppNav/>
    <!-- <h1>Navigation</h1> -->

  </div>
</template>


<!-- style -->
<style scoped lang="scss">
  @import '@/assets/mq.scss';



</style>


<!-- logic -->
<script>
  import AppNav from '@/components/AppNav.vue';

  export default {
    components: { AppNav },
    mounted() {
      const navTrigger = document.querySelector('.nav-trigger')
      navTrigger.classList.add('nav-trigger-active')
      // const navTrigger = document.querySelector('.nav-trigger')
      //
      // navTrigger.addEventListener('click', () => {
      //   navTrigger.classList.toggle('nav-trigger-active')
      // })
    }
  }

</script>
