<!-- layout -->
<template>
  <section class="app">

    <div class="special card"></div>
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
    <!-- <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div> -->

  </section>
</template>


<!-- style -->
<style lang="scss">
  @import '@/assets/mq.scss';

  .app {
    // border: 4px solid pink;
    height: 100vh;
    overflow-x: scroll;
    display: flex;
  }

  .card {
    --unit: 32px;
    margin: var(--unit);
    min-width: 37vw; height: 28.8rem;
    // height: calc(100% - calc(var(--unit) * 2));
    background: #fff;
  }

</style>


<!-- logic -->
<script>

  export default {
    mounted() {
      const app = document.querySelector('.app')
      let special = document.querySelector('.special')
      let pageXOffset = window.pageXOffset

      app.addEventListener('scroll', () => {
        let x = app.scrollLeft

        const newPageOffset = x
        const diff = x - pageXOffset

      	TweenMax.to(app, .75, {
      		skewX: diff * -0.25,
      		ease: Power4.ease
      	})

      	pageXOffset = newPageOffset
        // requestAnimationFrame(callback)
      })
    }
  }

</script>
