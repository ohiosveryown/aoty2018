<!-- layout -->
<template>
  <ul class="debug">


      <li class="">
        <nuxt-link to='/test'>
          <h3 class="f-mabry mb-2 tar">5</h3>
          <figure class="">
            <img src="@/assets/img/matt/10.jpg" alt="Saba">
            <figcaption class="f-mabry">Care for Me — Rap/Hip-Hop</figcaption>
          </figure>

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
    align-items: center;
    max-height: 100vh; height: 100vh;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar { display: none; } // safari & chrome
  }

  li {
    margin-right: 1.6rem;
    height: 28.8rem;
    flex: 0 0 34%;
    background: lightblue;
    transition: transform .25s ease;
    will-change: transform;
  }

  li:nth-of-type(1) { background: none; }

  figure {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  img { object-fit: cover; }
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
