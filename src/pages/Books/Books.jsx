import React, { Suspense, useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = ({ data }) => {
  const [allbooks, setAllbooks] = useState([]);

  // useEffect(() => {
  //fetch(
  //  "https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json"
  //);
  //   fetch("booksData.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // console.log(data);
  //       setAllbooks(data);
  //     });
  // }, []);

  //const bookPromise = fetch("./booksData.json").then((res) => res.json());

  return (
    <div>
      <h1 className="text-3xl text-center p-5">Books</h1>
      <Suspense fallback={<span>loading.....</span>}></Suspense>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((singleBook) => (
          <Book key={singleBook.bookId} singleBook={singleBook}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
