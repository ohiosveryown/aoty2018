<!-- layout -->
<template>
  <section>

    <ul>

      <!-- 🎧 -->
      <li>
        <a href="#">
          <h3 class="mb-2 tar">5</h3>
          <figure>
            <img src="@/assets/img/d01.jpg" alt="">
          </figure>
          <figcaption>Kids See Ghosts — Rap/Hip-Hop</figcaption>
          <span>Kids See Ghosts</span>
        </a>
      </li>

      <!-- 🎧 -->
      <li>
        <a href="#">
          <h3 class="mb-2 tar">4</h3>
          <figure>
            <img src="@/assets/img/d02.jpg" alt="">
          </figure>
          <figcaption>Kids See Ghosts — Rap/Hip-Hop</figcaption>
          <span>Kids See Ghosts</span>
        </a>
      </li>

      <!-- 🎧 -->
      <li>
        <a href="#">
          <h3 class="mb-2 tar">3</h3>
          <figure>
            <img src="@/assets/img/d03.jpg" alt="">
          </figure>
          <figcaption>Kids See Ghosts — Rap/Hip-Hop</figcaption>
          <span>Kids See Ghosts</span>
        </a>
      </li>

      <!-- 🎧 -->
      <li>
        <a href="#">
          <h3 class="mb-2 tar">2</h3>
          <figure>
            <img src="@/assets/img/d04.jpg" alt="">
          </figure>
          <figcaption>Kids See Ghosts — Rap/Hip-Hop</figcaption>
          <span>Kids See Ghosts</span>
        </a>
      </li>

      <!-- 🎧 -->
      <li>
        <a href="#">
          <h3 class="mb-2 tar">1</h3>
          <figure>
            <img src="@/assets/img/d06.jpg" alt="">
          </figure>
          <figcaption>Kids See Ghosts — Rap/Hip-Hop</figcaption>
          <span>Kids See Ghosts</span>
        </a>
      </li>

    </ul>

    <footer>
      <div class="progress-container">
        <div class="progress-bar" id="myBar"></div>
      </div>
    </footer>

  </section>
</template>


<!-- style -->
<style scoped lang="scss">
  @import '@/assets/mq.scss';

  ul {
    display: flex;
    max-height: 100vh; height: 100vh;
    color: var(--cloud);
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
    transform: translateY(-4rem);
    margin: calc(var(--unit) * 3);
    transition: transform 500ms ease 900ms;
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

  figure {
    min-width: 38vw; max-width: 54.4rem; height: 28.8rem;
    overflow: hidden;
    box-shadow: 0 0 40px 0 rgba(0,0,0,1);
  }

  img {
    height: 100%;
    object-fit: cover;
    transition: transform 5000ms ease;
    will-change: transform;
  }

  footer {
    position: fixed;
    bottom: 6.4rem;
    width: 100vw;
  }

  .progress-container {
    position: relative;
    margin: 0 auto;
    width: 40rem;
    height: 2px;
    border-radius: 200px;
    background: rgba(255,255,255,.24);
    overflow: hidden;
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
      const section = document.querySelector('section')
      const progressBar = document.querySelector('.progress-bar')
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

      list.addEventListener('scroll', () => {
        const winScroll = list.scrollLeft || list.scrollLeft
        const width = list.scrollWidth - list.clientWidth
        const scrolled = (winScroll / width)
        progressBar.style.transform = `scaleX( ${scrolled} )`
        console.log(scrolled)
      })
    }
  }

</script>
