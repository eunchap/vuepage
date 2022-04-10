<!--<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <h1> hello </h1>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
-->
<template>
  
  <div class = "black-bg" v-if="모달창열렸니 == true"><!-- 조건식이 참인 경우에만 HTML 보여줌 -->
    <div class = "white-bg">
        <h4>상세페이지임</h4>
        <p>상세페이지 내용임</p>
        <button @click="모달창열렸니 = false">닫기</button>
    </div>
  </div>

  <h2>추가</h2>

  <div class = "menu">
    <!-- 반복적인 요소 -->
    
    <a v-for = "header in menus" :Key = "header">{{header}}</a>
    
  </div>
  <!--
  <div v-for= "(room, i) in products" :key="i">
    <h4>{{products[i]}} 원룸</h4>
    <p> {{ price[i] }} 만원 </p>
  </div>
  -->
  <!--
  <div>
    <img src="./assets/room0.jpg" class= "room-img">
    <h4 @click="모달창열렸니 = true">{{products[0]}} 원룸</h4>
    <p> {{price[0]}} 만원 </p>
    <button @click = "신고수[0] ++">허위매물신고</button><span>신고수 :{{신고수[0]}} </span>
  </div>
  -->
  <div v-for = "(oneroom, i) in 원룸들" :key="i">
    <img :src = "원룸들[i].image" class="room-img">
    <h4>{{원룸들[i].title}}</h4>
    <p>{{원룸들[i].price}}원</p>
  </div>
  <!--
  <div>
    <img src="./assets/room1.jpg" class= "room-img">
    <h4>{{products[1]}} 원룸</h4>
    <p> {{price[1]}} 만원 </p>
    <button @click = "신고수[1] ++">허위매물신고</button><span>신고수 :{{신고수[1]}} </span>
  </div>
  <div>
    <img src="./assets/room2.jpg" class= "room-img">
    <h4>{{products[2]}} 원룸</h4>
    <p> {{price[2]}} 만원 </p>
    <button @click = "신고수[2] ++">허위매물신고</button><span>신고수 :{{신고수[2]}} </span>
  </div>
  -->

</template>

<script>

import data from './assets/oneroom.js'
export default {
  name: 'App',
  data(){
    return {
      //데이터 보관
      //UI의 상태 저장
      //애초에 바뀔일 없으면 데이터 바인딩 할 필요없음 
        원룸들 : data,
        모달창열렸니: false,
        price1 : 50, 
        price2 : 70,
        price3 : 80,
        price :[50, 70, 80],
        menus : ['Home','Shop','About'],
        products : ['역삼동원룸', '천호동원룸', '마포구원룸'],  
        신고수 : [0, 0, 0],
    }
  }, 
  methods: {
    //함수 선언 공간
    increase(){
      this.신고수 += 1;
    }
  },
}
</script>
 
<style>
body {
  margin: 0;
}
div {
  box-sizing: border-box;
}
.black-bg{
  width:100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}
.white-bg{
  width :100%;
  background: white;
  border-radius:8px;
  padding: 20px;
}
.room-img{
  width: 100%;
  margin-top: 40px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}

.menu{
  background: rgb(253, 157, 173);
  padding : 15px;
  border-radius: 5px;
}
.menu a{
  color:white;
  padding: 10px;
}

</style>