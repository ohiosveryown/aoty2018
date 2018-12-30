<!-- layout -->
<template>
  <ul class="debug">


      <li class="">
        <nuxt-link to='/test'>
          <!-- <h3 class="f-mabry mb-2 tar">5</h3> -->
          <figure class="debug">
            <img src="@/assets/img/d01.jpg" alt="">
          </figure>
        </nuxt-link>
      </li>



    <li>02</li>
    <li>03</li>
    <li>04</li>
    <li>05</li>
    <li>06</li>

  </ul>
</template>


<!-- style -->
<style scoped lang="scss">
  @import '@/assets/mq.scss';

  ul {
    display: flex;
    align-items: center;
    max-height: 100vh; height: 100vh;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar { display: none; } // Safari and Chrome}
  }

  li {
    margin-right: 1.6rem;
    height: 300px;
    flex: 0 0 34%;
    background: lightblue;
    transition: transform .25s ease;
    will-change: transform;
  }

  figure {
    display: flex;
    height: 100%;
  }

  img { object-fit: cover; }
</style>


<!-- logic -->
<script>

  export default {
    mounted() {

    }
  }

</script>
