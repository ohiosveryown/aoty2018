<!-- layout -->
<template>
  <main>

    <!-- <div class="cover-01"/>
    <div class="cover-02"/>
    <div class="cover-03"/> -->

    <!-- <nav>
      <nuxt-link class="linkOne" to="/test">Test</nuxt-link>
    </nav> -->

    <AppNav/>
    <List/>

  </main>
</template>


<!-- style -->
<style scoped lang="scss">
  @import '@/assets/mq.scss';

  .homeFade-enter-active, .homeFade-leave-active {
    transition: all 1600ms ease;
  }

  .homeFade-enter, .homeFade-active {
    opacity: 0;
  }

</style>


<!-- logic -->
<script>
  import AppNav from '@/components/AppNav.vue';
  import List from '@/components/List.vue';

  export default {
    transition: {
      name: 'homeFade',
      mode: 'out-in'
    },
    components: { AppNav, List },
    mounted() {
      // const link = document.querySelector('.linkOne')
      // const coverOne = document.querySelector('.cover-01')
      // const coverTwo = document.querySelector('.cover-02')
      // const coverThree = document.querySelector('.cover-03')
      //
      // link.addEventListener('click', () => {
      //   coverOne.classList.add('cover-01-active')
      //   coverTwo.classList.add('cover-02-active')
      //   coverThree.classList.add('cover-03-active')
      // })
    }
  }

</script>
