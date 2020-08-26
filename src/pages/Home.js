import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { SERVER_URL } from "../constants/serverUrl";

const Home = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetch(SERVER_URL + "/", { mode: "cors" })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setRecords(data);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <h1>Welcome to the Local Library</h1>
      <h4>Statistics Corner:</h4>
      {records.map((record, recordIndex) => {
        return (
          <p key={recordIndex}>
            {record.name} : {record.count}
          </p>
        );
      })}
    </>
  );
};

export default Home;
