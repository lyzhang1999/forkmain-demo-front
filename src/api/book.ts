//book

import http from "../utils/axios";


interface Book{
  "title": string,
  "author": string,
  "description": string,
}

//add 
export const addBook = (req:Book): Promise<null> => {
  return http.post('/books/',req)
}

interface BookEditor extends Book{
  ID:number;
}

//edit
export const editBook = (req:BookEditor): Promise<null> => {
  return http.put(`/books/${req.ID}`,req)
}

//delete bookmark
export const deleteBook = (req:number): Promise<null> => {
  return http.delete(`/books/${req}`)
}

//get booklist
export interface BookItem extends Book{
  "ID": number,
  "CreatedAt": string,
  "UpdatedAt": string,
  "DeletedAt": string,

}

export const getBookList = (): Promise<BookItem[]> => {
  return http.get('/books/')
}

