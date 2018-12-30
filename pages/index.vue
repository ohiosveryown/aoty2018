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
    <!-- <List/> -->
    <ul>

      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>

    </ul>

  </main>
</template>


<!-- style -->
<style scoped lang="scss">
  @import '@/assets/mq.scss';

  ul {
    height: 100vh;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    -webkit-oveflow-scrolling: touch;
    width: auto;
  }

  li {
    border: 3px solid pink;
    width: 300px;
    height: 100%;
    background: rgba(255, 0, 0, 0.1);
    // margin-left: 10px;
    display: inline-block;
    // overflow: hidden;
  }

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
  import Matt from '@/components/Matt.vue'

  export default {
    transition: {
      name: 'homeFade',
      mode: 'out-in'
    },
    components: { AppNav, List, Matt },
    mounted() {
      const navTrigger = document.querySelector('.nav-trigger')

      navTrigger.addEventListener('click', () => {
        navTrigger.classList.toggle('nav-trigger-active')
      })

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
