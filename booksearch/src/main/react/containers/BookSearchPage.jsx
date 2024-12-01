import React, { useEffect, useState } from "react";
import "./style.css";
import SearchBar from "../components/SearchBar.jsx";
import axios from 'axios';
import Loading from "../components/Loading.jsx";
import NoCover from "../assets/images/NoCover.jpg";
import Pagination from "../components/Pagination.jsx";

const BookSearchPage = () => {

    const [books, setBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [totalResults, setTotalResults] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const booksPerPage = 5;
    const paginate = (pageNumber) => {
      setCurrentPage(pageNumber);
    }
    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);


    const SearhBook = async (data) => {
    if (data.type === "title") {
        try {
            setIsLoading(true);
            //fetch data from the server with title input
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
      try {
        setIsLoading(true);
        //fetch data from the server with author input
        const response = await axios.get(`/search/authors`, {
          params: { a: data.searchTerm }
        });
        console.log("Search by author", response.data);
        setTotalResults(response.data.numFound);
        setBooks(response.data.docs);
        setIsLoading(false);
      } catch (error) {
        console.error("Error searching by title", error);
        setIsLoading(false);
      }
    }
  };

  function getCoverImage(coverId) {
    // const baseUrl = 'http://covers.openlibrary.org/b/id/';
    // return `${baseUrl}${coverId}-L.jpg`;

    //fetch cover image from backend 
    return `/book/${coverId}`;
  }

  function getAuthorImage(authorId) {
    //not supported for author cover image
    const baseUrl = 'http://covers.openlibrary.org/a/olid/';
    return `${baseUrl}${authorId}-L.jpg`;
  }
 


  return (
    <div>
      <SearchBar searchBook={SearhBook} updateCurrentPage={setCurrentPage}/>
      <div className="resultContainer">
        <p>Total Results: {totalResults}</p>
        <ul>
            {currentBooks.map((book) => ( 
                    book.type === "work" ? 
                    <li key={book.key} className="list">
                        <div className="bookDetail">
                            <div className="coverImage">
                                <img src={book.cover_i ? getCoverImage(book.cover_i) : NoCover} alt={book.title} />
                            </div>
                            <div className="content">
                                <h5>Title: {book.title}</h5>
                                <p>Author: {book.author_name}</p>
                            </div>
                            <div className="subject">
                            <p>Subjects: {book.subject ? book.subject.slice(0, 10).join(', ') + '...' : 'No subject available'}</p>
                            </div>
                            
                        </div>
                    </li>: <li key={book.key} className="list">
                        <div className="bookDetail">
                            <div className="coverImage">
                                <img src={book.key 
                                    ? getAuthorImage(book.key)
                                    : NoCover } alt={book.title} />
                            </div>
                            <div className="content">
                                <h5>Name:{book.name}</h5>
                                <p>Top Work: {book.top_work}</p>
                            </div>
                            <div className="subject">
                            <p>Top Subjects: {book.top_subjects ? book.top_subjects.slice(0, 10).join(', ') + '...' : ' No subject available'}</p>
                            </div>
                            
                        </div>
                    </li>
                ))}
        </ul>
        {totalResults!== 0 ? <Pagination booksPerPage={booksPerPage} totalBooks={totalResults} paginate={paginate} currentPage={currentPage}/> : null}  
        
      </div>
      {isLoading && <div className="loadingContainer"> <Loading /></div>
           }
    </div>
  );
};

export default BookSearchPage;
