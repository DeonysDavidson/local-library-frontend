import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { SERVER_URL } from "../constants/serverUrl";

const GenreDisplay = () => {
  const [genreState, setGenreState] = useState([]);

  useEffect(() => {
    fetch(SERVER_URL + "/catalog/genres", { mode: "cors" })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        if (data) {
          setGenreState(data);
        }
      })
      .catch(console.error);
  }, []);

  // const deleteAuthor = async (id) => {
  //   const result = await fetch(
  //     SERVER_URL + "/catalog/author/" + id + "/delete",
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
      <h1>Genre List:</h1>
      <br />
      <ul>
        {genreState.map((genre, genreIndex) => {
          return (
            <>
              <li key={genreIndex}>{genre.name}</li>

              {/* &nbsp;&nbsp;
              <button onClick={() => deleteAuthor(author._id)}>delete</button> */}
            </>
          );
        })}
      </ul>
    </>
  );
};

export default GenreDisplay;
