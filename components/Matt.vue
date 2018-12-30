<!-- layout -->
<template>
<main>

  <!-- 🛌 -->
  <div class="cover-01"/>
  <div class="cover-02"/>
  <div class="cover-03"/>

  <ul class="">
    <!-- 🎧 -->
    <li class="linkOne">
      <nuxt-link to='/care-for-me'>
        <h3 class="f-mabry tar">10</h3>
        <figure class="">
          <img class="" src="@/assets/img/matt/10.jpg" alt="Saba">
          <figcaption class="f-mabry">Care for Me — Rap/Hip-Hop</figcaption>
          <h5 class="f-space">Saba</h5>
        </figure>
      </nuxt-link>
    </li>

    <!-- 🎧 -->
    <li class="linkTwo">
      <nuxt-link to='/kod'>
        <h3 class="f-mabry tar">9</h3>
        <figure class="">
          <img class="" src="@/assets/img/matt/09.jpg" alt="J.Cole">
          <figcaption class="f-mabry">KOD — Rap/Hip-Hop</figcaption>
          <h5 class="f-space">J.Cole</h5>
        </figure>
      </nuxt-link>
    </li>

    <!-- 🎧 -->
    <li class="linkThree">
      <nuxt-link to='/tell-me-how-you'>
        <h3 class="f-mabry tar">8</h3>
        <figure class="">
          <img class="" src="@/assets/img/matt/08.jpg" alt="Coutney Barnett">
          <figcaption class="f-mabry">Tell Me How You <span>Really Feel</span> — Alternative</figcaption>
          <h5 class="f-space">Coutney Barnett</h5>
        </figure>
      </nuxt-link>
    </li>

    <!-- 🎧 -->
    <li class="linkFour">
      <nuxt-link to='/forever-and-ever'>
        <h3 class="f-mabry tar">7</h3>
        <figure class="">
          <img class="" src="@/assets/img/matt/07.jpg" alt="Sales">
          <figcaption class="f-mabry">Forever and Ever — Alternative</figcaption>
          <h5 class="f-space">Sales</h5>
        </figure>
      </nuxt-link>
    </li>

    <!-- 🎧 -->
    <li class="linkFive">
      <nuxt-link to='/running-to-the-sun'>
        <h3 class="f-mabry tar">6</h3>
        <figure class="">
          <img class="" src="@/assets/img/matt/06.jpg" alt="St. Beauty">
          <figcaption class="f-mabry">Running to the Sun — R&amp;B</figcaption>
          <h5 class="f-space">St. Beauty</h5>
        </figure>
      </nuxt-link>
    </li>

    <!-- 🎧 -->
    <li class="linkSix">
      <nuxt-link to='/tranquility-base'>
        <h3 class="f-mabry tar">5</h3>
        <figure class="">
          <img class="" src="@/assets/img/matt/05.jpg" alt="Arctic Monkeys">
          <figcaption class="f-mabry">Tranquility Base <span>Hotel &amp; Casino</span> — Alternative</figcaption>
          <h5 class="f-space">Arctic Monkeys</h5>
        </figure>
      </nuxt-link>
    </li>

    <!-- 🎧 -->
    <li class="linkSeven">
      <nuxt-link to='/con-todo-el-mundo'>
        <h3 class="f-mabry tar">4</h3>
        <figure class="">
          <img class="" src="@/assets/img/matt/04.jpg" alt="Khruangbin">
          <figcaption class="f-mabry">Con Todo <span>El Mundo</span> — Alternative</figcaption>
          <h5 class="f-space">Khruangbin</h5>
        </figure>
      </nuxt-link>
    </li>

    <!-- 🎧 -->
    <li class="linkEight">
      <nuxt-link to='/isolation'>
        <h3 class="f-mabry tar">3</h3>
        <figure class="">
          <img class="" src="@/assets/img/matt/03.jpg" alt="Kali Uchis">
          <figcaption class="f-mabry">Isolation — R&amp;B/Soul</figcaption>
          <h5 class="f-space">Kali Uchis</h5>
        </figure>
      </nuxt-link>
    </li>

    <!-- 🎧 -->
    <li class="linkNine">
      <nuxt-link to='/feels'>
        <h3 class="f-mabry tar">2</h3>
        <figure class="">
          <img class="" src="@/assets/img/matt/02.jpg" alt="Snoh Aalegra">
          <figcaption class="f-mabry">FEELS — R&amp;B/Soul</figcaption>
          <h5 class="f-space">Snoh Aalegra</h5>
        </figure>
      </nuxt-link>
    </li>

    <!-- 🎧 -->
    <li class="linkTen">
      <nuxt-link to='/whack-world'>
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
  // main styles
  ul {
    display: flex;
    align-items: center;
    max-height: 84vh; height: 100vh;
    overflow-y: hidden;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar { display: none; } // safari & chrome
    @include breakpoint(mdl) { max-height: 90vh; height: 100vh; }
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

  // cover
  .cover-01, .cover-02, .cover-03 {
    position: fixed;
    top: 0; left: 0;
    z-index: var(--zmax);
    width: 100vw; height: 35vh;
    background: #28262a;
    transform: scaleX(0);
    transform-origin: left;
    transition: all 800ms cubic-bezier(0.770, 0, 0.175, 1);
    will-change: transform;
  }

  .cover-02 { top: 33vh; }
  .cover-03 { top: 66vh; }

  .cover-01-active, .cover-02-active, .cover-03-active { transform: scaleX(1); }
  .cover-02-active { transition: all 800ms cubic-bezier(0.770, 0, 0.175, 1) 150ms; }
  .cover-03-active { transition: all 800ms cubic-bezier(0.770, 0, 0.175, 1) 300ms; }

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

      // const, let, var
      const coverOne = document.querySelector('.cover-01')
      const coverTwo = document.querySelector('.cover-02')
      const coverThree = document.querySelector('.cover-03')
      let linkOne = document.querySelector('.linkOne')
      let linkTwo = document.querySelector('.linkTwo')
      let linkThree = document.querySelector('.linkThree')
      let linkFour = document.querySelector('.linkFour')
      let linkFive = document.querySelector('.linkFive')
      let linkSix = document.querySelector('.linkSix')
      let linkSeven = document.querySelector('.linkSeven')
      let linkEight = document.querySelector('.linkEight')
      let linkNine = document.querySelector('.linkNine')
      let linkTen = document.querySelector('.linkTen')

      // link cover logic
      linkOne.addEventListener('click', () => {
        coverOne.classList.add('cover-01-active')
        coverTwo.classList.add('cover-02-active')
        coverThree.classList.add('cover-03-active')
      })
      linkTwo.addEventListener('click', () => {
        coverOne.classList.add('cover-01-active')
        coverTwo.classList.add('cover-02-active')
        coverThree.classList.add('cover-03-active')
      })
      linkThree.addEventListener('click', () => {
        coverOne.classList.add('cover-01-active')
        coverTwo.classList.add('cover-02-active')
        coverThree.classList.add('cover-03-active')
      })
      linkFour.addEventListener('click', () => {
        coverOne.classList.add('cover-01-active')
        coverTwo.classList.add('cover-02-active')
        coverThree.classList.add('cover-03-active')
      })
      linkFive.addEventListener('click', () => {
        coverOne.classList.add('cover-01-active')
        coverTwo.classList.add('cover-02-active')
        coverThree.classList.add('cover-03-active')
      })
      linkSix.addEventListener('click', () => {
        coverOne.classList.add('cover-01-active')
        coverTwo.classList.add('cover-02-active')
        coverThree.classList.add('cover-03-active')
      })
      linkSeven.addEventListener('click', () => {
        coverOne.classList.add('cover-01-active')
        coverTwo.classList.add('cover-02-active')
        coverThree.classList.add('cover-03-active')
      })
      linkEight.addEventListener('click', () => {
        coverOne.classList.add('cover-01-active')
        coverTwo.classList.add('cover-02-active')
        coverThree.classList.add('cover-03-active')
      })
      linkNine.addEventListener('click', () => {
        coverOne.classList.add('cover-01-active')
        coverTwo.classList.add('cover-02-active')
        coverThree.classList.add('cover-03-active')
      })
      linkTen.addEventListener('click', () => {
        coverOne.classList.add('cover-01-active')
        coverTwo.classList.add('cover-02-active')
        coverThree.classList.add('cover-03-active')
      })
    }
  }

</script>
