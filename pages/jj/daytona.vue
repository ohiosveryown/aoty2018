<!-- layout -->
<template>
  <div class="">

    <!-- 🛣 -->
    <navigation/>

    <!-- 🛌 -->
    <div class="detail-cover-out"/>
    <div class="detail-cover-01"/>
    <div class="detail-cover-02"/>
    <div class="detail-cover-03"/>
    <div class="about-cover"/>

    <!-- 🤙🏼 -->
    <main class="">
      <div class="detail-main mw">
        <header class="detail-header">

          <figure class="detail-figure">
            <div class="eyebrow">
              <nuxt-link class="back-link f-space" to="/jordan">Go Back</nuxt-link>
              <h3 class="f-mabry"><span class="op-2">JJ </span>2</h3>
            </div>
            <img src="@/assets/img/jj/02.jpg" alt="Pusha-T">
          </figure>

          <article class="detail-details">
            <h4 class="genre op-4 f-space">Rap/Hip-Hop</h4>
            <h1 class="album f-mabry">Daytona</h1>
            <h3 class="artist f-space">Pusha-T</h3>
          </article>
        </header>

        <section class="mini-player">
          <iframe src="https://open.spotify.com/embed/track/6cpsixIHI63L0hwh3CwZg3" width="100%" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </section>

        <article class="detail-copy">
          <p>From being one-half of the Clipse to pursuing a career as a solo artist, Pusha T has a nearly blemish-free track record. Lyrically-speaking, he is light years ahead of his contemporaries. Daytona is seven tracks in length, and each song is just as tight as the next — all killer, no filler. It’s concise and to the point. Kanye West is on top of his game here production-wise. “Infrared” sparked one of the most entertaining rap beefs in recent memory. “How could you ever right these wrongs / When you don't even write your songs?” — that’s fucking tough. After it was all said and done, Drake got exposed and J. Prince came out of the woodwork waving a white flag. How many records can do that?</p>

          <div class="byline mt-2 tar">
            <h4>
              <a href="https://instagram.com/jordanjung" target="_blank">—Jordan Jung</a>
            </h4>
          </div>
        </article>
      </div>
    </main>

  </div>
</template>


<!-- style -->
<style lang="scss">
  @import '@/assets/mq.scss';

  .detail-cover-01, .detail-cover-02, .detail-cover-03, .about-cover {
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

  .about-cover {
    // z-index: var(--z4);
    height: 100vh;
    background: #0b0b0b;
    transform: scaleX(1) translateY(-100vh);
    transition: all 800ms cubic-bezier(0.770, 0, 0.175, 1);
  }

  @keyframes coverOneIn {
    from { transform: scaleX(1); }
    to   { transform: scaleX(0); }
  }

  .about-cover-active { transform: translateY(0);}
  .detail-cover-01 { animation: coverOneIn 1000ms cubic-bezier(0.770, 0, 0.175, 1); animation-fill-mode: forwards; }
  .detail-cover-02 { animation: coverOneIn 1000ms cubic-bezier(0.770, 0, 0.175, 1); animation-fill-mode: forwards; animation-delay: 150ms; }
  .detail-cover-03 { animation: coverOneIn 1000ms cubic-bezier(0.770, 0, 0.175, 1); animation-fill-mode: forwards; animation-delay: 300ms; }

  .detail-cover-out {
    position: fixed;
    top: 0; left: 0;
    z-index: var(--zmax);
    width: 100vw; height: 100vh;
    background: #0b0b0b;
    transform: translateY(-99vh);
    transform-origin: top;
    transition: all 1000ms cubic-bezier(0.770, 0, 0.175, 1);
    will-change: transform;
  }

  .detail-cover-out-active { transform: translateY(0); }

  .detail-main {
    margin: 7.2rem auto 8rem auto;
    @include breakpoint(md) {
      margin: 17.6rem auto 9.6rem auto;
    }
  }

  .detail-figure, .eyebrow {
    margin-bottom: 1.6rem;
  }

  .genre {
    margin-bottom: 3.2rem;
  }

  .album {
    margin-bottom: 1rem;
    margin-left: -.4rem;
    @include breakpoint(md) { margin-bottom: .8rem; }
  }

  .artist {
    margin-top: -.4rem;
  }

  .figure-eyebrow { display: flex; }

  .figure-eyebrow-number { justify-self: end; }

  .detail-header {
    display: flex;
    flex-direction: column;
    @include breakpoint(md) { flex-direction: row; }
  }

  .detail-figure {
    @include breakpoint(md) {
      padding-right: 4rem;
      width: grid-width(6);
    }
  }

  .eyebrow {
    display: flex;
    justify-content: space-between;
  }

  .detail-details {
    display: flex;
    flex-direction: column;

    @include breakpoint(md) {
      width: grid-width(6);
      justify-content: center;
    }
  }

  .mini-player {
    margin: 6.4rem auto 4.8rem;
    @include breakpoint(md) { width: grid-width(9); }
    @include breakpoint(mdl) { width: grid-width(6); }
  }

  .detail-copy {
    @include breakpoint(md) {
      margin: 0 auto;
      width: grid-width(9);
    }
    @include breakpoint(mdl) { width: grid-width(6); }
  }

  p { text-align: justify; }
  p + p { text-indent: 2ch; }

</style>


<!-- logic -->
<script>
  import navigation from '@/components/navigation.vue';
  export default {
    transition: {
      name: 'detailFade',
      mode: 'out-in'
    },
    components: { navigation },
    mounted() {
      // about logic
      const navTrigger = document.querySelector('.nav-trigger')
      const aboutCover = document.querySelector('.about-cover')
      const backLink = document.querySelector('.back-link')

      navTrigger.addEventListener('click', () => {
        aboutCover.classList.add('about-cover-active')
      })

      const homeLink = document.querySelector('.home-link')
      const coverOut = document.querySelector('.detail-cover-out')

      homeLink.addEventListener('click', () => {
        coverOut.classList.add('detail-cover-out-active')
      })
      backLink.addEventListener('click', () => {
        coverOut.classList.add('detail-cover-out-active')
      })
    }
  }

</script>
