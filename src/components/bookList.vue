<script setup lang="ts">
import { ref } from 'vue'


</script>

<template>
<div class="container">
  <div class="row">
    <div class="operation">
      <div class="edit">Edit</div>
      <div class="delete">Delete</div>
    </div>
    <div class="bookItem">
      <div class="bookTitle">
        <h2>War and Peace</h2>
        <p>Leo Tolstoy</p>
      </div>
      <article class="bookDescribers">
        This is a demo application built on Golang, Gin Framework, Typescript, Vue.js, and PostgreSQL. Try to fork a envirment and make some code changes
      </article>
    </div>
  </div>
  <div class="row">
    <div class="operation">
      <div class="edit">Edit</div>
      <div class="delete">Delete</div>
    </div>
    <div class="bookItem">
      <div class="bookTitle">
        <h2>War and Peace</h2>
        <p>Leo Tolstoy</p>
      </div>
      <article class="bookDescribers">
        This is a demo application built on Golang, Gin Framework, Typescript, Vue.js, and PostgreSQL. Try to fork a envirment and make some code changes
      </article>
    </div>
  </div>
</div>

</template>

<style scoped>
.row{
  position: relative;
  margin-bottom: 45 px;
  border: 1px solid #888;
  border-radius:6px;
  padding:10px 40px;
  padding-bottom: 40px;
  max-width: 500px;
  min-width: 400px;
  margin-left: 50px;
  height:100%;
}
.bookTitle{
  display: flex;
  justify-content: space-between;
}
.bookDescribers{
  font-size: 14px;
}
.container{
  display: flex;
  flex-direction: column;
}
.operation{
    position: absolute;
    display: flex;
    right: 0;
    top: -25px;
}
.edit{
  cursor: pointer;
  color: blue;
  font-size: 18px;
  font-weight: 500;
}
.delete{
  margin-left: 6px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  color: red
}
</style>
