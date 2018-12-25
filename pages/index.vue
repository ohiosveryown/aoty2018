<!-- layout -->
<template>
  <section class="app">

    <div class="card"></div>
    <div class="card"></div>
    <div class="special card"></div>
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
    border: 4px solid pink;
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

  .blue { background: blue; }
  .red  { background: red; }

  .none { transform: matrix(0, 0, 0, 0, 0, 0); }

</style>


<!-- logic -->
<script>

  export default {
    mounted() {
      const special = document.querySelector('.special')
      const cards = document.querySelector('.cards')

      const main = document.querySelector('main')
      const app = document.querySelector('.app')
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
        console.log(pageXOffset)

        if (pageXOffset <= 20) {
          special.classList.add('blue')
          app.style.transform = "none !important"
        }
        else {
          special.classList.remove('blue')
        }
      })
    }
  }

</script>
