<!-- layout -->
<template>
  <main>

    <div class="cover-01"/>
    <div class="cover-02"/>
    <div class="cover-03"/>

    <nav>
      <nuxt-link class="linkOne" to="/test">Test</nuxt-link>
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

  .homeFade-enter-active, .homeFade-leave-active {
    transition: all 800ms ease;
  }

  .homeFade-enter, .homeFade-leave-active {
    // opacity: 0;
    transition: all 800ms ease;
  }

  .cover-01, .cover-02, .cover-03 {
    position: fixed;
    top: 0; left: 0;
    z-index: var(--zmax);
    width: 100vw; height: 33vh;
    // background: #0b0b0b;
    background: #28262a;
    transform: scaleX(0);
    transform-origin: left;
    transition: all 800ms cubic-bezier(0.770, 0, 0.175, 1);
  }

  .cover-02 { top: 33vh; }
  .cover-03 { top: 66vh; }

  .cover-01-active, .cover-02-active, .cover-03-active { transform: scaleX(1); }
  .cover-02-active { transition: all 800ms cubic-bezier(0.770, 0, 0.175, 1) 150ms; }
  .cover-03-active { transition: all 800ms cubic-bezier(0.770, 0, 0.175, 1) 300ms; }

</style>


<!-- logic -->
<script>
  import List from '@/components/List.vue';

  export default {
    transition: {
      name: 'homeFade',
      mode: 'out-in'
    },
    components: { List },
    mounted() {
      const link = document.querySelector('.linkOne')
      const coverOne = document.querySelector('.cover-01')
      const coverTwo = document.querySelector('.cover-02')
      const coverThree = document.querySelector('.cover-03')

      link.addEventListener('click', () => {
        coverOne.classList.add('cover-01-active')
        coverTwo.classList.add('cover-02-active')
        coverThree.classList.add('cover-03-active')
      })
    }
  }

</script>
