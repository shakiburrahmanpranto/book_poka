import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoredDB } from "../../Utility/AddtoDB";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { ToastContainer, toast } from "react-toastify";

const MySwal = withReactContent(Swal);

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();
  const singleBook = data.find((book) => book.bookId === bookId);
  const {
    bookName,
    image,
    author,
    category,
    review,
    publisher,
    tags,
    rating,
    totalPages,
    yearOfPublishing,
  } = singleBook;

  const handleMarkasRead = (id) => {
    //store with id
    // where to store : local storage
    //array or collection
    // if book already exists show an alert
    // if book not exists then push to array or collection

    // sweet alert for success
    //MySwal.fire({
    //  title: "Good job!",
    //  text: "Added to your ReadList",
    //  icon: "success",
    //});

    toast("Yeaaayyy,Marked as read!");
    addToStoredDB(id);
  };

  return (
    <div className="w-2/3 mx-auto flex">
      <div className="m-2">
        <img className="w-1000" src={image} alt="" />
      </div>
      <div className="m-2">
        <h1 className="text-4xl">{bookName}</h1>
        <ToastContainer />
        <p>By : {author}</p>
        <div className="divider"></div>
        <p>{category}</p>
        <div className="divider"></div>
        <p>
          <span className="font-bold">Review </span>:{review}
        </p>
        <p className="m-3">
          <span className="font-bold gap-2">Tags</span> : {tags}
        </p>
        <div className="divider"></div>
        <p>Number of Pages : {totalPages}</p>
        <p>Publisher : {publisher}</p>
        <p>Year of Publishing : {yearOfPublishing}</p>
        <p>Rating : {rating}</p>
        <button
          onClick={() => handleMarkasRead(id)}
          className="btn btn-accent m-2"
        >
          Mark as Read
        </button>
        <button className="btn btn-info m-2">Add to WishList</button>
      </div>
    </div>
  );
};

export default BookDetails;
