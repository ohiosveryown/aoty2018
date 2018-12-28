<!-- layout -->
<template>
  <main>

    <div class="cover-01"/>
    <div class="cover-02"/>
    <div class="cover-03"/>

    <!-- <div class="cover-01"/> -->

    <nuxt-link to="/">Home</nuxt-link>
    <h1>Test</h1>

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
  .cover-03 { top: 66vh; }

  @keyframes coverOneIn {
    from { transform: scaleX(1); }
    to   { transform: scaleX(0); }
  }

  .cover-01 { animation: coverOneIn 1000ms cubic-bezier(0.770, 0, 0.175, 1); animation-fill-mode: forwards; }
  .cover-02 { animation: coverOneIn 1000ms cubic-bezier(0.770, 0, 0.175, 1); animation-fill-mode: forwards; animation-delay: 150ms; }
  .cover-03 { animation: coverOneIn 1000ms cubic-bezier(0.770, 0, 0.175, 1); animation-fill-mode: forwards; animation-delay: 300ms; }

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
