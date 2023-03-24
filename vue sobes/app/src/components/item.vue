<template>
    <div class="item" :class = "{'text-active' : start}" >
      <div class="item__text" v-if="time.hours != '' && time.min != '' &&  time.sec != '' ">{{time.hours + ':' + time.min + ':' + time.sec}}</div>
      <div class="item__text" v-if="time.hours == '' && time.min != '' &&  time.sec != ''">{{time.min + ':' + time.sec}}</div>
      <div class="item__text" v-if="time.hours == '' && time.min == '' && time.sec != '' ">{{time.sec}}</div> 
      <div class="item__button">
        <img src="@/assets/start.svg" class="item__button-item" v-if="!start" @click="click_start">
        <img src="@/assets/stop.svg" class="item__button-item" v-if="start" @click="click_stop">
        <img src="@/assets/clear.svg" v-if="!start" class="item__button-item" @click="click_clear">
        <img src="@/assets/clear-active.svg" v-if="start" class="item__button-item" @click="click_clear">
      </div>
    </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      start:false,
      time:{'sec':'0','min':'','hours':''},
      totalTime:0,
      timerId:0
    }
  },
  methods:{
    showTime() {
       this.time.hours = (Math.trunc(this.totalTime/3600))
       this.time.min = (Math.trunc(this.totalTime/60 - Math.trunc(this.totalTime/3600)*60))
       this.time.sec = (this.totalTime - Math.trunc(this.totalTime/60)*60)
        if(this.time.sec < 10 && this.time.min!=''){
          this.time.sec = "0"+this.time.sec
        }
        if(this.time.min < 10 && this.time.hours!=''){
          this.time.min = "0"+this.time.min
        }
    },
    click_start(){
      this.start = true;
      this.timerId = setInterval(() => {
        this.totalTime+=1
        this.showTime();
      }, 1000);
    },
    click_stop(){
      this.start = false;
      clearInterval(this.timerId);
    },
    click_clear(){
      this.start = false;
      this.totalTime = 0;
      this.time = {'sec':'0','min':'','hours':''};
      clearInterval(this.timerId);
    }
  }
}
</script>

<style scoped>
  .item{
    background: #696969;
    width: 225px;
    height: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .text-active .item__text{
    color: #fff;
    border-bottom: 1px solid #fff;
  }
  .item__text{
    width: 100%;
    padding: 22px 0px 20px 0px;
    font-weight: 400;
    font-size: 22px;
    line-height: 21px;
    text-align: center;
    color: #9E9E9E;
    border-bottom: 1px solid #9E9E9E;
  }
  .item__button{
    padding: 20px 0px;
    display: flex;
    gap:48px;
  }
  .item__button-item{
    width: 20px;
    height: 20px;
    cursor:pointer;
  }
</style>
