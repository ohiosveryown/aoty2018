<!-- layout -->
<template>
  <ul class="debug">


      <li class="">
        <nuxt-link to='/test'>
          <h3 class="f-mabry tar">5</h3>
          <figure class="">
            <img class="" src="@/assets/img/matt/10.jpg" alt="Saba">
            <figcaption class="f-mabry">Care for Me — Rap/Hip-Hop</figcaption>
          </figure>
          <h5 class="f-space">Saba</h5>
        </nuxt-link>
      </li>



    <li>02</li>
    <li>03</li>
    <li>04</li>
    <li>05</li>
    <li>06</li>

  </ul>
</template>


<!-- style -->
<style scoped lang="scss">
  @import '@/assets/mq.scss';

  ul {
    display: flex;
    max-height: 100vh; height: 100vh;
    overflow-y: hidden;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar { display: none; } // safari & chrome

    @include breakpoint(md) {
      align-items: center;
    }
  }

  li {
    flex: 0 0 80%;
    margin-right: 1.6rem;
    height: 64vh;
    background: lightblue;
    transition: transform .25s ease;
    will-change: transform;

    @include breakpoint(mdl) { height: 28.8rem; flex-basis: 34%; }
  }

  li:nth-of-type(1) { background: none; }

  li h3 { margin-bottom: 1rem; }

  li figure {
    display: flex;
    flex-direction: column;
    height: 100%;
    @include breakpoint(md) { margin-bottom: 4rem; }
  }


  li img {
    margin-bottom: .8rem;
    height: 100%;
    object-fit: cover;
    @include breakpoint(md) { margin-bottom: 1.6rem; }
  }

</style>


<!-- logic -->
<script>

  export default {
    mounted() {
      const list = document.querySelector('ul')
      const listContent = document.querySelector('li')
      let currentPixel = list.scrollLeft

      function mousePosition(e) {
        if (e.y > 200) { scroll.style.opacity = '.8' }
        else { scroll.style.opacity = '0' }
      }

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
