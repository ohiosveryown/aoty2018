<!-- layout -->
<template>
  <section>

    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>

  </section>
</template>


<!-- style -->
<style scoped lang="scss">
  @import '@/assets/mq.scss';

  section {
    // border: 4px solid pink;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    display: flex;
  }

  section::-webkit-scrollbar {
    display: none;  // Safari and Chrome
  }

  section > div {
    margin: 24px 24px;
    min-width: 33vw; height: 300px;
    background: lightblue;
    transition: transform .25s ease;
    will-change: transform;
  }
</style>


<!-- logic -->
<script>

  export default {
    mounted() {

    }
  }

</script>
