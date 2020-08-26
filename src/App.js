import React, { useState } from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import BooksDisplay from "./pages/BooksDisplay";
import AuthorsDisplay from "./pages/AuthorsDisplay";
import GenreDisplay from "./pages/GenreDisplay";
import BookInstanceDisplay from "./pages/BooksInstancesDisplay";
import CreateAuthor from "./forms/CreateAuthor";
import CreateGenre from "./forms/CreateGenre";
import CreateBook from "./forms/CreateBook";
import CreateBookInstance from "./forms/CreateBookInstance";

export default function App() {
  const [pageState, setPageState] = useState("");

  const pageSelector = () => {
    switch (pageState) {
      case "allAuthors":
        return <AuthorsDisplay />;
      case "allBooks":
        return <BooksDisplay />;
      case "allGenre":
        return <GenreDisplay />;
      case "allInstances":
        return <BookInstanceDisplay />;
      case "createAuthor":
        return <CreateAuthor />;
      case "createBook":
        return <CreateBook />;
      case "createGenre":
        return <CreateGenre />;
      case "createInstance":
        return <CreateBookInstance />;

      default:
        return <Home />;
    }
  };

  return (
    <>
      <Header control={setPageState} />
      {/* {pageState === "allBooks" ? <BooksDisplay /> : ""} */}
      {pageSelector()}
    </>
  );
}
