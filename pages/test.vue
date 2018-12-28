<!-- layout -->
<template>
  <main>

    <div class="cover-out"/>
    <div class="cover-01"/>
    <div class="cover-02"/>
    <div class="cover-03"/>

    <!-- <div class="cover-01"/> -->

    <nuxt-link class="home-link" to="/">Home</nuxt-link>
    <img style="display: block" src="@/assets/img/d02.jpg" alt="">

  </main>
</template>


<!-- style -->
<style scoped lang="scss">
  @import '@/assets/mq.scss';

  .cover-01, .cover-02, .cover-03 {
    position: fixed;
    top: 0; left: 0;
    z-index: var(--zmax);
    width: 100vw; height: 33vh;
    background: #28262a;
    // background: pink;
    transform: scaleX(1);
    transform-origin: right;
    // transition: all 500ms ease;
  }

  .cover-02 { top: 33vh; }
  .cover-03 { top: 66vh; height: 34vh; }

  @keyframes coverOneIn {
    from { transform: scaleX(1); }
    to   { transform: scaleX(0); }
  }

  .cover-01 { animation: coverOneIn 1000ms cubic-bezier(0.770, 0, 0.175, 1); animation-fill-mode: forwards; }
  .cover-02 { animation: coverOneIn 1000ms cubic-bezier(0.770, 0, 0.175, 1); animation-fill-mode: forwards; animation-delay: 150ms; }
  .cover-03 { animation: coverOneIn 1000ms cubic-bezier(0.770, 0, 0.175, 1); animation-fill-mode: forwards; animation-delay: 300ms; }

  .cover-out {
    position: fixed;
    top: 0; left: 0;
    z-index: var(--z5);
    width: 100vw; height: 100vh;
    background: #0b0b0b;
    transform: translateY(-99vh);
    transform-origin: top;
    transition: all 1000ms cubic-bezier(0.770, 0, 0.175, 1);
    will-change: transform;
  }

  .cover-out-active {
    transform: translateY(0);
  }


  // .detailFade-leave {
  //   transition: all 800ms ease;
  //   opacity: 1;
  // }

  // .detailFade-leave-active {
  //   transition: all 800ms ease;
  //   opacity: 0;
  // }

</style>


<!-- logic -->
<script>

  export default {
    transition: {
      name: 'detailFade',
      mode: 'out-in'
    },
    mounted() {
      const homeLink = document.querySelector('.home-link')
      const coverOut = document.querySelector('.cover-out')

      homeLink.addEventListener('click', () => {
        coverOut.classList.add('cover-out-active')
      })
    }
  }

</script>
