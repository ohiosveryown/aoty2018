<!-- layout -->
<template>
  <main class="mw">

    <div class="cover-out"/>
    <div class="cover-01"/>
    <div class="cover-02"/>
    <div class="cover-03"/>


    <!-- <nuxt-link class="home-link" to="/">Home</nuxt-link> -->
    <!-- <img style="display: block" src="@/assets/img/d02.jpg" alt=""> -->


    <header class="">

      <figure>
        <div class="eyebrow">
          <nuxt-link class="home-link f-space op-4" to="/">Go Back</nuxt-link>
          <h3 class="f-mabry">5</h3>
        </div>
        <img src="@/assets/img/d01.jpg" alt="">
      </figure>

      <article class="">
        <h4 class="genre op-4 f-space">Alternative</h4>
        <h1 class="album f-mabry">Tranquilty Base Hotel &amp; Casino</h1>
        <h3 class="artist f-space">Arctic Monkeys</h3>
      </article>
    </header>

    <section class="mini-player">
      <iframe src="https://open.spotify.com/embed/track/6iBWuaPa61mWphAvACYlDr" width="100%" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    </section>

    <article class="copy">
      <p>In an age where nihilistic, indulgent and overcooked R&amp;B rules the roster, it’s refreshing to hear a feel-good, authentically-driven record like ‘FEELS’. The production retains a lo-fi, and unpolished feel throughout, Aalegra not tempted by radio homogeneity, slowly but surely finding her own lane.</p>

      <p>Furthermore, ‘FEELS’ boasts an impressive roster of rap’s new era progenitors, and Aalegra really comes into her own in the intersection between programmed soul and hip-hop. On ‘Sometimes’, Aalegra glides over a cold breakbeat, mirroring the careening vocal interplay that Mariah Carey made her own in the ‘90s. Breakout rapper Logic injects his inimitable flow on a moody track that grapples with circumstance and destiny. The highlight of the record comes in the form of ‘Like I Used To’, Aalegra ushering in the help of native Swede rapper Timbuktu, a song that prickles with icy, atmospheric melodrama, Aalegra at her most emotionally transparent when she is in a reminiscent, retrospective mood, a theme that imprints itself all over the record.</p>

      <div class="byline mt-2 tar">
        <h4>
          <a href="https://www.clashmusic.com/reviews/snoh-aalegra-feels" target="_blank">—Clash Music</a>
        </h4>
      </div>
    </article>


  </main>
</template>


<!-- style -->
<style scoped lang="scss">
  @import '@/assets/mq.scss';

  .cover-01, .cover-02, .cover-03 {
    position: fixed;
    top: 0; left: 0;
    z-index: var(--zmax);
    width: 100vw; height: 33vh;
    background: #28262a;
    // background: pink;
    transform: scaleX(1);
    transform-origin: right;
    // transition: all 500ms ease;
  }

  .cover-02 { top: 33vh; }
  .cover-03 { top: 66vh; height: 34vh; }

  @keyframes coverOneIn {
    from { transform: scaleX(1); }
    to   { transform: scaleX(0); }
  }

  .cover-01 { animation: coverOneIn 1000ms cubic-bezier(0.770, 0, 0.175, 1); animation-fill-mode: forwards; }
  .cover-02 { animation: coverOneIn 1000ms cubic-bezier(0.770, 0, 0.175, 1); animation-fill-mode: forwards; animation-delay: 150ms; }
  .cover-03 { animation: coverOneIn 1000ms cubic-bezier(0.770, 0, 0.175, 1); animation-fill-mode: forwards; animation-delay: 300ms; }

  .cover-out {
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

  .cover-out-active {
    transform: translateY(0);
  }

  main {
    margin: 12rem auto 8rem auto;
    @include breakpoint(mdl) {
      margin: 9.6rem auto 9.6rem auto;
    }
  }

  figure, .eyebrow, .genre {
    margin-bottom: calc(var(--unit) * 2);
  }

  .album {
    margin-bottom: 1rem;
    @include breakpoint(mdl) { margin-bottom: calc(var(--unit) * 2); }
  }

  .artist {
    margin-top: -.4rem;
    @include breakpoint(mdl) { margin-top: 0; }
  }

  .figure-eyebrow {
    display: flex;
  }

  .figure-eyebrow-number {
    justify-self: end;
  }

  header {
    display: flex;
    flex-direction: column;
    @include breakpoint(mdl) { flex-direction: row; }
  }

  header > figure {
    @include breakpoint(mdl) {
      padding-right: 4rem;
      width: grid-width(6);
    }
  }

  .eyebrow {
    display: flex;
    justify-content: space-between;
  }

  header > article {
    display: flex;
    flex-direction: column;

    @include breakpoint(mdl) {
      width: grid-width(6);
      justify-content: center;
    }
  }

  .mini-player {
    margin: 6.4rem auto auto;

    @include breakpoint(mdl) {
      margin: 6.4rem auto 4.8rem auto;
      width: grid-width(6);
    }
  }

  .copy {
    @include breakpoint(mdl) {
      margin: 0 auto;
      width: grid-width(6);
    }
  }

  p { text-align: justify; }
  p + p { text-indent: 2ch; }

</style>


<!-- logic -->
<script>

  export default {
    transition: {
      name: 'detailFade',
      mode: 'out-in'
    },
    mounted() {
      const homeLink = document.querySelector('.home-link')
      const coverOut = document.querySelector('.cover-out')

      homeLink.addEventListener('click', () => {
        coverOut.classList.add('cover-out-active')
      })
    }
  }

</script>
