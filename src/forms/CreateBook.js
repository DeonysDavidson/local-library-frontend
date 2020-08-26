import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { SERVER_URL } from "../constants/serverUrl";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const CreateBook = (props) => {
  const [titleState, setTitleState] = useState("");
  const [summaryState, setSummaryState] = useState("");
  const [authorState, setAuthorState] = useState("");
  const [isbnState, setIsbnState] = useState("");
  const [genreState, setGenreState] = useState("");
  const [authListState, setAuthListState] = useState([]);
  const [genreListState, setGenreListState] = useState([]);

  useEffect(() => {
    fetch(SERVER_URL + "/catalog/authors", { mode: "cors" })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        if (data) {
          setAuthListState(data);
        }
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    fetch(SERVER_URL + "/catalog/genres", { mode: "cors" })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        if (data) {
          setGenreListState(data);
        }
      })
      .catch(console.error);
  }, []);

  const setTitle = (event) => {
    setTitleState(event.target.value);
  };

  const setAuthor = (event) => {
    setAuthorState(event.target.value);
  };
  const setSummary = (event) => {
    setSummaryState(event.target.value);
  };
  const setIsbn = (event) => {
    setIsbnState(event.target.value);
  };

  const setGenre = (event) => {
    setGenreState(event.target.value);
  };

  const submitPage = async () => {
    try {
      const data = {
        title: titleState,
        author: authorState,
        summary: summaryState,
        isbn: isbnState,
        genre: genreState
      };
      const result = await fetch(SERVER_URL + "/catalog/book/create", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      const resu = await result.json();
      if (resu) {
        alert("Book created Successfully");
        console.log(data);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <h1>Create Book : </h1>
      <Form>
        <FormGroup>
          <br />
          <Label for="title">
            <b>Title :</b>
          </Label>
          <Input plaintext value={titleState} onChange={setTitle} required />
        </FormGroup>

        <FormGroup>
          <Label for="author">
            <b>Author :</b>
          </Label>
          <Input
            type="select"
            name="authorSelect"
            id="authorSelect"
            value={authorState}
            onChange={setAuthor}
          >
            {authListState.map((author) => {
              return (
                <option value={author._id} key={author._id}>
                  {author.firstName} {author.familyName}
                </option>
              );
            })}
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="summary">
            <b>Summary :</b>
          </Label>
          <Input
            type="textarea"
            name="summary"
            id="summary"
            value={summaryState}
            onChange={setSummary}
          />
        </FormGroup>

        <FormGroup>
          <br />
          <Label for="isbn">
            <b>ISBN :</b>
          </Label>
          <Input plaintext value={isbnState} onChange={setIsbn} required />
        </FormGroup>

        <FormGroup>
          <Label for="genre">
            <b>Genre :</b>
          </Label>
          <Input
            type="select"
            name="genreSelect"
            id="genreSelect"
            value={genreState}
            onChange={setGenre}
          >
            {genreListState.map((genre) => {
              return (
                <option value={genre._id} key={genre._id}>
                  {genre.name}
                </option>
              );
            })}
          </Input>
        </FormGroup>
        <br />

        <Button onClick={submitPage}>Submit</Button>
      </Form>
    </>
  );
};

export default CreateBook;
