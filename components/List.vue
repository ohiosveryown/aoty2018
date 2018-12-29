<!-- layout -->
<template>
  <section>

    <div class="cover-01"/>
    <div class="cover-02"/>
    <div class="cover-03"/>

    <ul class="">

      <!-- 🎧 -->
      <li class="">
        <nuxt-link class="linkOne" to="/test">
          <h3 class="f-mabry mb-2 tar">5</h3>
          <figure class="mb-3">
            <img src="@/assets/img/d01.jpg" alt="">
          </figure>
          <figcaption><h3 class="mb-0 f-mabry">Kids See Ghosts — Rap/Hip-Hop</h3></figcaption>
          <h5 class="f-space">Kids See Ghosts</h5>
        </nuxt-link>
      </li>

      <!-- 🎧 -->
      <li>
        <a href="#">
          <h3 class="f-mabry mb-2 tar">4</h3>
          <figure class="mb-3">
            <img src="@/assets/img/d02.jpg" alt="">
          </figure>
          <figcaption><h3 class="mb-0 f-mabry">Kids See Ghosts — Rap/Hip-Hop</h3></figcaption>
          <h5 class="f-space">Kids See Ghosts</h5>
        </a>
      </li>

      <!-- 🎧 -->
      <li>
        <a href="#">
          <h3 class="f-mabry mb-2 tar">3</h3>
          <figure class="mb-3">
            <img src="@/assets/img/d03.jpg" alt="">
          </figure>
          <figcaption><h3 class="mb-0 f-mabry">Kids See Ghosts — Rap/Hip-Hop</h3></figcaption>
          <h5 class="f-space">Kids See Ghosts</h5>
        </a>
      </li>

      <!-- 🎧 -->
      <li>
        <a href="#">
          <h3 class="f-mabry mb-2 tar">2</h3>
          <figure class="mb-3">
            <img src="@/assets/img/d04.jpg" alt="">
          </figure>
          <figcaption><h3 class="mb-0 f-mabry">Kids See Ghosts — Rap/Hip-Hop</h3></figcaption>
          <h5 class="f-space">Kids See Ghosts</h5>
        </a>
      </li>

      <!-- 🎧 -->
      <li>
        <a href="#">
          <h3 class="f-mabry mb-2 tar">1</h3>
          <figure class="mb-3">
            <img src="@/assets/img/d06.jpg" alt="">
          </figure>
          <figcaption><h3 class="mb-0 f-mabry">Kids See Ghosts — Rap/Hip-Hop</h3></figcaption>
          <h5 class="f-space">Kids See Ghosts</h5>
        </a>
      </li>

    </ul>

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

  </section>
</template>


<!-- style -->
<style scoped lang="scss">
  @import '@/assets/mq.scss';

  ul {
    display: flex;
    max-height: 100vh; height: 80vh;
    color: var(--cloud);
    overflow-x: scroll;
    -webkit-oveflow-scroll: touch;
    white-space: nowrap;

    @include breakpoint(mdl) {
      height: 100vh;
      align-items: center;
    }
  }

  ul::-webkit-scrollbar {
    display: none;  // safari and shrome
  }

  li {
    margin: 9.6rem .8rem .8rem;
    // transform: translateY(8rem);
    height: 70%;
    transition: transform 500ms ease 900ms;
    will-change: transform;
    -webkit-oveflow-scroll: touch;

    @include breakpoint(md) {
      margin: calc(var(--unit) * 3);
      margin: 6.4rem 2.4rem 2.4rem;
      transform: translateY(6.4rem);
    }
  }

  // li:nth-of-type(1) { transform: translateY(-10rem); }
  // li:nth-of-type(2) { transform: translateY(0rem); }
  // li:nth-of-type(3) { transform: translateY(-8rem); }

  li:hover {
    @include breakpoint(mdl) {
      img { transform: scale(1.1); }
    }
  }

  li:nth-of-type(1) {
    margin-left: 0;
  }

  figure {
    min-width: 88vw; height: 36rem;
    overflow: hidden;
    box-shadow: 0 0 40px 0 rgba(0,0,0,1);

    @include breakpoint(md) {
      min-width: 38vw; max-width: 54.4rem; height: 28.8rem;
    }
  }

  img {
    height: 100%;
    object-fit: cover;
    transition: transform 5000ms ease;
    will-change: transform;
  }

  footer {
    // border: 1px solid pink;
    position: fixed;
    bottom: 4rem;
    width: 100vw;

    @include breakpoint(md) { bottom: 6.4rem; }
  }

  .scroll {
    transition: opacity 400ms ease;
    opacity: 0;
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

  .cover-01, .cover-02, .cover-03 {
    position: fixed;
    top: 0; left: 0;
    z-index: var(--zmax);
    width: 100vw; height: 34vh;
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

      const coverOne = document.querySelector('.cover-01')
      const coverTwo = document.querySelector('.cover-02')
      const coverThree = document.querySelector('.cover-03')
      const link = document.querySelector('.linkOne')

      link.addEventListener('click', () => {
        coverOne.classList.add('cover-01-active')
        coverTwo.classList.add('cover-02-active')
        coverThree.classList.add('cover-03-active')
      })

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

      document.addEventListener('mousemove', mousePosition)

      function mousePosition(e) {
        // console.log(e.y)

        if (e.y > 200) { scroll.style.opacity = '.8' }
        else { scroll.style.opacity = '0' }
      }

      // const looper = () => {
      //   const newPixel = list.scrollLeft
      //   const diff = newPixel - currentPixel
      //   const speed = -diff * .15
      //
      //   list.style.transform = "skewX(" + speed +"deg)"
      //   currentPixel = newPixel
      //   requestAnimationFrame(looper)
      // }
      //
      // looper()

      list.addEventListener('scroll', () => {
        const winScroll = list.scrollLeft || list.scrollLeft
        const width = list.scrollWidth - list.clientWidth
        const scrolled = (winScroll / width)
        progressBar.style.transform = `scaleX( ${scrolled} )`
        // console.log(scrolled)

        if (scrolled > .2) { scrollLeft.style.display = 'inline', scrollOr.style.display = 'inline' }
        else { scrollLeft.style.display = 'none', scrollOr.style.display = 'none' }

        if (scrolled >= .8) { scrollRight.style.display = 'none', scrollOr.style.display = 'none' }
        else { scrollRight.style.display = 'inline' }
      })
    }
  }

</script>
