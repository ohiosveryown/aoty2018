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
              <nuxt-link class="back-link f-space" to="/roy">Go Back</nuxt-link>
              <h3 class="f-mabry"><span class="op-2">RH </span>3</h3>
            </div>
            <img src="@/assets/img/rh/03.jpg" alt="SiR">
          </figure>

          <article class="detail-details">
            <h4 class="genre op-4 f-space">R&amp;B/Soul</h4>
            <h1 class="album f-mabry">November</h1>
            <h3 class="artist f-space">SiR</h3>
          </article>
        </header>

        <section class="mini-player">
          <iframe src="https://open.spotify.com/embed/track/0wY9rA9fJkuESyYm9uzVK5" width="100%" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </section>

        <article class="detail-copy">
          <p>On the first proper song of SiR’s latest LP, he sings, “All her lil friends can’t stand me/Because they know I would trade her love for a Grammy.” The arrogant posture is surprising, coming from someone whose breakthrough EPs were overflowing with sweet nothings, and it stands in contrast with the romantic security he sings about on the album’s closing track (“You don’t care about my name/If I didn’t have a dime, you would care for me the same”). That conflict—between pride and heart, loving and leaving—provides the dramatic tension at the album’s core.</p>

          <p>November arrives exactly one year after TDE announced SiR as its newest signee. The label’s roster doesn’t seem to believe in creating run-of-the-mill anything, and it follows that the 31-year-old Inglewood singer-songwriter and producer R&amp;B isn’t just R&amp;B. There’s a neo-soul silkiness to many of his songs, with an atmospheric, jazzy vibe in the production—November is an album for lighting incense, not candles. In this sense, he’s TDE’s answer to a moment that has seen acts like Daniel Caesar subtly returning to the genre’s more tender roots with great success. Even so, throughout the album, SiR deftly bridges his old-school sounds with new-school references (“hit the DM”).</p>

          <div class="byline mt-2 tar">
            <h4>
              <a href="https://nostalgiaking.com/2018/05/14/robohands-green/" target="_blank">—Pitchfork</a>
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
    background: #28262a;
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
