//book

import http from "../utils/axios";


interface Book{

}

//add 
export const addBook = (req:Book): Promise<null> => {
  return http.post('/books',req)
}

//edit
export const editBook = (req:Book): Promise<null> => {
  return http.put(`/books/${"id"}`,req)
}

//delete bookmark
export const deleteBook = (req:number): Promise<null> => {
  return http.post(`/books/${req}`)
}

//get booklist
export interface BookList {
  
}

export const getBookList = (): Promise<BookList> => {
  return http.get('/books')
}





  
