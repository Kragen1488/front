<template>
  <div class="wraper">
      <div class="container">
          <Item v-for = "item in timers" :key ="item" />
          <div class="add" @click ="add_timer">
            <img src="@/assets/add.svg" alt="" class="add-icon">
          </div>
      </div>
    </div>
</template>

<script>
import Item from '@/components/item'
export default {
  name: 'App',
  components: {
    Item
  },
  data(){
    return{
      timers:1
    }
  },
  methods:{
    add_timer(){
      this.timers += 1;
    }
  }
}
</script>

<style>
  @import url('https://fonts.cdnfonts.com/css/gotham-pro?styles=24950');
  *{
    padding: 0;
    margin: 0;
    font-family: 'Gotham Pro', sans-serif;
    font-style: normal;
  }
  .wraper{
    display: flex;
    justify-content: center;
    background: #353638;
    min-height: 100vh;
  }
  .container{
    width: 1200px;
    height: fit-content;
    box-sizing: border-box;
    padding: 72px 212px;
    display: flex;
    gap:45px 50px;
    flex-wrap: wrap;
  }
  @media (max-width: 1200px) {
    .container{
      width: 924px;
    }
  }
  @media (max-width: 1024px) {
    .container{
      padding: 72px 135px;
      width: 770px;
    }
  }
  @media (max-width: 768px) {
    .container{
      flex-direction: column;
      align-items: center;
      gap:45px;
      padding: 72px 46px;
    }
  }
  .add{
    background: #696969;
    width: 225px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor:pointer;
  }
</style>
