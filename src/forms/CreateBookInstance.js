import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { SERVER_URL } from "../constants/serverUrl";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const CreateBookInstance = (props) => {
  const [bookState, setBookState] = useState("");
  const [imprintState, setImprintState] = useState("");
  const [dateState, setDateState] = useState("");
  const [statusState, setStatusState] = useState("");
  const [bookListState, setBookListState] = useState([]);

  useEffect(() => {
    fetch(SERVER_URL + "/catalog/books", { mode: "cors" })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        if (data) {
          setBookListState(data);
        }
      })
      .catch(console.error);
  }, []);

  const setBook = (event) => {
    setBookState(event.target.value);
  };

  const setImprint = (event) => {
    setImprintState(event.target.value);
  };
  const setDate = (event) => {
    setDateState(event.target.value);
  };
  const setStatus = (event) => {
    setStatusState(event.target.value);
  };

  const submitPage = async () => {
    try {
      const data = {
        book: bookState,
        imprint: imprintState,
        status: statusState,
        dueBack: dateState
      };
      const result = await fetch(SERVER_URL + "/catalog/bookinstance/create", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      const resu = await result.json();
      if (resu) {
        alert("Instance created Successfully");
        console.log(data);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <h1>Create Book Copy : </h1>
      <Form>
        <FormGroup>
          <Label for="book">
            <b>Book :</b>
          </Label>
          <Input
            type="select"
            name="bookSelect"
            id="bookSelect"
            value={bookState}
            onChange={setBook}
          >
            {bookListState.map((book) => {
              return (
                <option value={book._id} key={book._id}>
                  {book.title}
                </option>
              );
            })}
          </Input>
        </FormGroup>

        <FormGroup>
          <br />
          <Label for="imprint">
            <b>Imprint :</b>
          </Label>
          <Input
            plaintext
            value={imprintState}
            onChange={setImprint}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label for="date">
            <b>Date when availible :</b>
          </Label>
          <Input
            type="date"
            name="date"
            id="date"
            placeholder="date placeholder"
            onChange={setDate}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label for="statusSelect">
            <b>Status :</b>
          </Label>
          <Input
            type="select"
            name="statusSelect"
            id="statusSelect"
            onChange={setStatus}
          >
            <option>Maintanence</option>
            <option>Available</option>
            <option>Loaned</option>
            <option>Reserved</option>
          </Input>
        </FormGroup>

        <br />

        <Button onClick={submitPage}>Submit</Button>
      </Form>
    </>
  );
};

export default CreateBookInstance;
