import React, { useState } from "react";
import Header from "../components/Header";
import { SERVER_URL } from "../constants/serverUrl";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const CreateGenre = (props) => {
  const [genreState, setGenreName] = useState("");

  const setGenre = (event) => {
    setGenreName(event.target.value);
  };

  const submitPage = async () => {
    try {
      const data = {
        name: genreState
      };
      const result = await fetch(SERVER_URL + "/catalog/genre/create", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      const resu = await result.json();
      if (resu.CreatedGenre) {
        alert("Genre created successfully");
      }
    } catch (e) {
      console.error(e);
      alert("Genre already exists");
    }
  };

  return (
    <>
      <h1>Create Genre : </h1>
      <Form>
        <FormGroup>
          <br />
          <Label for="genre">
            <b>Genre :</b>
          </Label>
          <Input plaintext value={genreState} onChange={setGenre} required />
        </FormGroup>

        <Button onClick={submitPage}>Submit</Button>
      </Form>
    </>
  );
};

export default CreateGenre;
