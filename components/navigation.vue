<!-- layout -->
<template>
  <nav class="">

    <div class="logotype home-link f-mabry">
      <nuxt-link to="/">
        <h3>2018—Albums</h3>
      </nuxt-link>
    </div>

    <nuxt-link to="/about">
      <div class="nav-trigger f-mabry">
        <h5>album lists</h5>
        <div class="bridge">
          <div class="top"/>
          <div class="bottom"/>
        </div>
      </div>
    </nuxt-link>

  </nav>
</template>


<!-- style -->
<style scoped lang="scss">
  @import '@/assets/mq.scss';

  nav {
    display: flex;
    justify-content: space-between;
    position: fixed;
    z-index: var(--zmax);
    top: 3.2rem; left: 50%;
    max-width: var(--max_width);
    width: 88vw;
    transform: translateX(-50%);
  }

  .nav-trigger {
    display: flex;
    flex-direction: row;
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

    }
  }

</script>
