import React, { useEffect, useState } from "react";
import "./style.css";
import SearchBar from "../components/SearchBar.jsx";
import axios from 'axios';
import Loading from "../components/Loading.jsx";
import NoCover from "../assets/images/NoCover.jpg";

const BookSearchPage = () => {

    const [books, setBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [totalResults, setTotalResults] = useState(0);
    const SearhBook = async (data) => {
    if (data.type === "title") {
        try {
            setIsLoading(true);
            const response = await axios.get(`/search/titles`, {
              params: { title: data.searchTerm }
            });
            console.log("Search by title", response.data);
            setTotalResults(response.data.numFound);
            setBooks(response.data.docs);
            setIsLoading(false);
          } catch (error) {
            console.error("Error searching by title", error);
            setIsLoading(false);
          }
    }
    if (data.type === "author") {
      console.log("Search by author");
    }
  };

  return (
    <div>
      <SearchBar searchBook={SearhBook} />
      <div className="resultContainer">
        <p>Total Results: {totalResults}</p>
        <ul>
            {books.map((book) => ( 
                    <li key={book.key}>
                        <div className="bookDetail">
                            <div className="coverImage">
                                <img src={book.cover_i
                                    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
                                    : NoCover } alt={book.title} />
                            </div>
                            <div className="content">
                                <h5>Title: {book.title}</h5>
                                <p>Author: {book.author_name}</p>
                            </div>
                            <div className="subject">
                            <p>Subject: {book.subject ? book.subject.slice(0, 10).join(', ') + '...' : 'No subject available'}</p>
                            </div>
                            
                        </div>
                    </li>
                ))}
          {/* <li>
            <div className="bookDetail">
              <div className="coverImage">
                <img
                  src="https://covers.openlibrary.org/b/id/8747743-L.jpg"
                  alt="book1"
                />
              </div>
              <div className="contenet">
                <h2>Title: book1</h2>
                <p>Author: author1</p>
              </div>
              <p>Subject: subject1</p>
            </div>
          </li> */}
        </ul>
      </div>
      {isLoading && <div className="loadingContainer"> <Loading /></div>
           }
    </div>
  );
};

export default BookSearchPage;
