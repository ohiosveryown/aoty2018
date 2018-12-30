<!-- layout -->
<template>
  <footer>

    <h6 class="f-space scroll mb-1 tac">
      Scroll
      <span class="scroll-right">Right </span>
      <span class="or">or </span>
      <span class="scroll-left">Left</span>
    </h6>
    <div class="progress-container">
      <div class="progress-bar"></div>
    </div>

  </footer>
</template>


<!-- style -->
<style scoped lang="scss">
  @import '@/assets/mq.scss';

  footer {
    position: fixed;
    bottom: 8rem;
    width: 100vw;

    @include breakpoint(md) { bottom: 6.4rem; }
  }

  .scroll {
    transition: opacity 400ms ease;
    opacity: 1;
  }

  .scroll-left, .or { display: none; }

  .progress-container {
    position: relative;
    margin: 0 auto;
    width: 64%;
    height: 2px;
    border-radius: 200px;
    background: rgba(255,255,255,.24);
    overflow: hidden;

    @include breakpoint(md) {
      width: 40rem;
    }
  }

  .progress-bar {
    height: 2px;
    background: rgba(255,255,255,1);
    border-radius: 200px;
    transform: scaleX(0);
    transform-origin: left;
    will-change: transform;
  }

</style>


<!-- logic -->
<script>

  export default {
    mounted() {
      // const, let, var
      const footer = document.querySelector('footer')
      const progressContainer = document.querySelector('.progress-container')
      const progressBar = document.querySelector('.progress-bar')
      const scroll = document.querySelector('.scroll')
      const list = document.querySelector('ul')
      const listContent = document.querySelector('li')
      const scrollLeft = document.querySelector('.scroll-left')
      const scrollOr = document.querySelector('.or')
      const scrollRight = document.querySelector('.scroll-right')
      let currentPixel = list.scrollLeft

      // mouse position - show subtext y >= 200
      document.addEventListener('mousemove', mousePosition)
      function mousePosition(e) {
        if (e.y > 200) { scroll.style.opacity = '.8' }
        else { scroll.style.opacity = '0' }
      }
      // show hide subtext / progress bar lgogic
      list.addEventListener('scroll', () => {
        const winScroll = list.scrollLeft || list.scrollLeft
        const width = list.scrollWidth - list.clientWidth
        const scrolled = (winScroll / width)
        progressBar.style.transform = `scaleX( ${scrolled} )`

        if (scrolled > .2) { scrollLeft.style.display = 'inline', scrollOr.style.display = 'inline' }
        else { scrollLeft.style.display = 'none', scrollOr.style.display = 'none' }

        if (scrolled >= .8) { scrollRight.style.display = 'none', scrollOr.style.display = 'none' }
        else { scrollRight.style.display = 'inline' }
      })
    }
  }

</script>
