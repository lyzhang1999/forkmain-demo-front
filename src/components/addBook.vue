<script setup  lang="ts">
import { ref,reactive } from 'vue'

import {addBook, getBookList,deleteBook ,editBook,BookItem} from '../api/book'
const formData = reactive( {
  title: "",
  author: "",
  description:"",
})
//booklist
const bookList = ref<BookItem[]>([])
const titleInput = ref<HTMLInputElement>()

//编辑标识
const isEditStatus = ref(false)
const editId  =ref(-1)

const submit = (value: any) => {
  if (!formData.title|| !formData.author || !formData.description) {
    return      
  }
  value.preventDefault();

  if (!isEditStatus.value) {
      addBook(formData).then(() => {
      isEditStatus.value = false  
      getBookList().then(list => {
      bookList.value = list
    })
  })
  } else {
    editBook({...formData,ID:editId.value}).then(() => {
      isEditStatus.value = false  
      getBookList().then(list => {
      bookList.value = list
    })
    })
  }

}


getBookList().then(list => {
  bookList.value = list
})

const editBookItem = (book: BookItem) => {
  // editBook(book)
  isEditStatus.value = true 
  editId.value = book.ID
  titleInput.value && titleInput.value.focus()
  formData.title=book.title,
  formData.author= book.author,
  formData.description= book.description

  //
  
}

const deleteBookItem = (id: BookItem['ID']) => {
  deleteBook(id).then(() => {
    getBookList().then(list => {
      bookList.value = list
    })
  })
}

</script>

<template>
  <div class="container">
    <h2 v-if="!isEditStatus">Add a book</h2>
    <h2 v-else>Edit</h2>
    <form  class="form" >
      <div class="form-example">
        <label class="control-label" for="name">Title: </label>
        <input type="text" name="name" id="name" class="form-input" v-model="formData.title" ref="titleInput"   required>
      </div>
      <div class="form-example">
        <label class="control-label"  for="author">Author: </label>
        <input type="text" name="author" id="author" v-model="formData.author" class="form-input" required>
      </div>
        <div class="form-example">
        <label class="control-label"  for="describers">Describers: </label>
        <textarea type="describers" name="describers" id="describers" class="form-input" v-model="formData.description"  required></textarea>
      </div>
      <div class="form-button">
        <input type="submit" value="Save" @click="submit" style="cursor: pointer;"/>
      </div>
    </form>
  </div>

    <ul class="bookList-ul">
    <li v-for="(book, index) in bookList" :key="index">
      <div class="row">
          <div class="operation">
            <div class="edit" @click="editBookItem(book)">Edit</div>
            <div class="delete" @click="deleteBookItem(book.ID)">Delete</div>
          </div>
          <div class="bookItem">
            <div class="bookTitle">
              <h2>{{book.title}}</h2>
              <p>{{book.author}}</p>
            </div>
            <article class="bookDescribers">
            {{book.description}}
            </article>
          </div>
        </div>
    </li>
  </ul>

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
.row{
  position: relative;
  margin-bottom: 45px;
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
  text-align: left;
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
.bookList-ul{
  list-style: none;
  margin:0px;
}
</style>
