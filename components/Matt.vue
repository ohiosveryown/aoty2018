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
    height: 100vh;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    -webkit-oveflow-scroll: touch;
    width: auto;
  }

  li {
    border: 3px solid pink;
    width: 300px;
    height: 100%;
    background: rgba(255, 0, 0, 0.1);
    // margin-left: 10px;
    display: inline-block;
    // overflow: hidden;
  }
</style>


<!-- logic -->
<script>

  export default {
    mounted() {

    }
  }

</script>
