<!-- layout -->
<template>
  <main class="debug mw">

    <section class="debug copy">
      <header>
        <h5 class="f-space">About</h5>
        <h1 class="f-mabry">2018 Albums of the Year is a communal project built around music &amp; friendship.</h1>
      </header>
      <article class="">
        <p>2018 was a great year for music. To catalog this period of sonic mastery, myself and a group of friends want to share our favorites with you. This site was designed and built by me, Matt – and you can view the source here.</p>
        <p>The site was built on next.js and the type is set in Mabry by Colophon Foundry and Space Grotesk by Florian Karsten.</p>
      </article>
    </section>

    <section class="debug lists">
      <h5 class="f-space">Album Lists</h5>
      <ul>
        <li>
          <nuxt-link to='/Matt'><h3 class="f-mabry">Matt’s Top 10 Albums of the Year</h3></nuxt-link>
          <a class="f-space op-5" href="https://twitter.com/cmykw_" target="_blank">@cmykw_</a>
        </li>
        <li>
          <nuxt-link to='/Matt'><h3 class="f-mabry">Stepfan's Top 5 Albums of the Year</h3></nuxt-link>
          <a class="f-space op-5" href="https://twitter.com/stepfdelaghetto" target="_blank">@stepfdelaghetto</a>
        </li>
        <li>
          <nuxt-link to='/Matt'><h3 class="f-mabry">Kristie's Top 10 Albums of the Year</h3></nuxt-link>
          <a class="f-space op-5" href="https://twitter.com/kristie_feltner" target="_blank">@kristie_feltner</a>
        </li>
      </ul>
    </section>

  </main>
</template>


<!-- style -->
<style lang="scss">
  @import '@/assets/mq.scss';

  main {
    display: flex;
    @include breakpoint(mdl) {
      height: 100vh;
      flex-direction: row;
      align-items: center;
    }
  }

  .copy {
    @include breakpoint(mdl) { width: grid-width(7); }
  }

  article {
    @include breakpoint(mdl) { width: grid-width(8); }
  }

  .lists {
    @include breakpoint(mdl) { margin-left: grid-width(0); width: grid-width(5); }
  }

  ul {
    display: flex;
    flex-direction: column;
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

    }
  }

</script>
