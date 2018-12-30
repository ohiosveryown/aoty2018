<!-- layout -->
<template>
<main>

  <ul class="debug">
    <!-- 🎧 -->
    <li class="">
      <nuxt-link to='/test'>
        <h3 class="f-mabry tar">10</h3>
        <figure class="">
          <img class="" src="@/assets/img/matt/10.jpg" alt="Saba">
          <figcaption class="f-mabry">Care for Me — Rap/Hip-Hop</figcaption>
          <h5 class="f-space">Saba</h5>
        </figure>
      </nuxt-link>
    </li>

    <!-- 🎧 -->
    <li class="">
      <nuxt-link to='/test'>
        <h3 class="f-mabry tar">9</h3>
        <figure class="">
          <img class="" src="@/assets/img/matt/09.jpg" alt="J.Cole">
          <figcaption class="f-mabry">KOD — Rap/Hip-Hop</figcaption>
          <h5 class="f-space">J.Cole</h5>
        </figure>
      </nuxt-link>
    </li>

    <!-- 🎧 -->
    <li class="">
      <nuxt-link to='/test'>
        <h3 class="f-mabry tar">8</h3>
        <figure class="">
          <img class="" src="@/assets/img/matt/08.jpg" alt="Coutney Barnett">
          <figcaption class="f-mabry">Tell Me How You <span>Really Feel</span> — Alternative</figcaption>
          <h5 class="f-space">Coutney Barnett</h5>
        </figure>
      </nuxt-link>
    </li>

    <!-- 🎧 -->
    <li class="">
      <nuxt-link to='/test'>
        <h3 class="f-mabry tar">7</h3>
        <figure class="">
          <img class="" src="@/assets/img/matt/07.jpg" alt="Sales">
          <figcaption class="f-mabry">Forever and Ever — Alternative</figcaption>
          <h5 class="f-space">Sales</h5>
        </figure>
      </nuxt-link>
    </li>

    <!-- 🎧 -->
    <li class="">
      <nuxt-link to='/test'>
        <h3 class="f-mabry tar">6</h3>
        <figure class="">
          <img class="" src="@/assets/img/matt/06.jpg" alt="St. Beauty">
          <figcaption class="f-mabry">Running to the Sun — R&amp;B</figcaption>
          <h5 class="f-space">St. Beauty</h5>
        </figure>
      </nuxt-link>
    </li>

    <!-- 🎧 -->
    <li class="">
      <nuxt-link to='/test'>
        <h3 class="f-mabry tar">5</h3>
        <figure class="">
          <img class="" src="@/assets/img/matt/05.jpg" alt="Arctic Monkeys">
          <figcaption class="f-mabry">Tranquility Base <span>Hotel &amp; Casino</span> — Alternative</figcaption>
          <h5 class="f-space">Arctic Monkeys</h5>
        </figure>
      </nuxt-link>
    </li>

    <!-- 🎧 -->
    <li class="">
      <nuxt-link to='/test'>
        <h3 class="f-mabry tar">4</h3>
        <figure class="">
          <img class="" src="@/assets/img/matt/04.jpg" alt="Khruangbin">
          <figcaption class="f-mabry">Con Todo <span>El Mundo</span> — Alternative</figcaption>
          <h5 class="f-space">Khruangbin</h5>
        </figure>
      </nuxt-link>
    </li>

    <!-- 🎧 -->
    <li class="">
      <nuxt-link to='/test'>
        <h3 class="f-mabry tar">3</h3>
        <figure class="">
          <img class="" src="@/assets/img/matt/03.jpg" alt="Kali Uchis">
          <figcaption class="f-mabry">Isolation — R&amp;B/Soul</figcaption>
          <h5 class="f-space">Kali Uchis</h5>
        </figure>
      </nuxt-link>
    </li>

    <!-- 🎧 -->
    <li class="">
      <nuxt-link to='/test'>
        <h3 class="f-mabry tar">2</h3>
        <figure class="">
          <img class="" src="@/assets/img/matt/02.jpg" alt="Snoh Aalegra">
          <figcaption class="f-mabry">FEELS — R&amp;B/Soul</figcaption>
          <h5 class="f-space">Snoh Aalegra</h5>
        </figure>
      </nuxt-link>
    </li>

    <!-- 🎧 -->
    <li class="">
      <nuxt-link to='/test'>
        <h3 class="f-mabry tar">1</h3>
        <figure class="">
          <img class="" src="@/assets/img/matt/01.jpg" alt="Tierra Whack">
          <figcaption class="f-mabry">Whack World — Rap/Hip-Hop</figcaption>
          <h5 class="f-space">Tierra Whack</h5>
        </figure>
      </nuxt-link>
    </li>
  </ul>

</main>
</template>


<!-- style -->
<style scoped lang="scss">
  @import '@/assets/mq.scss';

  ul {
    display: flex;
    align-items: center;
    max-height: 84vh; height: 100vh;
    overflow-y: hidden;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar { display: none; } // safari & chrome
    @include breakpoint(mdl) { max-height: 96vh; height: 100vh; }
    @include breakpoint(lg)  { max-height: 100vh; height: 100vh; }
  }

  li {
    flex: 0 0 80%;
    margin-top: -1.6rem;
    margin-right: 1.6rem;
    height: 64vh;
    transition: transform 250ms ease;
    will-change: transform;
    @include breakpoint(md)  { height: 40rem; }
    @include breakpoint(mdl) { margin-top: -8rem; height: 28.8rem; flex-basis: 40%; }
    @include breakpoint(lg)  { margin-top: -5.6rem; }
  }

  li h3 { margin-bottom: 1rem; }

  li figure {
    display: flex;
    flex-direction: column;
    height: 100%;
  }


  li img {
    margin-bottom: .8rem;
    height: 100%;
    object-fit: cover;
    @include breakpoint(md) { margin-bottom: 1.6rem; }
  }

  li span {
    display: none;
    @include breakpoint(md) { display: inline; }
  }

</style>


<!-- logic -->
<script>

  export default {
    mounted() {
      // const, let, var
      const list = document.querySelector('ul')
      const listContent = document.querySelector('li')
      let currentPixel = list.scrollLeft
      // skew logic
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
