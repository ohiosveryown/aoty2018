<!-- layout -->
<template>
  <main class="">

    <AppNav/>

    <div class="detail-cover-out"/>
    <div class="detail-cover-01"/>
    <div class="detail-cover-02"/>
    <div class="detail-cover-03"/>


    <!-- <nuxt-link class="home-link" to="/">Home</nuxt-link> -->
    <!-- <img style="display: block" src="@/assets/img/d02.jpg" alt=""> -->


    <div class="detail-main mw">
      <header class="detail-header">

        <figure class="detail-figure">
          <div class="eyebrow">
            <nuxt-link class="home-link f-space op-0" to="/">Go Back</nuxt-link>
            <h3 class="f-mabry">5</h3>
          </div>
          <img src="@/assets/img/d01.jpg" alt="">
        </figure>

        <article class="detail-details">
          <h4 class="genre op-4 f-space">Rap/Hip-Hop</h4>
          <h1 class="album f-mabry">Kids See Ghosts</h1>
          <h3 class="artist f-space">Kids See Ghosts</h3>
        </article>
      </header>

      <section class="mini-player">
        <iframe src="https://open.spotify.com/embed/track/4RVbK6cV0VqWdpCDcx3hiT" width="100%" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </section>

      <article class="detail-copy">
        <p>The psychic bond between Kanye West and Kid Cudi yields a spacious and melancholy album about brokenness—thoughts are fragmented, relationships are ended, and societal ties are cut.</p>

        <p>One of the revelations of Kids See Ghosts is how Cudi emerges as a better angel, a concerned but empathic friend who provides emotional ballast. Cudi, of course, has a few years on West in acknowledging his struggles with mental health. “Keep moving forward,” Cudi sings gently on “Reborn,” adding, “peace is something that starts with me.” His presence feels calming, cooling. The two men have always been better together than apart, lending depth and weight to each other's on-record presences. Cudi’s presence girds West's wild energy with a melancholy that adds some highlight and shadow to the weightless cartoon West has offered us. Cudi’s always struggled with being two-dimensional on his own records, but here he brings a soul and depth that his mentor can't muster.</p>

        <div class="byline mt-2 tar">
          <h4>
            <a href="https://pitchfork.com/reviews/albums/kanye-west-kid-cudi-kids-see-ghosts/" target="_blank">—Pitchfork</a>
          </h4>
        </div>
      </article>
    </div>


  </main>
</template>


<!-- style -->
<style lang="scss">
  @import '@/assets/mq.scss';

  .detail-cover-01, .detail-cover-02, .detail-cover-03 {
    position: fixed;
    top: 0; left: 0;
    z-index: var(--zmax);
    width: 100vw; height: 34vh;
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
      margin: 9.6rem auto 9.6rem auto;
    }
  }

  .detail-figure, .eyebrow {
    margin-bottom: calc(var(--unit) * 2);
  }

  .genre {
    margin-bottom: calc(var(--unit) * 4);
  }

  .album {
    margin-bottom: 1rem;
    @include breakpoint(md) { margin-bottom: calc(var(--unit) * 1); }
  }

  .artist {
    margin-top: -.4rem;
    @include breakpoint(md) { margin-top: 0; }
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
