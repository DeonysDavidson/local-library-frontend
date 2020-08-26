import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { SERVER_URL } from "../constants/serverUrl";

const BookInstanceDisplay = () => {
  const [bookInstanceState, setBookInstanceState] = useState([]);

  useEffect(() => {
    fetch(SERVER_URL + "/catalog/bookInstances", { mode: "cors" })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        if (data) {
          console.log(data);
          setBookInstanceState(data);
        }
      })
      .catch(console.error);
  }, []);

  // const deleteInstance = async (id) => {
  //   const result = await fetch(
  //     SERVER_URL + "/catalog/bookInstance/" + id + "/delete",
  //     {
  //       method: "DELETE",
  //       mode: "cors"
  //     }
  //   );
  //   const resu = await result.json();
  //   if (resu.deletedAuthor) {
  //     let authors = [...authorState];
  //     const newList = authors.filter((author) => {
  //       return author._id !== id;
  //     });
  //     console.log(newList);
  //     setAuthorState(newList);
  //   }
  // };

  return (
    <>
      <h1>Books Copy List:</h1>
      <br />
      <ul>
        {bookInstanceState.map((bookInstance, bookInstanceIndex) => {
          console.log(bookInstance);
          return (
            <>
              <li key={bookInstanceIndex}>
                <b>{bookInstance.book.title}</b>:{bookInstance.imprint} -{" "}
                <em>{bookInstance.status}</em> (<b>Due date : </b>{" "}
                {bookInstance.dueBack})
              </li>

              {/* &nbsp;&nbsp;
              <button onClick={() => deleteAuthor(author._id)}>delete</button> */}
            </>
          );
        })}
      </ul>
    </>
  );
};

export default BookInstanceDisplay;
