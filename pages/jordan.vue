<!-- layout -->
<template>
<main>

  <navigation/>
  <!-- 🛌 -->
  <div class="cover-01"/>
  <div class="cover-02"/>
  <div class="cover-03"/>
  <div class="about-cover"/>

  <!-- 🛌 -->
  <div class="detail-cover-out"/>
  <div class="detail-cover-01"/>
  <div class="detail-cover-02"/>
  <div class="detail-cover-03"/>

  <Scrolling/>

  <!-- friends -->
  <h5 class="op-5 subtitle f-space">Jordan's List</h5>

  <ul class="">
    <!-- 🎧 -->
    <li class="linkOne">
      <nuxt-link to='/jj/isolation'>
        <h3 class="f-mabry tar"><span class="op-2">JJ </span>4</h3>
        <figure class="">
          <img class="" src="@/assets/img/jj/05.jpg" alt="Travis Scott">
          <figcaption class="f-mabry">Astroworld — Rap/Hip-Hop</figcaption>
          <h5 class="f-space">Travis Scott</h5>
        </figure>
      </nuxt-link>
    </li>

    <!-- 🎧 -->
    <li class="linkTwo">
      <nuxt-link to='/jj/isolation'>
        <h3 class="f-mabry tar"><span class="op-2">JJ </span>4</h3>
        <figure class="">
          <img class="" src="@/assets/img/matt/03.jpg" alt="Travis Scott">
          <figcaption class="f-mabry">Astroworld — Rap/Hip-Hop</figcaption>
          <h5 class="f-space">Travis Scott</h5>
        </figure>
      </nuxt-link>
    </li>

    <!-- 🎧 -->
    <li class="linkThree">
      <nuxt-link to='/jj/love-me-love-me-not'>
        <h3 class="f-mabry tar"><span class="op-2">JJ </span>3</h3>
        <figure class="">
          <img class="" src="@/assets/img/k2/03.jpg" alt="HONNE">
          <figcaption class="f-mabry">Love Me <span>/ Love Me Not</span> — Alternative</figcaption>
          <h5 class="f-space">HONNE</h5>
        </figure>
      </nuxt-link>
    </li>

    <!-- 🎧 -->
    <li class="linkFour">
      <nuxt-link to='/jj/good-thing'>
        <h3 class="f-mabry tar"><span class="op-2">JJ </span>2</h3>
        <figure class="">
          <img class="" src="@/assets/img/k2/02.jpg" alt="Leon Bridges">
          <figcaption class="f-mabry">Good Thing — R&amp;B/Soul</figcaption>
          <h5 class="f-space">Leon Bridges</h5>
        </figure>
      </nuxt-link>
    </li>

    <!-- 🎧 -->
    <li class="linkFive">
      <nuxt-link to='/jj/hive-mind'>
        <h3 class="f-mabry tar"><span class="op-2">JJ </span>1</h3>
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
          <h5 class="f-space">Presented by Matt</h5>
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
  .subtitle {
    display: flex;
    position: absolute;
    top: 4rem; left: 50%;
    transform: translateX(-50%);
    max-width: var(--max_width);
    width: 88vw;

    @include breakpoint(md) { top: 5.6rem; }
  }

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
    margin-right: 1.6rem;
    height: 64vh;
    transition: transform 250ms ease;
    will-change: transform;
    @include breakpoint(md)  { margin-top: -1.6rem; height: 40rem; }
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
    background: #0b0b0b;
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

  .detail-cover-01, .detail-cover-02, .detail-cover-03 {
    position: fixed;
    top: 0; left: 0;
    z-index: var(--zmax);
    width: 100vw; height: 35vh;
    background: #0b0b0b;
    transform: scaleX(1);
    transform-origin: right;
    will-change: transform;
  }

  .detail-cover-02 { top: 33vh; }
  .detail-cover-03 { top: 66vh; height: 34vh; }

  @keyframes coverOneIn {
    from { transform: scaleX(1); }
    to   { transform: scaleX(0); }
  }

  .about-cover-active { transform: translateY(0);}
  .detail-cover-01 { animation: coverOneIn 1000ms cubic-bezier(0.770, 0, 0.175, 1); animation-fill-mode: forwards; }
  .detail-cover-02 { animation: coverOneIn 1000ms cubic-bezier(0.770, 0, 0.175, 1); animation-fill-mode: forwards; animation-delay: 150ms; }
  .detail-cover-03 { animation: coverOneIn 1000ms cubic-bezier(0.770, 0, 0.175, 1); animation-fill-mode: forwards; animation-delay: 300ms; }

</style>


<!-- logic -->
<script>
  import navigation from '@/components/navigation.vue'
  import Scrolling from '@/components/Scrolling.vue'
  export default {
    // transition: {
    //   name: 'homeFade',
    //   mode: 'out-in'
    // },
    components: { navigation, Scrolling },
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

      // back to home page transition
      let homeLink = document.querySelector('.home-link')
      homeLink.addEventListener('click', () => {
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
      linkNext.addEventListener('click', () => {
        coverOne.classList.add('cover-01-active')
        coverTwo.classList.add('cover-02-active')
        coverThree.classList.add('cover-03-active')
      })
    }
  }

</script>
