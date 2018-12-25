<!-- layout -->
<template>
  <ul>

    <li><img src="@/assets/img/d01.jpg" alt=""></li>
    <li><img src="@/assets/img/d02.jpg" alt=""></li>
    <li><img src="@/assets/img/d03.jpg" alt=""></li>
    <li><img src="@/assets/img/d04.jpg" alt=""></li>
    <li><img src="@/assets/img/d05.jpg" alt=""></li>

  </ul>
</template>


<!-- style -->
<style scoped lang="scss">
  @import '@/assets/mq.scss';

  ul {
    display: flex;
    max-height: 100vh; height: 100vh;
    overflow-x: scroll;
    -webkit-oveflow-scroll: touch;

    @include breakpoint(mdl) {
      align-items: center;
    }
  }

  ul::-webkit-scrollbar {
    display: none;  // Safari and Chrome
  }

  li {
    margin: 24px;
    min-width: 38vw; height: 28.8rem;
    overflow: hidden;
    // background: var(--cloud);
    color: var(--gravity);
    transition: transform 250ms ease;
    will-change: transform;
  }

  li:hover {
    @include breakpoint(mdl) {
      img { transform: scale(1.1); }
    }
  }

  li:nth-of-type(1) {
    margin-left: 0;
  }

  img {
    height: 100%;
    object-fit: cover;
    transition: transform 5000ms ease;
    will-change: transform;
  }

</style>


<!-- logic -->
<script>

  export default {
    mounted() {
      const list = document.querySelector('ul')
      let currentPixel = list.scrollLeft

      const looper = () => {
        const newPixel = list.scrollLeft
        const diff = newPixel - currentPixel
        const speed = -diff * .15

        list.style.transform = "skewX(" + speed +"deg)"
        currentPixel = newPixel
        requestAnimationFrame(looper)
      }

      looper()
    }
  }

</script>
