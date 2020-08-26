import React, { useState } from "react";
import Header from "../components/Header";
import { SERVER_URL } from "../constants/serverUrl";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const CreateAuthor = (props) => {
  const [firstNameState, setFirstName] = useState("");
  const [familyNameState, setFamilyName] = useState("");
  const [dobState, setDob] = useState("");
  const [dodState, setDod] = useState("");
  // console.log(dobState);
  // console.log(dodState);

  const setFirst = (event) => {
    setFirstName(event.target.value);
  };

  const setFamily = (event) => {
    setFamilyName(event.target.value);
  };
  const setDobState = (event) => {
    setDob(event.target.value);
  };
  const setDodState = (event) => {
    setDod(event.target.value);
  };

  const submitPage = async () => {
    try {
      const data = {
        firstName: firstNameState,
        familyName: familyNameState,
        dateOfBirth: dobState,
        dateOfDeath: dodState
      };
      const result = await fetch(SERVER_URL + "/catalog/author/create", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      const resu = await result.json();
      if (resu) {
        alert("Author created Successfully");
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <h1>Create Author : </h1>
      <Form>
        <FormGroup>
          <br />
          <Label for="firstName">
            <b>First Name :</b>
          </Label>
          <Input
            plaintext
            value={firstNameState}
            onChange={setFirst}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label for="familyName">
            <b>Family Name :</b>
          </Label>
          <Input
            plaintext
            value={familyNameState}
            onChange={setFamily}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label for="dob">
            <b>Date of Birth :</b>
          </Label>
          <Input
            type="date"
            name="dob"
            id="dob"
            placeholder="date placeholder"
            onChange={setDobState}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label for="dod">
            <b>Date of Death :</b>
          </Label>
          <Input
            type="date"
            name="dod"
            id="dod"
            placeholder="date placeholder"
            onChange={setDodState}
            required
          />
        </FormGroup>
      </Form>

      <Button onClick={submitPage}>Submit</Button>
    </>
  );
};

export default CreateAuthor;
