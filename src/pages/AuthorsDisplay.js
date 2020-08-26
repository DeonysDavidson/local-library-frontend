import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { SERVER_URL } from "../constants/serverUrl";

const AuthorsDisplay = () => {
  const [authorState, setAuthorState] = useState([]);

  useEffect(() => {
    fetch(SERVER_URL + "/catalog/authors", { mode: "cors" })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        if (data) {
          setAuthorState(data);
        }
      })
      .catch(console.error);
  }, []);

  const deleteAuthor = async (id) => {
    const result = await fetch(
      SERVER_URL + "/catalog/author/" + id + "/delete",
      {
        method: "DELETE",
        mode: "cors"
      }
    );
    const resu = await result.json();
    if (resu.deletedAuthor) {
      let authors = [...authorState];
      const newList = authors.filter((author) => {
        return author._id !== id;
      });
      console.log(newList);
      setAuthorState(newList);
    }
  };

  return (
    <>
      <h1>Authors List:</h1>
      <br />
      {authorState.map((author, authorIndex) => {
        return (
          <>
            <div>
              <ul>
                <li>
                  <p key={authorIndex}>
                    {author.firstName} {author.familyName}
                  </p>
                </li>
              </ul>
              {/* &nbsp;&nbsp; */}
              {/* <button onClick={() => deleteAuthor(author._id)}>delete</button> */}
            </div>
            <hr />
          </>
        );
      })}
    </>
  );
};

export default AuthorsDisplay;
