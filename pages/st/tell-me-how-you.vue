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
              <nuxt-link class="back-link home-link f-space" to="/scott">Go Back</nuxt-link>
              <h3 class="f-mabry">4</h3>
            </div>
            <img src="@/assets/img/matt/08.jpg" alt="Courtney Barnett">
          </figure>

          <article class="detail-details">
            <h4 class="genre op-4 f-space">Alternative</h4>
            <h1 class="album f-mabry">Tell Me How You Really Feel</h1>
            <h3 class="artist f-space">Courtney Barnett</h3>
          </article>
        </header>

        <section class="mini-player">
          <iframe src="https://open.spotify.com/embed/track/0d29ZVNUaxWOtUFzElL3B9" width="100%" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </section>

        <article class="detail-copy">
          <p>Courtney Barnett’s second album is smaller, more introverted than her debut. It’s tentative but with a purpose, songs about what it means to not have—or need—the right words for everything.</p>

          <p>The most Courtney Barnett line on Courtney Barnett’s second album is a quote from an online troll. “He said, ‘I could eat a bowl of alphabet soup and spit out better words than you,’” she recalls, on “Nameless Faceless,” and then offers an uncharacteristically cocksure response in a shruggy sing-song: “But you didn’t.” The anonymous critic’s putdown assumes that Barnett’s witty early EPs and debut album cemented her style, making it ripe for parody. Abandoning social realism and polysyllabic razzle-dazzle, Tell Me How You Really Feel in fact overhauls almost everything we’ve come to expect from Barnett as a writer while vindicating everything she promised of herself on her 2015 debut LP: “Put me on a pedestal and I’ll only disappoint you.”</p>

          <div class="byline mt-2 tar">
            <h4>
              <a href="https://pitchfork.com/reviews/albums/courtney-barnett-tell-me-how-you-really-feel/" target="_blank">—Pitchfork</a>
            </h4>
          </div>
        </article>
      </div>
    </main>

  </div>
</template>


<!-- style -->
<<style lang="scss">
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
