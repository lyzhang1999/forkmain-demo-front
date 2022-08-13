<script  lang="ts">
import AddBook from './components/addBook.vue'
import { getEnv } from './api/env'

import { defineComponent, ref, watchEffect } from 'vue';

export default defineComponent({
  components: {
		AddBook
  },
  setup() {
    //env
    const currentEnv = ref("")
    getEnv().then(env => {
     currentEnv.value = env
    })
    return { 
      currentEnv,
    }
  }
})


</script>

<template>
  <div>
  <div class="Title">
    <img src="./assets/img/sliderlogo.png"  class="logo"/>
    <h2 class="h2">Welcome to ForkMain Demo</h2>
  </div>
  <div class="current-env">
    <h3>You are viewing environment(branch): &nbsp;</h3><h3 class="h3-env"> {{currentEnv}}</h3>
    </div>
    <p>This is a demo application built on Golang, Gin Framework, Typescript, Vue.js, and PostgreSQL. Try to fork an envirment and make some code changes.</p>
  </div>
  <div class="booksDemo">
    <AddBook/>
  </div>

</template>

<style scoped>
.booksDemo{
  margin-top: 50px;
 display: flex;
 justify-content: space-around; 
}
.Title{

}
.logo{
  width: 80px;
  height:80px;
  padding-bottom: 15px;
}
.h2{
  flex: 1;
  font-size:30px
}
.current-env{
  display: flex;
  justify-content: center;
  align-items: center;
}
.h3-env{
  text-fill-color: transparent;
  background: linear-gradient(207deg,#b794f6 1%,#ce5ba9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 24px;
}
</style>
