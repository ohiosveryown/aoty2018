<!-- layout -->
<template>
  <nav class="">

    <div class="logotype home-link f-mabry">
      <nuxt-link to="/">
        <h3>2018—albums</h3>
      </nuxt-link>
    </div>

    <a class="pointer" @click="$router.go(-1)">
    <!-- <nuxt-link to="/about"> -->
      <div class="nav-trigger nav-trigger-active f-mabry">
        <h5>album lists</h5>
        <div class="bridge">
          <div class="top"/>
          <div class="bottom"/>
        </div>
      </div>
    <!-- </nuxt-link> -->
    </a>

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
    top: 2rem; left: 50%;
    max-width: var(--max_width);
    width: 88vw;
    transform: translateX(-50%);

    @include breakpoint(md) { top: 3.2rem; }
  }

  .nav-trigger {
    display: flex;
    flex-direction: row;
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

    }
  }

</script>
