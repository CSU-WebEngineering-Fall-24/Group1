import React, { useState } from "react";
import './style.css';
import Loading from "../components/Loading.jsx";
import axios from "axios";

const Home = () => {
    const [randomBook, setRandomBook] = useState(null);
    const [randomBookStatus, setRandomBookStatus] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const bookList = [
        { title: "Pride and Prejudice", author: "Jane Austen", subject: "Classic Literature" },
        { title: "1984", author: "George Orwell", subject: "Dystopian Fiction" },
        { title: "To Kill a Mockingbird", author: "Harper Lee", subject: "American Literature" },
        { title: "The Hobbit", author: "J.R.R. Tolkien", subject: "Fantasy Fiction" },
        { title: "The Great Gatsby", author: "F. Scott Fitzgerald", subject: "Classic Literature" },
        { title: "The Lord of the Rings", author: "J.R.R. Tolkien", subject: "Fantasy Fiction" },
        { title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", subject: "Fantasy Fiction" },
        { title: "Jane Eyre", author: "Charlotte Brontë", subject: "Classic Literature" },
        { title: "The Odyssey", author: "Homer", subject: "Epic Poetry" }
        // Add more books as needed
    ];

    const randomBookSearch = async () => {
        const randomIndex = Math.floor(Math.random() * bookList.length);
        const selectedBook = bookList[randomIndex];
        
        try {
            setIsLoading(true);
            const response = await axios.get(`/search/titles`, {
                params: {
                    title: selectedBook.title
                }
            });

            const data = response.data;

            if (data.docs && data.docs.length > 0) {
                const bookDetails = data.docs[0]; // Pick the first result
                let bookCover = null;
                if (bookDetails.cover_i) {
                    try {
                        const bookCoverResponse = await axios.get(`/book/${bookDetails.cover_i}`, {
                            responseType: 'arraybuffer' 
                        });
                        const blob = new Blob([bookCoverResponse.data], { type: 'image/jpeg' });
                        bookCover = URL.createObjectURL(blob);
                
                    } catch (error) {
                        console.error('Error fetching the book cover:', error);
                    }

                }
                setRandomBook({
                    title: bookDetails.title,
                    author: bookDetails.author_name ? bookDetails.author_name.join(", ") : "Unknown",
                    subject: selectedBook.subject,
                    cover: bookCover,
                });
                setRandomBookStatus("success");
                setIsLoading(false);
            } else {
                setRandomBook(null);
                setRandomBookStatus("No results found");
                setIsLoading(false);
            }
        } catch (error) {
            console.error("Error fetching book data:", error);
            setRandomBookStatus("error");
            setIsLoading(false);
        }
    };

    return (
        <div className="homeContentContainer">
            <div className="col-6 mt-3">
                <h4 className="text-center">The Open Library API Book Search Project</h4>
                <p className="lead">This web application was developed using the Open Library Search API. The API is the most convenient way to retrieve book data on Open Library! The API allows you to return both the Work level information such as author and year published as well as Edition level information including book title, identifiers, and covers.</p>
                <h5 className="pt-3 text-center">Using Book Search</h5>
                <p className="lead">Users can get a random book when this page is loaded by clicking the 'Get Random Book' button, or search for a book by <b>author</b> or <b>title</b> using the <a className="text-primary-emphasis" href="/bookSearch">BookSearch</a> page. The search will return a list of results found from the search query, including book title, author and related subject information.</p>
            </div>
            <button type="button" className="btn btn-secondary btn-lg" style={{margin:'24px 0px'}} onClick={randomBookSearch}>Get Random Book</button>
            <div className="bookContainer">
                <h1>Book Of The Day:</h1>
                {randomBookStatus === "success" && randomBook ? (
                    <div className="book">
                        <img
                            src={randomBook.cover || "placeholder-image.png"}
                            alt={randomBook.title}
                        />
                        <h2>Title: {randomBook.title}</h2>
                        <h3>Author: {randomBook.author}</h3>
                        <p>Subject: {randomBook.subject}</p>
                    </div>
                ) : (
                    <p>{randomBookStatus || "Click the button to fetch a book!"}</p>
                )}
            </div>
            {isLoading && <div className="loadingContainer"> <Loading /></div>
           }
        </div>
    );
};

export default Home;
