<!-- layout -->
<template>
  <div class="">

    <!-- 🛣 -->
    <AppNav/>

    <!-- 🛌 -->
    <div class="detail-cover-out"/>
    <div class="detail-cover-01"/>
    <div class="detail-cover-02"/>
    <div class="detail-cover-03"/>

    <!-- 🤙🏼 -->
    <main class="">
      <div class="detail-main mw">
        <header class="detail-header">

          <figure class="detail-figure">
            <div class="eyebrow">
              <nuxt-link class="home-link f-space op-0" to="/">Go Back</nuxt-link>
              <h3 class="f-mabry">3</h3>
            </div>
            <img src="@/assets/img/matt/03.jpg" alt="Kali Uchis">
          </figure>

          <article class="detail-details">
            <h4 class="genre op-4 f-space">R&amp;B/Soul</h4>
            <h1 class="album f-mabry">Isolation</h1>
            <h3 class="artist f-space">Kali Uchis</h3>
          </article>
        </header>

        <section class="mini-player">
          <iframe src="https://open.spotify.com/embed/track/54IbnYEdA3ymfxv07WgN3b" width="100%" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </section>

        <article class="detail-copy">
          <p>Here, in no particular order, is a selection of artists that are on Kali Uchis’ stacked debut album, ‘Isolation’. Damon Albarn of Blur fame, Tame Impala’s Kevin Parker, Odd Future rapper Tyler, The Creator, rising British R&amp;B star Jorja Smith, and LA’s funk king Thundercat. But in amidst all of those stars, you’ll come away remembering just one name: Kali Uchis.</p>

          <p>For the uninitiated: Uchis was born in Virginia to Colombian parents, splitting her time between both nations. Her musical journey began in 2012 with the buzzy mixtape, ‘Drunken Babble’ and was followed by 2015’s collection ‘Por Vida’. Appearances on Tyler, The Creator’s 2017 album ‘Flower Boy’, Daniel Caesar’s Grammy-nominated single ‘Get You’, and Gorillaz B-sides ‘She’s My Collar’ and ‘Ticker Tape’ further bolstered the 23-year-old’s profile – leading us to this point, her delayed, but brilliant debut album.</p>

          <div class="byline mt-2 tar">
            <h4>
              <a href="https://www.nme.com/reviews/album/kali-uchis-isolation-album-review" target="_blank">—NME</a>
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

  .detail-cover-01, .detail-cover-02, .detail-cover-03 {
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

  @keyframes coverOneIn {
    from { transform: scaleX(1); }
    to   { transform: scaleX(0); }
  }

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
  import AppNav from '@/components/AppNav.vue';
  export default {
    transition: {
      name: 'detailFade',
      mode: 'out-in'
    },
    components: { AppNav },
    mounted() {
      const homeLink = document.querySelector('.home-link')
      const coverOut = document.querySelector('.detail-cover-out')

      homeLink.addEventListener('click', () => {
        coverOut.classList.add('detail-cover-out-active')
      })
    }
  }

</script>
