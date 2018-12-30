<!-- layout -->
<template>
  <ul>

    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>

  </ul>
</template>


<!-- style -->
<style scoped lang="scss">
  @import '@/assets/mq.scss';

  ul {
    // border: 4px solid pink;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    display: flex;
  }

  ul::-webkit-scrollbar {
    display: none;  // Safari and Chrome
  }

  ul > li {
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
