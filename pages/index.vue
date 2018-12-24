<!-- layout -->
<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="ml-8 title">
        AOTY2018
      </h1>
      <h2 class="subtitle">
        My wicked Nuxt.js project
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
      </div>
    </div>
  </section>
</template>


<!-- style -->
<style lang="scss">
  @import '@/assets/mq.scss';

  .container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    .title {
      font-size: 100px;
      color: var(--ultraviolet);
      letter-spacing: 1px;
      @include breakpoint(mdl) { color: var(--blueshift); }
    }
  }



  .subtitle {
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }
</style>


<!-- logic -->
<script>
  import Logo from '~/components/Logo.vue'

  export default {
    components: {
      Logo
    }
  }
</script>
