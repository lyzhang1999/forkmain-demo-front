<script  lang="ts">
import AddBook from './components/addBook.vue'
import BookList from './components/bookList.vue'
import { getEnv } from './api/env'
import { getBookList } from './api/book'
import { defineComponent, ref, watchEffect } from 'vue';

export default defineComponent({
  components: {
		BookList,
		AddBook
  },
  setup() {
    //env
    const currentEnv = ref("")
    getEnv().then(env => {
     currentEnv.value = env
    })


    //booklist
    const bookList = ref({})
    getBookList().then(list => {
      
    })
    return { 
      currentEnv,
      bookList
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
  
    <h3>You are viewing envirment:</h3>
    <p>This is a demo application built on Golang, Gin Framework, Typescript, Vue.js, and PostgreSQL. Try to fork a envirment and make some code changes</p>
  </div>
  <div class="booksDemo">
    <AddBook/>
    <BookList/>
  </div>

</template>

<style scoped>
.booksDemo{
  margin-top: 50px;
 display: flex;
 justify-content: space-around; 
}
.Title{
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.logo{
  width: 40px;
  height:40px;
}
.h2{
  flex: 1;
  font-size:30px
}
</style>
