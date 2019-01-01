<!-- layout -->
<template>
<main>

  <navigation/>
  <!-- 🛌 -->
  <div class="cover-01"/>
  <div class="cover-02"/>
  <div class="cover-03"/>
  <div class="about-cover"/>

  <ul class="">
    <!-- 🎧 -->
    <li class="linkOne">
      <nuxt-link to='/k2/how-to'>
        <h3 class="f-mabry tar"><span class="op-2">KF </span>5</h3>
        <figure class="">
          <img class="" src="@/assets/img/k2/05.jpg" alt="Rainbow Kitten Surprise">
          <figcaption class="f-mabry">How To: Friend<span>, Love, Freefall</span>  — Alternative</figcaption>
          <h5 class="f-space">Rainbow Kitten Surprise</h5>
        </figure>
      </nuxt-link>
    </li>

    <!-- 🎧 -->
    <!-- 🎧 -->
    <li class="linkTwo">
      <nuxt-link to='/k2/isolation'>
        <h3 class="f-mabry tar"><span class="op-2">KF </span>4</h3>
        <figure class="">
          <img class="" src="@/assets/img/matt/03.jpg" alt="Kali Uchis">
          <figcaption class="f-mabry">Isolation — R&amp;B/Soul</figcaption>
          <h5 class="f-space">Kali Uchis</h5>
        </figure>
      </nuxt-link>
    </li>

    <!-- 🎧 -->
    <li class="linkThree">
      <nuxt-link to='/k2/love-me-love-me-not'>
        <h3 class="f-mabry tar"><span class="op-2">KF </span>3</h3>
        <figure class="">
          <img class="" src="@/assets/img/k2/03.jpg" alt="HONNE">
          <figcaption class="f-mabry">Love Me / Love Me Not — Alternative</figcaption>
          <h5 class="f-space">HONNE</h5>
        </figure>
      </nuxt-link>
    </li>

    <!-- 🎧 -->
    <li class="linkFour">
      <nuxt-link to='/k2/good-thing'>
        <h3 class="f-mabry tar"><span class="op-2">KF </span>2</h3>
        <figure class="">
          <img class="" src="@/assets/img/k2/02.jpg" alt="Leon Bridges">
          <figcaption class="f-mabry">Good Thing — R&amp;B/Soul</figcaption>
          <h5 class="f-space">Leon Bridges</h5>
        </figure>
      </nuxt-link>
    </li>

    <!-- 🎧 -->
    <li class="linkFive">
      <nuxt-link to='/k2/hive-mind'>
        <h3 class="f-mabry tar"><span class="op-2">KF </span>1</h3>
        <figure class="">
          <img class="" src="@/assets/img/k2/01.jpg" alt="The Internet">
          <figcaption class="f-mabry">Hive Mind — R&amp;B</figcaption>
          <h5 class="f-space">The Internet</h5>
        </figure>
      </nuxt-link>
    </li>

    <!-- ➡️ -->
    <li class="linkNext">
      <nuxt-link to='/'>
        <h3 class="f-mabry tar">⇝</h3>
        <figure class="">
          <img class="" src="@/assets/img/blank.jpg" alt="Next List">
          <figcaption class="f-mabry">Next Album List</figcaption>
          <h5 class="f-space">Presented by Roy</h5>
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
    @include breakpoint(lg)  { margin-top: -11.2rem; }
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
  .cover-01, .cover-02, .cover-03, .about-cover {
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

  .about-cover {
    // z-index: var(--z4);
    height: 100vh;
    background: #0b0b0b;
    transform: scaleX(1) translateY(-100vh);
  }

  .about-cover-active { transform: translateY(0);}
  .cover-01-active, .cover-02-active, .cover-03-active { transform: scaleX(1); }
  .cover-02-active { transition: all 800ms cubic-bezier(0.770, 0, 0.175, 1) 150ms; }
  .cover-03-active { transition: all 800ms cubic-bezier(0.770, 0, 0.175, 1) 300ms; }

  .homeFade-enter-active { transition: all 1600ms ease; }
  .homeFade-leave-active { transition: all 100ms ease; }
  .homeFade-enter, .homeFade-active { opacity: 0; }

</style>


<!-- logic -->
<script>
  import navigation from '@/components/navigation.vue'
  export default {
    transition: {
      name: 'homeFade',
      mode: 'out-in'
    },
    components: { navigation },
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

      // about logic
      const navTrigger = document.querySelector('.nav-trigger')
      const aboutCover = document.querySelector('.about-cover')

      navTrigger.addEventListener('click', () => {
        aboutCover.classList.add('about-cover-active')
      })

      // const, let, var
      const coverOne = document.querySelector('.cover-01')
      const coverTwo = document.querySelector('.cover-02')
      const coverThree = document.querySelector('.cover-03')
      let linkOne = document.querySelector('.linkOne')
      let linkTwo = document.querySelector('.linkTwo')
      let linkThree = document.querySelector('.linkThree')
      let linkFour = document.querySelector('.linkFour')
      let linkFive = document.querySelector('.linkFive')
      // let linkSix = document.querySelector('.linkSix')
      // let linkSeven = document.querySelector('.linkSeven')
      // let linkEight = document.querySelector('.linkEight')
      // let linkNine = document.querySelector('.linkNine')
      // let linkTen = document.querySelector('.linkTen')
      let linkNext = document.querySelector('.linkNext')
      // // link cover logic
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
      // linkSix.addEventListener('click', () => {
      //   coverOne.classList.add('cover-01-active')
      //   coverTwo.classList.add('cover-02-active')
      //   coverThree.classList.add('cover-03-active')
      // })
      // linkSeven.addEventListener('click', () => {
      //   coverOne.classList.add('cover-01-active')
      //   coverTwo.classList.add('cover-02-active')
      //   coverThree.classList.add('cover-03-active')
      // })
      // linkEight.addEventListener('click', () => {
      //   coverOne.classList.add('cover-01-active')
      //   coverTwo.classList.add('cover-02-active')
      //   coverThree.classList.add('cover-03-active')
      // })
      // linkNine.addEventListener('click', () => {
      //   coverOne.classList.add('cover-01-active')
      //   coverTwo.classList.add('cover-02-active')
      //   coverThree.classList.add('cover-03-active')
      // })
      // linkTen.addEventListener('click', () => {
      //   coverOne.classList.add('cover-01-active')
      //   coverTwo.classList.add('cover-02-active')
      //   coverThree.classList.add('cover-03-active')
      // })
    }
  }

</script>
