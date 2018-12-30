<!-- layout -->
<template>
  <nav>

    <div class="nav-main">
      <div class="nav-logotype f-mabry">
        <!-- <h3>2018—Albums</h3> -->
        <nuxt-link class="home-link" to="/">
          <h3>2018—Albums</h3>
        </nuxt-link>
      </div>

      <!-- <div class="nav-trigger f-mabry">
        <h5>navigation</h5>
        <div class="bridge">
          <div class="top"/>
          <div class="bottom"/>
        </div>
      </div> -->
    </div>

    <!-- <section class="debug">
      <div class="mw nav-content debug">
        <article class="about">
          <h5 class="mb-2 f-space">About</h5>
          <h1 class="f-mabry">2018 Albums of the Year is a communal project built around music &amp; friendship.</h1>
          <p class="f-space">The Tranquility Base Hotel &amp; Casino isn’t the most appealing vacation spot. The views are incredible, but the VR masks are grimy and unreliable.</p>
        </article>

        <ul>
          <h5 class="mb-2 f-space">Album Lists</h5>
          <li><nuxt-link to='/'>
            <h3 class="f-mabry">Matt’s Top 10 Albums of the Year</h3>
            <h5 class="op-4"><a class="f-space" href="#">@cmykw_</a></h5>
          </nuxt-link></li>

          <li><nuxt-link to='/'>
            <h3 class="f-mabry">Jordan’s Top 5 Albums of the Year</h3>
            <h5 class="op-4"><a class="f-space" href="#">@cmykw_</a></h5>
          </nuxt-link></li>

          <li><nuxt-link to='/'>
            <h3 class="f-mabry">Kristie's Top 10 Albums of the Year</h3>
            <h5 class="op-4"><a class="f-space" href="#">@cmykw_</a></h5>
          </nuxt-link></li>

          <li><nuxt-link to='/'>
            <h3 class="f-mabry">Roy's Top 5 Albums of the Year</h3>
            <h5 class="op-4"><a class="f-space" href="#">@cmykw_</a></h5>
          </nuxt-link></li>
        </ul>
      </div>
    </section> -->

  </nav>
</template>


<!-- style -->
<style scoped lang="scss">
  @import '@/assets/mq.scss';

  .nav-content {
    display: flex;
    @include breakpoint(mdl) {
      flex-direction: row;
      align-items: center;
      height: 90vh;

      p { width: 72%; }
    }
  }


  .about {
    @include breakpoint(mdl) {
      align-self: flex-start;
      transform: translateY(2.4rem);
      width: grid-width(6);
    }
  }

  nav ul {
    display: flex;
    flex-direction: column;
    margin-left: grid-width(1);
    width: grid-width(5);

    @include breakpoint(mdl) {
      align-self: flex-end;
    }
  }

  nav li {
    margin-bottom: 2.4rem;
  }

  .nav-main {
    // position: sticky;
    position: fixed;
    // z-index: 99999;
    top: 4rem; left: 50%;
    transform: translateX(-50%);
    margin: 0 auto;
    max-width: 144rem;
    width: 88vw;
    display: flex;
    justify-content: space-between;
  }

  section {
    position: fixed;
    top: 0; left: 0;
    z-index: var(--zmax);
    width: 100vw; height: 100vh;
    background: rgba(0,0,0,.9)
  }

  .nav-trigger {
    display: flex;
    cursor: pointer;
  }

  .nav-trigger:hover {
    @include breakpoint(mdl) {
      .top { transform: translateY(.4rem); }
      .bottom { transform: translateY(.3rem); }
    }
  }

  .nav-trigger-active {
    .top { transform: translateY(.4rem) rotate(45deg); }
    .bottom { transform: translateY(.3rem) rotate(-45deg); }
  }

  .bridge {
    display: flex;
    flex-direction: column;
    margin: .6rem 0 0 1.2rem;
  }

  .top, .bottom {
    width: 2.4rem; height: .1rem;
    background: #fff;
    transition: all 300ms ease;
    will-change: transform;
  }

  .bottom {
    transform: translateY(.8rem);
  }


</style>


<!-- logic -->
<script>

  export default {
    mounted() {
      // document.body.style.border = '2px solid pink'
      // document.body.style.maxHeight = '100vh'
      // document.body.style.overflow = 'hidden'
    }
  }

</script>
