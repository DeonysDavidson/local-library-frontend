import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { SERVER_URL } from "../constants/serverUrl";

const BooksDisplay = () => {
  const [booksState, setBooksState] = useState([]);

  useEffect(() => {
    fetch(SERVER_URL + "/catalog/books", { mode: "cors" })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        if (data) {
          setBooksState(data);
        }
      })
      .catch(console.error);
  }, []);

  const deleteBook = async (id) => {
    const result = await fetch(SERVER_URL + "/catalog/book/" + id + "/delete", {
      method: "DELETE",
      mode: "cors"
    });
    const resu = await result.json();
    if (resu.deletedBook) {
      let books = [...booksState];
      const newList = books.filter((book) => {
        return book._id !== id;
      });
      console.log(newList);
      setBooksState(newList);
    }
  };

  return (
    <>
      <h1>Books List:</h1>
      <br />
      {booksState.map((book, bookIndex) => {
        return (
          <>
            <div>
              <p key={bookIndex}>Title : {book.title}</p>
              <p>Summary : {book.summary}</p>
              <p>
                Author : {book.author.firstName} {book.author.familyName}
              </p>
              <p>ISBN : {book.isbn}</p>
              &nbsp;&nbsp;
              <button onClick={() => deleteBook(book._id)}>delete</button>
              &nbsp;&nbsp;&nbsp;
              <button>Update</button>
            </div>
            <hr />
          </>
        );
      })}
    </>
  );
};

export default BooksDisplay;
