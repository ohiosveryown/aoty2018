<!-- layout -->
<template>
  <nav>

    <div class="nav-logotype f-mabry">
      <!-- <h3>2018—Albums</h3> -->
      <nuxt-link class="home-link" to="/">
        <h3>2018—Albums</h3>
      </nuxt-link>
    </div>

    <div class="nav-trigger f-mabry">
      <h5>navigation</h5>
      <div class="bridge">
        <div class="top"/>
        <div class="bottom"/>
      </div>
    </div>

  </nav>
</template>


<!-- style -->
<style scoped lang="scss">
  @import '@/assets/mq.scss';

  nav {
    position: sticky;
    z-index: var(--zmax);
    top: 2rem;
    margin: 0 auto;
    max-width: 144rem;
    width: 88vw;
    display: flex;
    justify-content: space-between;
  }

  .nav-trigger {
    display: flex;
  }

  .bridge {
    display: flex;
    flex-direction: column;
    margin: .6rem 0 0 1.2rem;
  }

  .top, .bottom {
    width: 2.4rem; height: .1rem;
    background: #fff;
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
