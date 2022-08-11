<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <div class="container">
  <h2>Add a book</h2>
  <form action="" method="get" class="form">
  <div class="form-example">
    <label class="control-label" for="name">Title: </label>
    <input type="text" name="name" id="name" class="form-input"  required>
  </div>
  <div class="form-example">
    <label class="control-label"  for="email">Author: </label>
    <input type="email" name="email" id="email" class="form-input" required>
  </div>
    <div class="form-example">
    <label class="control-label"  for="describers">Describers: </label>
    <textarea type="describers" name="describers" id="describers" class="form-input"  required></textarea>
  </div>
  <div class="form-button">
    <input type="submit" value="Save">
  </div>
</form>

  </div>
</template>

<style scoped>

.container{
  border: 1px solid #888;
  border-radius:6px;
  padding:10px 40px;
  max-width: 500px;
  min-width: 400px;
  height:100%
}
.form-example{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 20px;
}
.form-input{
  width: 70%;
}
.control-label{
  font-size: 20px;
  flex:1;
  text-align: left;
}
</style>
