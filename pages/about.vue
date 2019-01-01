<!-- layout -->
<template>
  <main class="mw">

    <aboutNavigation/>

    <section class="copy">
      <header>
        <h5 class="mb-1 f-space infrared">About</h5>
        <h1 class="mb-4 f-mabry">2018 Albums of the Year is a communal project built around music &amp; friendship.</h1>
      </header>
      <article class="">
        <p>2018 was a great year for music. To catalog this period of sonic mastery, myself and a group of friends want to share our favorites with you. This site was designed and built by me, Matt – and you can view the <a href="https://github.com/ohiosveryown/aoty2018" target="_blank">source here</a>.</p>
        <p>The site is built on nuxt.js and the type is set in Mabry by Colophon Foundry, and Space Grotesk by Florian Karsten.</p>
      </article>
    </section>

    <section class="lists">
      <h5 class="mb-1 f-space infrared">Album Lists</h5>
      <ul>
        <li class="mb-4">
          <nuxt-link to='/'><h3 class="mb-0 f-mabry">Matt’s Top 10 Albums of the Year</h3></nuxt-link>
          <a class="f-space op-5" href="https://twitter.com/cmykw_" target="_blank">@cmykw_</a>
        </li>
        <li class="mb-4">
          <nuxt-link to='/Matt'><h3 class="mb-0 f-mabry">Stepfan's Top 5 Albums of the Year</h3></nuxt-link>
          <a class="f-space op-5" href="https://twitter.com/stepfdelaghetto" target="_blank">@stepfdelaghetto</a>
        </li>
        <li class="mb-4">
          <nuxt-link to='/Matt'><h3 class="mb-0 f-mabry">Kristie's Top 10 Albums of the Year</h3></nuxt-link>
          <a class="f-space op-5" href="https://twitter.com/kristie_feltner" target="_blank">@kristie_feltner</a>
        </li>
      </ul>
    </section>

  </main>
</template>


<!-- style -->
<style scoped lang="scss">
  @import '@/assets/mq.scss';

  .infrared { color: var(--infrared); }
  a { text-decoration: underline; }
  a:hover { text-decoration: none; }

  main {
    display: flex;
    flex-direction: column;
    position: relative;
    margin-top: 12rem;

    @include breakpoint(mdl) {
      margin-top: 2.4rem;
      height: 100vh;
      flex-direction: row;
      align-items: center;
    }
  }

  header {
    @include breakpoint(md) { width: grid-width(8); }
    @include breakpoint(mdl) { width: grid-width(12); }
  }

  .copy {
    margin-bottom: 4rem;
    @include breakpoint(md) { margin-bottom: 6.4rem; }
    @include breakpoint(mdl) {
      position: absolute;
      top: 10%;
      margin-bottom: 0;
      width: grid-width(8);
    }
  }

  article { @include breakpoint(md)  { width: grid-width(8); }}

  .lists {
    display: flex;
    flex-direction: column;
    margin-right: 4rem;

    @include breakpoint(md) { align-self: flex-end; }

    @include breakpoint(mdl) {
      position: absolute;
      bottom: 16%; right: 0;
      width: grid-width(4);
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    margin-bottom: 4rem;
    @include breakpoint(md) { margin-bottom: 0; }
  }

  p { text-align: justify; }
  p + p { text-indent: 2ch; }

  .aboutFade-enter-active, .aboutFade-leave-active { transition: all 200ms ease; }
  .aboutFade-enter, .aboutFade-active { opacity: 0; }

</style>


<!-- logic -->
<script>
  import aboutNavigation from '@/components/aboutNavigation'
  export default {
    transition: {
      name: 'aboutFade',
      mode: 'out-in'
    },
    components: { aboutNavigation },
    mounted() {

    }
  }

</script>
